<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  current: number
  total: number
  showPercentage?: boolean
  showSteps?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  showPercentage: true,
  showSteps: true,
  color: 'primary',
  size: 'md'
})

const percentage = computed(() => Math.round((props.current / props.total) * 100))

const colorClasses = {
  primary: 'bg-blue-600',
  secondary: 'bg-green-600',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500'
}

const sizeClasses = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4'
}
</script>

<template>
  <div class="progress-indicator">
    <!-- Progress Bar -->
    <div class="relative">
      <div 
        class="w-full bg-gray-200 rounded-full overflow-hidden"
        :class="sizeClasses[props.size]"
      >
        <div 
          class="h-full transition-all duration-500 ease-out rounded-full"
          :class="colorClasses[props.color]"
          :style="{ width: `${percentage}%` }"
        ></div>
      </div>
      
      <!-- Percentage Text -->
      <div 
        v-if="props.showPercentage" 
        class="absolute inset-0 flex items-center justify-center text-xs font-medium text-white"
        :class="{ 'text-gray-600': percentage < 20 }"
      >
        {{ percentage }}%
      </div>
    </div>

    <!-- Steps Indicator -->
    <div v-if="props.showSteps" class="flex justify-between items-center mt-2">
      <span class="text-sm text-muted">
        Step {{ props.current }} of {{ props.total }}
      </span>
      <div class="flex space-x-1">
        <div 
          v-for="step in props.total" 
          :key="step"
          class="w-2 h-2 rounded-full transition-colors duration-300"
          :class="step <= props.current ? colorClasses[props.color] : 'bg-gray-300'"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-indicator {
  animation: slideInFromTop 0.4s ease-out;
}

@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
