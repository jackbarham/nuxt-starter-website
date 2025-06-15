<template>
  <div class="flex flex-col h-screen justify-between">
    <p>Header</p>
    <main role="main" class="mb-auto">
      <div class="overflow-hidden py-16 md:py-24">
        <slot />
      </div>
    </main>
    <p>Footer</p>
  </div>
</template>