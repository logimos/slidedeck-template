<script setup lang="ts">
interface Props {
  title: string
  description: string
  tradeoff?: string
  rationale?: string
  tag?: string
  tagColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

const props = withDefaults(defineProps<Props>(), {
  tag: '',
  tagColor: 'primary'
})

const tagClasses = {
  primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  secondary: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
}
</script>

<template>
  <div class="decision-item bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
    <div class="decision-header flex items-start justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white pr-4">
        {{ props.title }}
      </h3>
      <span 
        v-if="props.tag"
        class="decision-tag px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
        :class="tagClasses[props.tagColor]"
      >
        {{ props.tag }}
      </span>
    </div>
    
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {{ props.description }}
    </p>
    
    <div v-if="props.tradeoff" class="decision-tradeoff bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
      <strong class="text-gray-700 dark:text-gray-300">Trade-off:</strong>
      <span class="text-gray-600 dark:text-gray-400 ml-1">{{ props.tradeoff }}</span>
    </div>
    
    <div v-if="props.rationale" class="decision-rationale bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 mt-3">
      <strong class="text-blue-700 dark:text-blue-300">Rationale:</strong>
      <span class="text-blue-600 dark:text-blue-400 ml-1">{{ props.rationale }}</span>
    </div>
  </div>
</template>

<style scoped>
.decision-item {
  animation: slideInFromLeft 0.6s ease-out;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
