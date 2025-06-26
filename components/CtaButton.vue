<template>
  <NuxtLink
    :to="props.link"
    class="inline-block w-full bg-brand-red text-white px-6 py-3 rounded-full hover:bg-brand-red-dark transition-colors"
    :aria-label="props.text"
  >
    <span class="block text-xl font-medium tracking-wide text-center">{{ props.text }}</span>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  // theme: {
  //   type: String,
  //   required: false,
  //   default: 'dark',
  // },
  // arrow: {
  //   type: Boolean,
  //   required: false,
  //   default: true,
  // },
})
</script>