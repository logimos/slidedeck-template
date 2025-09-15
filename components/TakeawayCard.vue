<script setup lang="ts">
interface TakeawayItem {
  icon: string
  title: string
  description: string
}

interface Props {
  items: TakeawayItem[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="takeaways space-y-6">
    <div 
      v-for="(item, index) in props.items" 
      :key="index"
      class="takeaway-item flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg transition-all duration-300 hover:shadow-lg"
    >
      <div class="takeaway-icon text-4xl flex-shrink-0">
        {{ item.icon }}
      </div>
      <div class="takeaway-content">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {{ item.title }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.takeaway-item {
  animation: slideInFromBottom 0.6s ease-out;
}

.takeaway-item:nth-child(1) { animation-delay: 0.1s; }
.takeaway-item:nth-child(2) { animation-delay: 0.2s; }
.takeaway-item:nth-child(3) { animation-delay: 0.3s; }
.takeaway-item:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
