<template>
  <div class="flex flex-col h-screen justify-between">
    <MainHeader />
    <main role="main" class="mb-auto">
      <div class="overflow-hidden">
        <slot />
      </div>
    </main>
    <p>Footer</p>
  </div>
</template>