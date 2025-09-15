<script setup lang="ts">
interface PatternItem {
  icon: string
  title: string
  description: string
}

interface Props {
  title: string
  items: PatternItem[]
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary'
})

const colorClasses = {
  primary: 'text-blue-700 dark:text-blue-300',
  secondary: 'text-green-700 dark:text-green-300',
  success: 'text-green-700 dark:text-green-300',
  warning: 'text-yellow-700 dark:text-yellow-300',
  danger: 'text-red-700 dark:text-red-300'
}
</script>

<template>
  <div class="compact-pattern-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4 transition-all duration-300 hover:shadow-lg">
    <h3 
      class="text-base font-semibold mb-3"
      :class="colorClasses[props.color]"
    >
      {{ props.title }}
    </h3>
    
    <div class="space-y-2">
      <div 
        v-for="(item, index) in props.items" 
        :key="index"
        class="pattern-item flex items-center space-x-2"
      >
        <div class="pattern-icon text-lg flex-shrink-0">
          {{ item.icon }}
        </div>
        <div class="pattern-content flex-1">
          <span class="font-medium text-gray-900 dark:text-white text-sm">
            {{ item.title }}
          </span>
          <span class="text-xs text-gray-600 dark:text-gray-400 ml-2">
            - {{ item.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.compact-pattern-card {
  animation: fadeInUp 0.4s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
