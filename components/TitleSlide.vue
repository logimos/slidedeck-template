<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  author?: string
  date?: string
  organization?: string
  logo?: string
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: '',
  author: '',
  date: '',
  organization: '',
  logo: ''
})
</script>

<template>
  <div class="h-full flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Logo Section -->
    <div v-if="props.logo || props.organization" class="mb-12">
      <img v-if="props.logo" :src="props.logo" :alt="props.organization" class="h-12 w-auto mx-auto mb-6" />
      <h3 v-if="props.organization" class="text-lg font-light text-gray-600 dark:text-gray-400 tracking-wide">
        {{ props.organization }}
      </h3>
    </div>

    <!-- Main Title -->
    <div class="mb-16 max-w-4xl mx-auto px-8">
      <h1 class="text-6xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
        {{ props.title }}
      </h1>
      <h2 v-if="props.subtitle" class="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 tracking-wide">
        {{ props.subtitle }}
      </h2>
    </div>

    <!-- Footer Info -->
    <div class="absolute bottom-12 left-12 right-12 flex justify-between items-end text-sm text-gray-500 dark:text-gray-400">
      <div v-if="props.author" class="text-left">
        <p class="font-light">{{ props.author }}</p>
        <p v-if="props.organization" class="font-light">{{ props.organization }}</p>
      </div>
      <div v-if="props.date" class="text-right">
        <p class="font-light">{{ props.date }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth fade-in animation */
h1, h2, h3 {
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
