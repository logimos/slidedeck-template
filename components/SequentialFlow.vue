<script setup lang="ts">
interface FlowStep {
  id: string
  title: string
  description: string
  icon: string
  status: 'completed' | 'current' | 'upcoming'
}

interface Props {
  title?: string
  steps: FlowStep[]
  layout?: 'horizontal' | 'vertical' | 'wrapped'
  showConnectors?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  layout: 'wrapped',
  showConnectors: true
})

const statusClasses = {
  completed: 'bg-green-500 text-white border-green-500',
  current: 'bg-blue-600 text-white border-blue-600',
  upcoming: 'bg-gray-200 text-gray-600 border-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600'
}

const statusShadows = {
  completed: 'shadow-md',
  current: 'shadow-lg ring-2 ring-blue-600 ring-opacity-20',
  upcoming: 'shadow-sm'
}
</script>

<template>
  <div class="sequential-flow">
    <h2 v-if="props.title" class="flow-title">{{ props.title }}</h2>
    
    <!-- Wrapped Layout (4+4) -->
    <div v-if="props.layout === 'wrapped'" class="wrapped-flow">
      <div class="flow-row">
        <div 
          v-for="(step, index) in props.steps.slice(0, 4)" 
          :key="step.id"
          class="flow-step-wrapper"
        >
          <div 
            class="flow-step"
            :class="[statusClasses[step.status], statusShadows[step.status]]"
          >
            <div class="step-icon">{{ step.icon }}</div>
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
          <!-- Connector to next step -->
          <div 
            v-if="index < 3" 
            class="flow-connector"
          ></div>
        </div>
      </div>
      
      <!-- Reverse connector for second row -->
      <div class="reverse-connector">
        <div class="connector-line"></div>
        <div class="connector-arrow">↓</div>
      </div>
      
      <div class="flow-row">
        <div 
          v-for="(step, index) in props.steps.slice(4)" 
          :key="step.id"
          class="flow-step-wrapper"
        >
          <div 
            class="flow-step"
            :class="[statusClasses[step.status], statusShadows[step.status]]"
          >
            <div class="step-icon">{{ step.icon }}</div>
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
          <!-- Connector to next step -->
          <div 
            v-if="index < 3" 
            class="flow-connector"
          ></div>
        </div>
      </div>
    </div>
    
    <!-- Horizontal Layout (single row) -->
    <div v-else-if="props.layout === 'horizontal'" class="horizontal-flow">
      <div 
        v-for="(step, index) in props.steps" 
        :key="step.id"
        class="flow-step-wrapper"
      >
        <div 
          class="flow-step"
          :class="[statusClasses[step.status], statusShadows[step.status]]"
        >
          <div class="step-icon">{{ step.icon }}</div>
          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
        <!-- Connector to next step -->
        <div 
          v-if="index < props.steps.length - 1" 
          class="flow-connector"
        ></div>
      </div>
    </div>
    
    <!-- Vertical Layout -->
    <div v-else class="vertical-flow">
      <div 
        v-for="(step, index) in props.steps" 
        :key="step.id"
        class="flow-step-wrapper-vertical"
      >
        <div 
          class="flow-step-vertical"
          :class="[statusClasses[step.status], statusShadows[step.status]]"
        >
          <div class="step-icon-vertical">{{ step.icon }}</div>
          <div class="step-content-vertical">
            <h3 class="step-title-vertical">{{ step.title }}</h3>
            <p class="step-description-vertical">{{ step.description }}</p>
          </div>
        </div>
        <!-- Connector to next step -->
        <div 
          v-if="index < props.steps.length - 1" 
          class="flow-connector-vertical"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sequential-flow {
  @apply w-full;
}

.flow-title {
  @apply text-lg font-semibold text-center mb-6 text-gray-900 dark:text-white;
}

/* Wrapped Layout (4+4) */
.wrapped-flow {
  @apply space-y-4;
}

.flow-row {
  @apply flex items-center justify-center space-x-2;
}

.flow-step-wrapper {
  @apply flex items-center;
}

.flow-step {
  @apply flex items-center space-x-3 p-3 rounded-lg border-2 min-w-0 flex-1 max-w-xs;
}

.step-icon {
  @apply text-xl flex-shrink-0;
}

.step-content {
  @apply min-w-0 flex-1;
}

.step-title {
  @apply text-sm font-semibold mb-1;
}

.step-description {
  @apply text-xs opacity-90 leading-tight;
}

.flow-connector {
  @apply w-4 h-0.5 bg-gray-300 dark:bg-gray-600 mx-2 flex-shrink-0;
}

.reverse-connector {
  @apply flex flex-col items-center space-y-1;
}

.connector-line {
  @apply w-0.5 h-4 bg-gray-300 dark:bg-gray-600;
}

.connector-arrow {
  @apply text-gray-400 text-sm;
}

/* Horizontal Layout */
.horizontal-flow {
  @apply flex items-center justify-center space-x-2 overflow-x-auto;
}

/* Vertical Layout */
.vertical-flow {
  @apply space-y-4;
}

.flow-step-wrapper-vertical {
  @apply flex items-center;
}

.flow-step-vertical {
  @apply flex items-center space-x-3 p-4 rounded-lg border-2 w-full;
}

.step-icon-vertical {
  @apply text-2xl flex-shrink-0;
}

.step-content-vertical {
  @apply flex-1;
}

.step-title-vertical {
  @apply text-base font-semibold mb-1;
}

.step-description-vertical {
  @apply text-sm opacity-90;
}

.flow-connector-vertical {
  @apply w-0.5 h-4 bg-gray-300 dark:bg-gray-600 mx-auto;
}
</style>
