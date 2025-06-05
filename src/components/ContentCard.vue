<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-6 mb-6">
    <h2 v-if="title" class="text-xl font-semibold text-gray-800 dark:text-white mb-4">
      {{ title }}
    </h2>
    <div>
      <slot></slot>
    </div>
  </div>
</template>