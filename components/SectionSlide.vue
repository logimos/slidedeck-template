<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  sectionNumber?: number
  totalSections?: number
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: '',
  sectionNumber: 1,
  totalSections: 1
})
</script>

<template>
  <div class="h-full flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900">
    <!-- Section Progress -->
    <ProgressIndicator 
      :current="props.sectionNumber"
      :total="props.totalSections"
      size="md"
      color="primary"
    />

    <!-- Section Title -->
    <div class="max-w-4xl mx-auto px-8">
      <h1 class="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
        {{ props.title }}
      </h1>
      <h2 v-if="props.subtitle" class="text-xl text-gray-700 dark:text-gray-200 font-light tracking-wide">
        {{ props.subtitle }}
      </h2>
    </div>
  </div>
</template>

<style scoped>
h1 {
  animation: slideInFromLeft 0.8s ease-out;
}

h2 {
  animation: slideInFromRight 0.8s ease-out 0.2s both;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
