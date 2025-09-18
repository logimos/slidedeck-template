<script setup lang="ts">
interface ComparisonItem {
  text: string
  icon?: string
}

interface Props {
  title?: string
  positiveTitle?: string
  negativeTitle?: string
  positiveItems: ComparisonItem[]
  negativeItems: ComparisonItem[]
  positiveColor?: string
  negativeColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: ' ',
  positiveTitle: '✅ What It Does do',
  negativeTitle: '❌ What It Does NOT do',
  positiveColor: 'green',
  negativeColor: 'red'
})

const colorClasses = {
  green: {
    title: 'text-green-700 dark:text-green-300',
    bg: 'bg-green-50 dark:bg-green-900/20'
  },
  red: {
    title: 'text-red-700 dark:text-red-300',
    bg: 'bg-red-50 dark:bg-red-900/20'
  },
  blue: {
    title: 'text-blue-700 dark:text-blue-300',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  orange: {
    title: 'text-orange-700 dark:text-orange-300',
    bg: 'bg-orange-50 dark:bg-orange-900/20'
  }
}
</script>

<template>
  <div class="w-full">
    <!-- Optional Title -->
    <div v-if="props.title" class="mb-6">
      <h2 class="text-2xl font-light text-gray-900 dark:text-white mb-2 tracking-tight">
        {{ props.title }}
      </h2>
    </div>

    <!-- Comparison Grid -->
    <div class="grid-2 gap-6">
      <!-- Positive/Does Section -->
      <div class="comparison-card">
        <h3 class="text-lg font-semibold mb-4" :class="colorClasses[props.positiveColor].title">
          {{ props.positiveTitle }}
        </h3>
        <div class="space-y-2">
          <div 
            v-for="(item, index) in props.positiveItems" 
            :key="index"
            class="comparison-item flex items-center space-x-2"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <span v-if="item.icon" class="text-green-500 flex-shrink-0">{{ item.icon }}</span>
            <span v-else class="text-green-500 flex-shrink-0">•</span>
            <span class="text-gray-600 dark:text-gray-400 text-sm">{{ item.text }}</span>
          </div>
        </div>
      </div>

      <!-- Negative/Doesn't Section -->
      <div class="comparison-card">
        <h3 class="text-lg font-semibold mb-4" :class="colorClasses[props.negativeColor].title">
          {{ props.negativeTitle }}
        </h3>
        <div class="space-y-2">
          <div 
            v-for="(item, index) in props.negativeItems" 
            :key="index"
            class="comparison-item flex items-center space-x-2"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <span v-if="item.icon" class="text-red-500 flex-shrink-0">{{ item.icon }}</span>
            <span v-else class="text-red-500 flex-shrink-0">•</span>
            <span class="text-gray-600 dark:text-gray-400 text-sm">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.comparison-card {
  @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-4 rounded-lg;
  animation: fadeInUp 0.6s ease-out;
}

.comparison-item {
  animation: slideInLeft 0.4s ease-out both;
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
}
</style>
