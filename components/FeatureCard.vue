<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 'md'
})

const sizeClasses = {
  sm: {
    container: 'p-3',
    icon: 'text-2xl mb-1',
    title: 'text-sm font-medium',
    description: 'text-xs'
  },
  md: {
    container: 'p-4',
    icon: 'text-3xl mb-2',
    title: 'font-semibold',
    description: 'text-sm text-muted'
  },
  lg: {
    container: 'p-6',
    icon: 'text-4xl mb-3',
    title: 'text-lg font-semibold',
    description: 'text-base text-muted'
  }
}

const colorClasses = {
  primary: 'text-blue-600',
  secondary: 'text-green-600',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  danger: 'text-red-500'
}
</script>

<template>
  <div 
    class="card text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
    :class="sizeClasses[props.size].container"
  >
    <div 
      class="mb-2"
      :class="[sizeClasses[props.size].icon, colorClasses[props.color]]"
    >
      {{ props.icon }}
    </div>
    <h4 
      class="mb-2"
      :class="sizeClasses[props.size].title"
    >
      {{ props.title }}
    </h4>
    <p 
      class="text-center"
      :class="sizeClasses[props.size].description"
    >
      {{ props.description }}
    </p>
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
