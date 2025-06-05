<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useSidebarStore } from '../store/sidebarStore'
import { useThemeStore } from '../store/themeStore'
import SidebarLink from '../components/SidebarLink.vue'
import ThemeToggle from '../components/ThemeToggle.vue'

const sidebarStore = useSidebarStore()
const themeStore = useThemeStore()
const router = useRouter()

// Navigation items
const navItems = [
  {
    title: 'Declarative Rendering',
    to: '/declarative-rendering',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>'
  },
  {
    title: 'Attribute Bindings',
    to: '/attribute-bindings',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>'
  },
  {
    title: 'Event Listeners',
    to: '/event-listeners',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>'
  },
  {
    title: 'Form Bindings',
    to: '/form-bindings',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>'
  },
  {
    title: 'Conditional Rendering',
    to: '/conditional-rendering',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
  },
  {
    title: 'List Rendering',
    to: '/list-rendering',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>'
  },
  {
    title: 'Computed Properties',
    to: '/computed-properties',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>'
  },
  {
    title: 'Lifecycle & Template Refs',
    to: '/lifecycle-and-refs',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>'
  },
  {
    title: 'Watchers',
    to: '/watchers',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>'
  }
]

// Close mobile sidebar on route change
watch(() => router.currentRoute.value, () => {
  sidebarStore.closeMobileSidebar()
})

// Handle responsive sidebar
const checkWindowSize = () => {
  if (window.innerWidth < 768) {
    sidebarStore.isOpen = false
  } else {
    sidebarStore.isOpen = true
  }
}

onMounted(() => {
  themeStore.initTheme()
  checkWindowSize()
  window.addEventListener('resize', checkWindowSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkWindowSize)
})
</script>

<template>
  <div>
    <!-- Mobile sidebar backdrop -->
    <div v-if="sidebarStore.isMobileOpen" @click="sidebarStore.toggleMobileSidebar"
      class="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden"></div>

    <!-- Sidebar -->
    <aside
      class="fixed top-0 left-0 z-30 h-full flex flex-col transition-all duration-300 transform bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800"
      :class="[
        sidebarStore.isOpen ? 'md:w-64' : 'md:w-20',
        sidebarStore.isMobileOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:translate-x-0'
      ]">

      <!-- Sidebar header -->
      <div class="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center">
          <img src="/icons/vuejs.png" alt="Vue Logo" class="transition-all duration-300 object-contain"
            :style="{ width: sidebarStore.isOpen || sidebarStore.isMobileOpen ? '24px' : '24px', height: '24px' }">

          <h1 v-if="sidebarStore.isOpen || sidebarStore.isMobileOpen"
            class="ml-2 text-lg font-medium text-gray-800 dark:text-white">
            Vue Learn
          </h1>
        </div>
        <button v-if="sidebarStore.isMobileOpen" @click="sidebarStore.toggleMobileSidebar"
          class="md:hidden p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <button v-if="!sidebarStore.isMobileOpen" @click="sidebarStore.toggleSidebar"
          class="hidden md:block p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="sidebarStore.isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-3 py-4 overflow-y-auto">
        <div v-if="sidebarStore.isOpen || sidebarStore.isMobileOpen">
          <template v-for="item in navItems" :key="item.to">
            <SidebarLink :to="item.to" :icon="item.icon" :title="item.title" />
          </template>
        </div>
        <div v-else class="space-y-2 py-2">
          <template v-for="item in navItems" :key="item.to">
            <router-link :to="item.to" :title="item.title"
              class="flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              :class="{ 'bg-primary-50 dark:bg-gray-800 text-primary-700 dark:text-white': $route.path === item.to }">
              <span v-html="item.icon"></span>
            </router-link>
          </template>
        </div>
      </nav>

      <!-- Footer -->
      <div class="p-3 border-t border-gray-200 dark:border-gray-800">
        <div class="flex items-center justify-between">
          <ThemeToggle />
          <div v-if="sidebarStore.isOpen || sidebarStore.isMobileOpen" class="text-xs text-gray-500 dark:text-gray-400">
            Vue 3 Learning Platform
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>