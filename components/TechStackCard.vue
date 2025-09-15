<script setup lang="ts">
interface TechItem {
  label: string
  value: string
}

interface Props {
  title: string
  items: TechItem[]
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary'
})

const colorClasses = {
  primary: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20',
  secondary: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20',
  success: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20',
  warning: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20',
  danger: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
}

const titleClasses = {
  primary: 'text-blue-700 dark:text-blue-300',
  secondary: 'text-green-700 dark:text-green-300',
  success: 'text-green-700 dark:text-green-300',
  warning: 'text-yellow-700 dark:text-yellow-300',
  danger: 'text-red-700 dark:text-red-300'
}
</script>

<template>
  <div 
    class="tech-stack-card border-2 rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
    :class="colorClasses[props.color]"
  >
    <h3 
      class="text-lg font-semibold mb-4"
      :class="titleClasses[props.color]"
    >
      {{ props.title }}
    </h3>
    
    <div class="space-y-2">
      <div 
        v-for="(item, index) in props.items" 
        :key="index"
        class="tech-item flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600 last:border-b-0"
      >
        <span class="tech-label text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ item.label }}:
        </span>
        <span class="tech-value text-sm font-semibold text-gray-900 dark:text-white">
          {{ item.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-stack-card {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
