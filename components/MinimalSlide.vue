<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  layout?: 'single' | 'two-column' | 'three-column'
  showHeader?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  layout: 'single',
  showHeader: true
})

const layoutClasses = {
  'single': 'max-w-6xl mx-auto',
  'two-column': 'grid-2',
  'three-column': 'grid-3'
}
</script>

<template>
  <div class="h-full flex flex-col bg-white dark:bg-gray-900">
    <!-- Minimal Header -->
    <div v-if="props.showHeader && props.title" class="mb-4">
      <h1 class="text-xl font-semibold text-gray-900 dark:text-white mb-1 tracking-tight">{{ props.title }}</h1>
      <h2 v-if="props.subtitle" class="text-xs text-gray-500 dark:text-gray-400 font-normal tracking-wide">{{ props.subtitle }}</h2>
    </div>

    <!-- Content Area - Maximum Space -->
    <div class="flex-1 overflow-hidden" :class="layoutClasses[props.layout]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Minimal content animation */
.content-enter-active {
  transition: all 0.15s ease-out;
}

.content-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
