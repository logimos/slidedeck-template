<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  sectionNumber?: number
  totalSections?: number
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: '',
  sectionNumber: 1,
  totalSections: 1
})
</script>

<template>
  <div class="h-full flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900">
    <!-- Section Progress -->
    <div class="mb-16">
      <div class="flex items-center justify-center space-x-3 mb-6">
        <div class="w-8 h-8 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white flex items-center justify-center font-light text-sm">
          {{ props.sectionNumber }}
        </div>
        <div class="text-gray-500 dark:text-gray-400 text-sm font-light">
          of {{ props.totalSections }}
        </div>
      </div>
      <div class="w-24 h-px bg-gray-200 dark:bg-gray-700">
        <div 
          class="h-full bg-gray-900 dark:bg-white transition-all duration-500 ease-out"
          :style="{ width: `${(props.sectionNumber / props.totalSections) * 100}%` }"
        ></div>
      </div>
    </div>

    <!-- Section Title -->
    <div class="max-w-4xl mx-auto px-8">
      <h1 class="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
        {{ props.title }}
      </h1>
      <h2 v-if="props.subtitle" class="text-xl text-gray-700 dark:text-gray-200 font-light tracking-wide">
        {{ props.subtitle }}
      </h2>
    </div>
  </div>
</template>

<style scoped>
h1 {
  animation: slideInFromLeft 0.8s ease-out;
}

h2 {
  animation: slideInFromRight 0.8s ease-out 0.2s both;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
