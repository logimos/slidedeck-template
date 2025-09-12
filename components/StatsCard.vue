<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  title: string
  value: number | string
  unit?: string
  change?: number
  changeType?: 'increase' | 'decrease' | 'neutral'
  icon?: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  animated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  unit: '',
  change: 0,
  changeType: 'neutral',
  icon: '',
  color: 'primary',
  animated: true
})

const displayValue = ref(0)
const isVisible = ref(false)

const colorClasses = {
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-green-600 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  danger: 'bg-red-500 text-white'
}

const changeClasses = {
  increase: 'text-green-700 dark:text-green-400',
  decrease: 'text-red-700 dark:text-red-400',
  neutral: 'text-gray-600 dark:text-gray-300'
}

const changeIcons = {
  increase: '↗',
  decrease: '↘',
  neutral: '→'
}

onMounted(() => {
  if (props.animated && typeof props.value === 'number') {
    isVisible.value = true
    const target = props.value
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps
    
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        displayValue.value = target
        clearInterval(timer)
      } else {
        displayValue.value = Math.floor(current)
      }
    }, stepDuration)
  } else {
    displayValue.value = props.value
    isVisible.value = true
  }
})
</script>

<template>
  <div 
    class="card text-center transition-all duration-300"
    :class="{ 'opacity-0 translate-y-4': !isVisible }"
  >
    <!-- Value -->
    <div class="mb-4">
      <span class="text-4xl font-light text-gray-900 dark:text-white">
        {{ typeof props.value === 'number' ? displayValue.toLocaleString() : props.value }}
      </span>
      <span v-if="props.unit" class="text-lg text-gray-600 dark:text-gray-300 ml-2 font-light">{{ props.unit }}</span>
    </div>

    <!-- Title -->
    <h3 class="text-lg font-light text-gray-700 dark:text-gray-200 mb-4 tracking-wide">{{ props.title }}</h3>

    <!-- Change Indicator -->
    <div v-if="props.change !== 0" class="flex items-center justify-center space-x-2 text-sm">
      <span :class="changeClasses[props.changeType]">
        {{ changeIcons[props.changeType] }}
      </span>
      <span 
        class="font-light"
        :class="changeClasses[props.changeType]"
      >
        {{ Math.abs(props.change) }}%
      </span>
      <span class="text-gray-500 dark:text-gray-400 font-light">vs last period</span>
    </div>
  </div>
</template>

<style scoped>
.card-enter-active {
  transition: all 0.5s ease-out;
}

.card-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style>
