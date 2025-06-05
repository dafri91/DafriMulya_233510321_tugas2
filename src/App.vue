<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from './store/themeStore'
import MainLayout from './layout/MainLayout.vue'

const themeStore = useThemeStore()

onMounted(() => {
  // Initialize theme
  themeStore.initTheme()
})
</script>

<template>
  <MainLayout>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </MainLayout>
</template>

<style>
/* Global styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>