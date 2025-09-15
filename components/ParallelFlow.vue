<script setup lang="ts">
interface ApiService {
  id: string
  name: string
  description: string
  icon: string
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red'
}

interface Props {
  title?: string
  orchestrator: {
    name: string
    method: string
    icon: string
  }
  services: ApiService[]
  result: {
    title: string
    description: string
    icon: string
  }
}

const props = defineProps<Props>()

const colorClasses = {
  blue: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20',
  green: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20',
  purple: 'border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20',
  orange: 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20',
  red: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
}
</script>

<template>
  <div class="parallel-flow">
    <h2 v-if="props.title" class="flow-title">{{ props.title }}</h2>
    
    <div class="flow-container">
      <!-- Orchestrator -->
      <div class="orchestrator-section">
        <div class="orchestrator-card">
          <div class="orchestrator-icon">{{ props.orchestrator.icon }}</div>
          <div class="orchestrator-content">
            <h3 class="orchestrator-name">{{ props.orchestrator.name }}</h3>
            <p class="orchestrator-method">{{ props.orchestrator.method }}</p>
          </div>
        </div>
      </div>
      
      <!-- Parallel API Calls -->
      <div class="api-calls-section">
        <div class="parallel-indicator">
          <div class="parallel-line"></div>
          <span class="parallel-text">Parallel API Calls</span>
          <div class="parallel-line"></div>
        </div>
        
        <div class="api-grid">
          <div 
            v-for="service in props.services" 
            :key="service.id"
            class="api-service"
            :class="colorClasses[service.color || 'blue']"
          >
            <div class="service-icon">{{ service.icon }}</div>
            <div class="service-content">
              <h4 class="service-name">{{ service.name }}</h4>
              <p class="service-description">{{ service.description }}</p>
            </div>
            <div class="service-arrow">→</div>
          </div>
        </div>
      </div>
      
      <!-- Result -->
      <div class="result-section">
        <div class="result-card">
          <div class="result-icon">{{ props.result.icon }}</div>
          <div class="result-content">
            <h3 class="result-title">{{ props.result.title }}</h3>
            <p class="result-description">{{ props.result.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parallel-flow {
  @apply w-full;
}

.flow-title {
  @apply text-lg font-semibold text-center mb-6 text-gray-900 dark:text-white;
}

.flow-container {
  @apply space-y-6;
}

/* Orchestrator Section */
.orchestrator-section {
  @apply flex justify-center;
}

.orchestrator-card {
  @apply bg-blue-600 text-white rounded-xl p-6 text-center shadow-lg max-w-sm;
}

.orchestrator-icon {
  @apply text-4xl mb-3;
}

.orchestrator-name {
  @apply text-xl font-bold mb-2;
}

.orchestrator-method {
  @apply text-sm opacity-90 font-mono;
}

/* Parallel API Calls Section */
.api-calls-section {
  @apply space-y-4;
}

.parallel-indicator {
  @apply flex items-center space-x-4;
}

.parallel-line {
  @apply flex-1 h-0.5 bg-gray-300 dark:bg-gray-600;
}

.parallel-text {
  @apply text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap;
}

.api-grid {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4;
}

.api-service {
  @apply border-2 rounded-lg p-4 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center relative;
}

.service-icon {
  @apply text-3xl mb-3;
}

.service-content {
  @apply flex-1;
}

.service-name {
  @apply text-sm font-semibold text-gray-900 dark:text-white mb-1;
}

.service-description {
  @apply text-xs text-gray-600 dark:text-gray-400 leading-tight;
}

.service-arrow {
  @apply absolute -right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg;
}

/* Result Section */
.result-section {
  @apply flex justify-center;
}

.result-card {
  @apply bg-green-600 text-white rounded-xl p-6 text-center shadow-lg max-w-sm;
}

.result-icon {
  @apply text-4xl mb-3;
}

.result-title {
  @apply text-xl font-bold mb-2;
}

.result-description {
  @apply text-sm opacity-90;
}
</style>
