<script setup>
import { computed } from 'vue'
import { useSidebarStore } from '../store/sidebarStore'
import Sidebar from './Sidebar.vue'
import MobileHeader from './MobileHeader.vue'

const sidebarStore = useSidebarStore()

// Compute content margin based on sidebar state
const contentClasses = computed(() => {
  return {
    'md:ml-64': sidebarStore.isOpen,
    'md:ml-20': !sidebarStore.isOpen,
    'mt-16': true // For mobile header
  }
})
</script>

<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Sidebar component -->
    <Sidebar />
    
    <!-- Mobile header -->
    <MobileHeader />
    
    <!-- Main content -->
    <div 
      class="flex-1 overflow-auto transition-all duration-300"
      :class="contentClasses"
    >
      <main class="p-4 md:p-8">
        <slot></slot>
      </main>
    </div>
  </div>
</template>