<script setup lang="ts">
import { computed } from 'vue'

interface ComparisonItem {
  label: string
  value: number | string
  unit?: string
  change?: number
  changeType?: 'increase' | 'decrease' | 'neutral'
}

interface Props {
  title: string
  items: ComparisonItem[]
  showChart?: boolean
  chartType?: 'bar' | 'line' | 'pie'
}

const props = withDefaults(defineProps<Props>(), {
  showChart: false,
  chartType: 'bar'
})

const changeClasses = {
  increase: 'text-green-600',
  decrease: 'text-red-600',
  neutral: 'text-gray-500'
}

const changeIcons = {
  increase: '↗',
  decrease: '↘',
  neutral: '→'
}

const maxValue = computed(() => {
  return Math.max(...props.items.map(item => 
    typeof item.value === 'number' ? item.value : 0
  ))
})
</script>

<template>
  <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-4">
    <!-- Header -->
    <div class="mb-4">
      <h3 class="text-lg font-light text-gray-900 dark:text-white mb-2 tracking-tight">{{ props.title }}</h3>
    </div>

    <!-- Comparison Items -->
    <div class="space-y-3">
      <div 
        v-for="(item, index) in props.items" 
        :key="index"
        class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
      >
        <!-- Label -->
        <div class="flex-1">
          <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ item.label }}</h4>
        </div>

        <!-- Value and Change -->
        <div class="flex items-center space-x-3">
          <div class="text-right">
            <div class="text-base font-bold text-blue-600 dark:text-blue-400">
              {{ typeof item.value === 'number' ? item.value.toLocaleString() : item.value }}
              <span v-if="item.unit" class="text-xs text-gray-500 dark:text-gray-400 ml-1">{{ item.unit }}</span>
            </div>
            <div v-if="item.change !== undefined" class="flex items-center space-x-1">
              <span :class="changeClasses[item.changeType || 'neutral']">
                {{ changeIcons[item.changeType || 'neutral'] }}
              </span>
              <span 
                class="text-xs font-medium"
                :class="changeClasses[item.changeType || 'neutral']"
              >
                {{ Math.abs(item.change) }}%
              </span>
            </div>
          </div>

          <!-- Progress Bar -->
          <div v-if="props.showChart && typeof item.value === 'number'" class="w-16">
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div 
                class="bg-blue-600 h-1.5 rounded-full transition-all duration-500 ease-out"
                :style="{ width: `${(item.value / maxValue) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card-elevated {
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
