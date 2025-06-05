<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>

<template>
  <router-link 
    :to="to" 
    class="flex items-center px-4 py-3 mb-1 text-gray-700 dark:text-gray-200 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
    :class="{ 'bg-primary-50 dark:bg-gray-800 text-primary-700 dark:text-white font-medium': isActive }"
  >
    <span class="w-6 h-6 flex items-center justify-center mr-3" v-html="icon"></span>
    <span class="text-sm">{{ title }}</span>
  </router-link>
</template>