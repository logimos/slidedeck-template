<script setup lang="ts">
interface ProcessStep {
  id: string
  title: string
  description?: string
  icon?: string
  status?: 'completed' | 'current' | 'upcoming'
}

interface Props {
  steps: ProcessStep[]
  title?: string
  showConnectors?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  showConnectors: true,
  compact: true
})

const statusClasses = {
  completed: 'bg-green-500 text-white border-green-500',
  current: 'bg-blue-600 text-white border-blue-600',
  upcoming: 'bg-white text-gray-600 border-gray-300'
}

const statusShadows = {
  completed: 'shadow-md',
  current: 'shadow-lg ring-2 ring-blue-600 ring-opacity-20',
  upcoming: 'shadow-sm'
}
</script>

<template>
  <div class="compact-process-flow">
    <!-- Compact Title -->
    <h2 v-if="props.title" class="text-lg font-semibold text-center mb-4 text-gray-900 dark:text-white">{{ props.title }}</h2>

    <!-- Compact Process Steps -->
    <div class="relative">
      <!-- Connector Line -->
      <div 
        v-if="props.showConnectors" 
        class="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"
        :style="{ 
          left: '8%', 
          right: '8%',
          width: 'calc(100% - 16%)'
        }"
      ></div>

      <div class="grid-4 relative z-10">
        <div 
          v-for="(step, index) in props.steps" 
          :key="step.id"
          class="text-center"
        >
          <!-- Compact Step Circle -->
          <div 
            class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 border-2 transition-all duration-300"
            :class="[statusClasses[step.status || 'upcoming'], statusShadows[step.status || 'upcoming']]"
          >
            <span v-if="step.icon" class="text-lg">{{ step.icon }}</span>
            <span v-else class="text-sm font-bold">{{ index + 1 }}</span>
          </div>

          <!-- Compact Step Content -->
          <div class="px-1">
            <h3 class="font-medium text-blue-600 dark:text-blue-400 mb-1 text-sm">{{ step.title }}</h3>
            <p v-if="step.description" class="text-xs text-gray-500 dark:text-gray-400 leading-tight">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.compact-process-flow {
  animation: slideInFromBottom 0.6s ease-out;
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation for steps */
.grid-4 > div:nth-child(1) { animation-delay: 0.05s; }
.grid-4 > div:nth-child(2) { animation-delay: 0.1s; }
.grid-4 > div:nth-child(3) { animation-delay: 0.15s; }
.grid-4 > div:nth-child(4) { animation-delay: 0.2s; }
</style>
