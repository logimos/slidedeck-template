<script setup lang="ts">
interface IconItem {
  icon: string
  label: string
}

interface Props {
  items: IconItem[]
  columns?: 2 | 3 | 4 | 5 | 6
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  columns: 4,
  size: 'md'
})

const gridClasses = {
  2: 'grid-2',
  3: 'grid-3',
  4: 'grid-4',
  5: 'grid-5',
  6: 'grid-6'
}

const sizeClasses = {
  sm: {
    icon: 'text-xl mb-1',
    label: 'text-xs font-medium'
  },
  md: {
    icon: 'text-2xl mb-1',
    label: 'text-sm font-medium'
  },
  lg: {
    icon: 'text-3xl mb-2',
    label: 'text-base font-medium'
  }
}
</script>

<template>
  <div :class="gridClasses[props.columns]">
    <div 
      v-for="item in props.items" 
      :key="item.label"
      class="text-center transition-all duration-300 hover:scale-110"
    >
      <div 
        class="mb-1"
        :class="sizeClasses[props.size].icon"
      >
        {{ item.icon }}
      </div>
      <div 
        class="text-center"
        :class="sizeClasses[props.size].label"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth fade-in animation */
div {
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
