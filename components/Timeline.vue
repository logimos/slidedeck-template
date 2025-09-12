<script setup lang="ts">
interface TimelineItem {
  date: string
  title: string
  description?: string
  status?: 'completed' | 'current' | 'upcoming'
  icon?: string
}

interface Props {
  items: TimelineItem[]
  orientation?: 'vertical' | 'horizontal'
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'vertical'
})

const statusClasses = {
  completed: 'bg-green-500 text-white',
  current: 'bg-blue-600 text-white',
  upcoming: 'bg-gray-300 text-gray-600'
}

const statusBorders = {
  completed: 'border-green-500',
  current: 'border-blue-600',
  upcoming: 'border-gray-300'
}
</script>

<template>
  <div class="timeline-container">
    <!-- Vertical Timeline -->
    <div v-if="props.orientation === 'vertical'" class="relative">
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      
      <div 
        v-for="(item, index) in props.items" 
        :key="index"
        class="relative flex items-start mb-6 last:mb-0"
      >
        <!-- Timeline Dot -->
        <div 
          class="relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
          :class="[statusClasses[item.status || 'upcoming'], statusBorders[item.status || 'upcoming']]"
        >
          <span v-if="item.icon" class="text-sm">{{ item.icon }}</span>
          <span v-else class="text-xs font-bold">{{ index + 1 }}</span>
        </div>

        <!-- Content -->
        <div class="ml-4 flex-1">
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-4">
            <div class="flex items-center justify-between mb-1">
              <h3 class="text-base font-medium text-gray-900 dark:text-white">{{ item.title }}</h3>
              <span class="text-xs text-gray-500 dark:text-gray-400 font-light">{{ item.date }}</span>
            </div>
            <p v-if="item.description" class="text-sm text-gray-600 dark:text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Horizontal Timeline -->
    <div v-else class="relative">
      <div class="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      
      <div class="flex justify-between items-start">
        <div 
          v-for="(item, index) in props.items" 
          :key="index"
          class="relative flex flex-col items-center flex-1"
        >
          <!-- Timeline Dot -->
          <div 
            class="relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-sm mb-4"
            :class="[statusClasses[item.status || 'upcoming'], statusBorders[item.status || 'upcoming']]"
          >
            <span v-if="item.icon" class="text-base">{{ item.icon }}</span>
            <span v-else class="text-sm font-bold">{{ index + 1 }}</span>
          </div>

          <!-- Content -->
          <div class="text-center px-2">
            <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-2 leading-tight">{{ item.title }}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2 font-light">{{ item.date }}</p>
            <p v-if="item.description" class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-container {
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
