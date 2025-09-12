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
  <div class="card-elevated">
    <!-- Header -->
    <div class="mb-6">
      <h3 class="heading-sm">{{ props.title }}</h3>
    </div>

    <!-- Comparison Items -->
    <div class="space-y-4">
      <div 
        v-for="(item, index) in props.items" 
        :key="index"
        class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
      >
        <!-- Label -->
        <div class="flex-1">
          <h4 class="font-medium text-gray-700 dark:text-gray-300">{{ item.label }}</h4>
        </div>

        <!-- Value and Change -->
        <div class="flex items-center space-x-4">
          <div class="text-right">
            <div class="text-lg font-bold text-blue-600">
              {{ typeof item.value === 'number' ? item.value.toLocaleString() : item.value }}
              <span v-if="item.unit" class="text-sm text-muted ml-1">{{ item.unit }}</span>
            </div>
            <div v-if="item.change !== undefined" class="flex items-center space-x-1">
              <span :class="changeClasses[item.changeType || 'neutral']">
                {{ changeIcons[item.changeType || 'neutral'] }}
              </span>
              <span 
                class="text-sm font-medium"
                :class="changeClasses[item.changeType || 'neutral']"
              >
                {{ Math.abs(item.change) }}%
              </span>
            </div>
          </div>

          <!-- Progress Bar -->
          <div v-if="props.showChart && typeof item.value === 'number'" class="w-20">
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                :style="{ width: `${(item.value / maxValue) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chart Area (placeholder for future chart integration) -->
    <div v-if="props.showChart" class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div class="text-center text-gray-500 dark:text-gray-400">
        <p class="text-sm">Chart visualization would go here</p>
        <p class="text-xs mt-1">Type: {{ props.chartType }}</p>
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
