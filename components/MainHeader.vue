<template>
  <header class="header fixed top-0 left-0 w-full z-50">
    <!-- Main Header -->
    <div class="bg-gray-200 relative z-50">
      <div class="h-16 md:h-20 flex justify-between items-center px-4 md:px-8">
        <!-- Logo/Title -->
        <h1 class="text-2xl md:text-3xl font-bold text-black">
          <NuxtLink to="/" @click="closeMobileMenu">{{ appTitle }}</NuxtLink>
        </h1>
        
        <!-- Desktop Menu -->
        <ul class="hidden md:flex md:space-x-16 lg:space-x-20">
          <li v-for="page in pages" :key="page.url">
            <NuxtLink :to="page.url" class="relative group font-medium tracking-wide">
              <span class="block text-base md:text-lg">{{ page.title }}</span>
              <span class="relative block">
                <span class="absolute left-0 bottom-0 h-[2px] bg-black w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left opacity-80"></span>
              </span>
            </NuxtLink>
          </li>
        </ul>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden bg-gray-800 text-white px-3 py-2 rounded relative z-50"
          aria-label="Toggle mobile menu"
        >
          {{ isMobileMenuOpen ? 'Close' : 'Menu' }}
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div 
      class="md:hidden absolute left-0 w-full bg-gray-200 z-40 p-6 pt-8 transform transition-transform duration-300 ease-in-out"
      :class="isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'"
      :style="{ top: '64px', height: 'calc(100vh - 64px)' }"
    >
      <ul class="space-y-6">
        <li v-for="page in pages" :key="page.url">
          <NuxtLink 
            :to="page.url" 
            @click="closeMobileMenu"
            class="block text-2xl font-medium tracking-wide py-3 hover:text-gray-600 transition-colors"
          >
            {{ page.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const appTitle = useRuntimeConfig().public.appTitle

// Mobile menu state
const isMobileMenuOpen = ref(false)

const pages = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Blog',
    url: '/blog'
  },
  {
    title: 'Contact',
    url: '/contact'
  }
]

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  updateBodyClass()
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  updateBodyClass()
}

// Lock/unlock body scroll
const updateBodyClass = () => {
  if (process.client) {
    if (isMobileMenuOpen.value) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
}

// Close menu when route changes
const router = useRouter()
router.afterEach(() => {
  closeMobileMenu()
})

// Cleanup on unmount
onUnmounted(() => {
  if (process.client) {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>