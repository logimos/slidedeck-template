<script setup lang="ts">
interface Props {
  current: number
  total: number
  showNumbers?: boolean
  showProgressBar?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'accent'
}

const props = withDefaults(defineProps<Props>(), {
  showNumbers: true,
  showProgressBar: true,
  size: 'md',
  color: 'primary'
})

const sizeClasses = {
  sm: {
    container: 'mb-8',
    number: 'w-6 h-6 text-xs',
    text: 'text-xs',
    bar: 'w-16 h-px'
  },
  md: {
    container: 'mb-16',
    number: 'w-8 h-8 text-sm',
    text: 'text-sm',
    bar: 'w-24 h-px'
  },
  lg: {
    container: 'mb-20',
    number: 'w-10 h-10 text-base',
    text: 'text-base',
    bar: 'w-32 h-px'
  }
}

const colorClasses = {
  primary: {
    number: 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white',
    text: 'text-gray-500 dark:text-gray-400',
    bar: 'bg-gray-200 dark:bg-gray-700',
    progress: 'bg-gray-900 dark:bg-white'
  },
  secondary: {
    number: 'border-blue-300 dark:border-blue-600 text-blue-900 dark:text-blue-100',
    text: 'text-blue-500 dark:text-blue-400',
    bar: 'bg-blue-200 dark:bg-blue-700',
    progress: 'bg-blue-600 dark:bg-blue-400'
  },
  accent: {
    number: 'border-green-300 dark:border-green-600 text-green-900 dark:text-green-100',
    text: 'text-green-500 dark:text-green-400',
    bar: 'bg-green-200 dark:bg-green-700',
    progress: 'bg-green-600 dark:bg-green-400'
  }
}

const progressPercentage = (props.current / props.total) * 100
</script>

<template>
  <div :class="sizeClasses[props.size].container">
    <!-- Numbers Section -->
    <div v-if="props.showNumbers" class="flex items-center justify-center space-x-3 mb-6">
      <div 
        class="border flex items-center justify-center font-light"
        :class="[
          sizeClasses[props.size].number,
          colorClasses[props.color].number
        ]"
      >
        {{ props.current }}
      </div>
      <div 
        class="font-light"
        :class="[
          sizeClasses[props.size].text,
          colorClasses[props.color].text
        ]"
      >
        of {{ props.total }}
      </div>
    </div>

    <!-- Progress Bar Section -->
    <div v-if="props.showProgressBar" class="flex justify-center">
      <div 
        class="transition-all duration-500 ease-out"
        :class="[
          sizeClasses[props.size].bar,
          colorClasses[props.color].bar
        ]"
      >
        <div 
          class="h-full transition-all duration-500 ease-out"
          :class="colorClasses[props.color].progress"
          :style="{ width: `${progressPercentage}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Add subtle animation on mount */
.progress-indicator {
  animation: fadeInUp 0.6s ease-out;
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