<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  layout?: 'single' | 'two-column' | 'three-column'
  showProgress?: boolean
  showHeader?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  layout: 'single',
  showProgress: false,
  showHeader: true,
  compact: true
})

const layoutClasses = {
  'single': 'max-w-5xl mx-auto',
  'two-column': 'grid-2',
  'three-column': 'grid-3'
}
</script>

<template>
  <div class="h-full flex flex-col bg-white dark:bg-gray-900">
    <!-- Compact Header -->
    <div v-if="props.showHeader && props.title" class="mb-6">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">{{ props.title }}</h1>
      <h2 v-if="props.subtitle" class="text-sm text-gray-600 dark:text-gray-300 font-normal tracking-wide">{{ props.subtitle }}</h2>
    </div>

    <!-- Minimal Progress Bar (optional) -->
    <div v-if="props.showProgress" class="mb-4">
      <div class="w-full h-px bg-gray-200 dark:bg-gray-700">
        <div class="h-full bg-gray-900 dark:bg-white transition-all duration-300 ease-out" style="width: 75%"></div>
      </div>
    </div>

    <!-- Content Area - Maximized -->
    <div class="flex-1 overflow-hidden" :class="layoutClasses[props.layout]">
      <slot />
    </div>

    <!-- Minimal Footer -->
    <div class="mt-4 flex justify-between items-center text-xs text-gray-400 dark:text-gray-500">
      <div>
        <slot name="footer-left" />
      </div>
      <div>
        <slot name="footer-right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Compact content animation */
.content-enter-active {
  transition: all 0.2s ease-out;
}

.content-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
</style>
