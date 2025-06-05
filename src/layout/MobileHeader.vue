<script setup>
import { useSidebarStore } from '../store/sidebarStore'
import { useRoute } from 'vue-router'
import ThemeToggle from '../components/ThemeToggle.vue'

const sidebarStore = useSidebarStore()
const route = useRoute()

// Get current page title
const getCurrentTitle = () => {
  return route.meta.title || 'Vue Learning Platform'
}
</script>

<template>
  <header class="md:hidden fixed top-0 left-0 right-0 z-10 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4">
    <div class="flex items-center">
      <button 
        @click="sidebarStore.toggleMobileSidebar"
        class="p-1 mr-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 class="text-lg font-medium text-gray-800 dark:text-white truncate">
        {{ getCurrentTitle() }}
      </h1>
    </div>
    <ThemeToggle />
  </header>
</template>