<template>
  <div class="bg-gray-100 rouded-xl">
    <NuxtImg
      loading="lazy"
      :src="props.src"
      :alt="props.alt"
      sizes="400 sm:600 md:900 lg:650"
      format="webp"
      class="object-cover"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
})
</script>