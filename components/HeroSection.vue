<script setup lang="ts">
interface Props {
  icon: string
  title: string
  subtitle: string
  description: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const sizeClasses = {
  sm: {
    icon: 'text-4xl mb-3',
    title: 'heading-md',
    subtitle: 'text-lg',
    description: 'text-base'
  },
  md: {
    icon: 'text-6xl mb-4',
    title: 'heading-lg',
    subtitle: 'text-xl',
    description: 'text-lg'
  },
  lg: {
    icon: 'text-8xl mb-6',
    title: 'heading-xl',
    subtitle: 'text-2xl',
    description: 'text-xl'
  }
}
</script>

<template>
  <div class="text-center">
    <div 
      class="mb-4"
      :class="sizeClasses[props.size].icon"
    >
      {{ props.icon }}
    </div>
    <h2 
      class="text-primary mb-4"
      :class="sizeClasses[props.size].title"
    >
      {{ props.title }}
    </h2>
    <h3 
      class="text-secondary mb-4"
      :class="sizeClasses[props.size].subtitle"
    >
      {{ props.subtitle }}
    </h3>
    <p 
      class="text-muted max-w-2xl mx-auto"
      :class="sizeClasses[props.size].description"
    >
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped>
/* Smooth fade-in animation */
h2, h3, p {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
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
