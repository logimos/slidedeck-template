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
  <div class="pattern-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
    <h3 
      class="text-lg font-semibold mb-4"
      :class="colorClasses[props.color]"
    >
      {{ props.title }}
    </h3>
    
    <div class="space-y-3">
      <div 
        v-for="(item, index) in props.items" 
        :key="index"
        class="pattern-item flex items-start space-x-3"
      >
        <div class="pattern-icon text-2xl flex-shrink-0 mt-1">
          {{ item.icon }}
        </div>
        <div class="pattern-content">
          <h4 class="font-semibold text-gray-900 dark:text-white mb-1">
            {{ item.title }}
          </h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pattern-card {
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

.pattern-item {
  animation: slideInFromLeft 0.6s ease-out;
}

.pattern-item:nth-child(1) { animation-delay: 0.1s; }
.pattern-item:nth-child(2) { animation-delay: 0.2s; }
.pattern-item:nth-child(3) { animation-delay: 0.3s; }
.pattern-item:nth-child(4) { animation-delay: 0.4s; }

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
