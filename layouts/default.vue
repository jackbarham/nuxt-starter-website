<template>
  <div class="flex flex-col h-screen justify-between">
    <MainHeader />
    <main role="main" class="mb-auto pt-16 md:pt-20">
      <div class="py-12 overflow-hidden">
        <slot />
      </div>
    </main>
    <MainFooter />
  </div>
</template>