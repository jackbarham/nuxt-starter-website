<template>
  <header class="header">
    <div class="bg-gray-200">
      <div class="md:h-20 md:flex justify-between items-center layout-full">
        <h1 class="text-3xl text-center md:text-left mb-4 md:mb-0">
          <NuxtLink to="/">Jack Barham</NuxtLink>
        </h1>
        <ul class="flex justify-center md:justify-normal md:space-x-16 lg:space-x-20">
          <li v-for="page in pages" :key="page.url" class="px-6 md:px-0">
            <NuxtLink :to="page.url" class="relative group font-medium tracking-wide">
              <span class="block text-base md:text-lg">{{ page.title }}</span>
              <span class="relative block">
                <span class="absolute left-0 bottom-0 h-[2px] bg-black w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left opacity-80"></span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const pages = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
]
</script>