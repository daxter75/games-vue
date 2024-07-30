<script setup lang="ts">
  import logo from '@/assets/img/logo.png'
  import { RouterLink, useRoute } from 'vue-router';

  const isActiveLink = (routePath:string) => {
    const route = useRoute()
    return route.path === routePath
  }
</script>

<template>
    <nav class="bg-blue-700 border-b border-blue-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <img class="h-10 w-auto" :src="logo" alt="Games" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2">
                Games
              </span>
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/"
                  :class="[
                    'btn',
                    isActiveLink('/') ? 'btnActive' : 'btnHover'
                    ]"
                >Home
                </RouterLink>
                <RouterLink
                  to="/games"
                  :class="[
                    'btn',
                    isActiveLink('/games') ? 'btnActive' : 'btnHover'
                    ]"
                >Games
                </RouterLink>
                <RouterLink
                  to="/about"
                  :class="[
                    'btn',
                    isActiveLink('/about') ? 'btnActive' : 'btnHover'                    
                    ]"
                >About
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<style lang="postcss" scoped>
.btn {
  @apply text-white rounded-md px-3 py-2
}
.btnActive {
  @apply bg-blue-900 cursor-default;
}

.btnHover {
  @apply hover:bg-blue-900 hover:text-white;
}
</style>