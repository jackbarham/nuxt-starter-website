<template>
  <NuxtLink
    :to="somePath"
    class="inline-block w-full bg-brand-red text-white px-6 py-3 rounded-full hover:bg-brand-red-dark transition-colors"
    :aria-label="label"
  >
    <span class="block text-xl font-medium tracking-wide text-center">Button text</span>
  </NuxtLink>
</template>

<script setup>
//  
</script>