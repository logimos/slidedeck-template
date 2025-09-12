<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  layout?: 'single' | 'two-column' | 'three-column'
  showProgress?: boolean
  showHeader?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  layout: 'single',
  showProgress: true,
  showHeader: true
})

const layoutClasses = {
  'single': 'max-w-4xl mx-auto',
  'two-column': 'grid-2',
  'three-column': 'grid-3'
}
</script>

<template>
  <div class="h-full flex flex-col bg-white dark:bg-gray-900">
    <!-- Header -->
    <div v-if="props.showHeader && (props.title || props.subtitle)" class="mb-12">
      <h1 v-if="props.title" class="text-4xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">{{ props.title }}</h1>
      <h2 v-if="props.subtitle" class="text-lg text-gray-700 dark:text-gray-200 font-light tracking-wide">{{ props.subtitle }}</h2>
    </div>

    <!-- Progress Bar -->
    <div v-if="props.showProgress" class="mb-8">
      <div class="w-full h-px bg-gray-200 dark:bg-gray-700">
        <div class="h-full bg-gray-900 dark:bg-white transition-all duration-300 ease-out" style="width: 75%"></div>
      </div>
    </div>

    <!-- Content Area -->
    <div class="flex-1" :class="layoutClasses[props.layout]">
      <slot />
    </div>

    <!-- Footer -->
    <div class="mt-12 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
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
/* Content animation */
.content-enter-active {
  transition: all 0.3s ease-out;
}

.content-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
