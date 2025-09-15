<script setup lang="ts">
interface ArchitectureLayer {
  id: string
  title: string
  icon: string
  color: 'blue' | 'green' | 'purple'
  components: {
    icon: string
    name: string
  }[]
}

interface Props {
  title?: string
  layout?: 'vertical' | 'horizontal' | 'hybrid'
  layers: ArchitectureLayer[]
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  layout: 'horizontal'
})

const colorClasses = {
  blue: {
    layer: 'border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 dark:border-blue-800 dark:from-blue-900/20 dark:to-blue-800/20',
    title: 'text-blue-700 dark:text-blue-300'
  },
  green: {
    layer: 'border-green-200 bg-gradient-to-r from-green-50 to-green-100 dark:border-green-800 dark:from-green-900/20 dark:to-green-800/20',
    title: 'text-green-700 dark:text-green-300'
  },
  purple: {
    layer: 'border-purple-200 bg-gradient-to-r from-purple-50 to-purple-100 dark:border-purple-800 dark:from-purple-900/20 dark:to-purple-800/20',
    title: 'text-purple-700 dark:text-purple-300'
  }
}
</script>

<template>
  <div class="architecture-diagram">
    <h3 v-if="props.title" class="diagram-title">{{ props.title }}</h3>
    
    <!-- Horizontal Layout -->
    <div v-if="props.layout === 'horizontal'" class="horizontal-architecture">
      <div 
        v-for="layer in props.layers" 
        :key="layer.id"
        class="arch-layer-horizontal"
        :class="colorClasses[layer.color].layer"
      >
        <div class="layer-header-horizontal">
          <div class="layer-icon-horizontal">{{ layer.icon }}</div>
          <h4 class="layer-title-horizontal" :class="colorClasses[layer.color].title">
            {{ layer.title }}
          </h4>
        </div>
        <div class="layer-components-horizontal">
          <div 
            v-for="component in layer.components" 
            :key="component.name"
            class="component-card-horizontal"
          >
            <div class="component-icon-horizontal">{{ component.icon }}</div>
            <div class="component-text-horizontal">{{ component.name }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Hybrid Layout (2+1) -->
    <div v-else-if="props.layout === 'hybrid'" class="hybrid-architecture">
      <div class="hybrid-top">
        <div 
          v-for="layer in props.layers.slice(0, 2)" 
          :key="layer.id"
          class="arch-layer-hybrid"
          :class="colorClasses[layer.color].layer"
        >
          <div class="layer-header-hybrid">
            <div class="layer-icon-hybrid">{{ layer.icon }}</div>
            <h4 class="layer-title-hybrid" :class="colorClasses[layer.color].title">
              {{ layer.title }}
            </h4>
          </div>
          <div class="layer-components-hybrid">
            <div 
              v-for="component in layer.components" 
              :key="component.name"
              class="component-card-hybrid"
            >
              <div class="component-icon-hybrid">{{ component.icon }}</div>
              <div class="component-text-hybrid">{{ component.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div 
        v-if="props.layers.length > 2"
        class="hybrid-bottom"
      >
        <div 
          v-for="layer in props.layers.slice(2)" 
          :key="layer.id"
          class="arch-layer-hybrid"
          :class="colorClasses[layer.color].layer"
        >
          <div class="layer-header-hybrid">
            <div class="layer-icon-hybrid">{{ layer.icon }}</div>
            <h4 class="layer-title-hybrid" :class="colorClasses[layer.color].title">
              {{ layer.title }}
            </h4>
          </div>
          <div class="layer-components-hybrid">
            <div 
              v-for="component in layer.components" 
              :key="component.name"
              class="component-card-hybrid"
            >
              <div class="component-icon-hybrid">{{ component.icon }}</div>
              <div class="component-text-hybrid">{{ component.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Vertical Layout (fallback) -->
    <div v-else class="vertical-architecture">
      <div 
        v-for="layer in props.layers" 
        :key="layer.id"
        class="arch-layer-vertical"
        :class="colorClasses[layer.color].layer"
      >
        <div class="layer-header-vertical">
          <div class="layer-icon-vertical">{{ layer.icon }}</div>
          <h4 class="layer-title-vertical" :class="colorClasses[layer.color].title">
            {{ layer.title }}
          </h4>
        </div>
        <div class="layer-components-vertical">
          <div 
            v-for="component in layer.components" 
            :key="component.name"
            class="component-card-vertical"
          >
            <div class="component-icon-vertical">{{ component.icon }}</div>
            <div class="component-text-vertical">{{ component.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.architecture-diagram {
  @apply w-full;
}

.diagram-title {
  @apply text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center;
}

/* Horizontal Layout */
.horizontal-architecture {
  @apply grid grid-cols-3 gap-4 h-full;
}

.arch-layer-horizontal {
  @apply border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-lg flex flex-col;
}

.layer-header-horizontal {
  @apply flex flex-col items-center space-y-2 mb-4;
}

.layer-icon-horizontal {
  @apply text-3xl;
}

.layer-title-horizontal {
  @apply text-base font-bold text-center;
}

.layer-components-horizontal {
  @apply space-y-2 flex-1;
}

.component-card-horizontal {
  @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 flex items-center space-x-2 transition-all duration-200 hover:shadow-md;
}

.component-icon-horizontal {
  @apply text-sm flex-shrink-0;
}

.component-text-horizontal {
  @apply text-xs font-medium text-gray-700 dark:text-gray-300;
}

/* Hybrid Layout */
.hybrid-architecture {
  @apply space-y-4 h-full;
}

.hybrid-top {
  @apply grid grid-cols-2 gap-4;
}

.hybrid-bottom {
  @apply grid grid-cols-1 gap-4;
}

.arch-layer-hybrid {
  @apply border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-lg flex flex-col;
}

.layer-header-hybrid {
  @apply flex items-center space-x-3 mb-3;
}

.layer-icon-hybrid {
  @apply text-2xl;
}

.layer-title-hybrid {
  @apply text-lg font-bold;
}

.layer-components-hybrid {
  @apply space-y-2 flex-1;
}

.component-card-hybrid {
  @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 flex items-center space-x-2 transition-all duration-200 hover:shadow-md;
}

.component-icon-hybrid {
  @apply text-sm flex-shrink-0;
}

.component-text-hybrid {
  @apply text-xs font-medium text-gray-700 dark:text-gray-300;
}

/* Vertical Layout */
.vertical-architecture {
  @apply space-y-4;
}

.arch-layer-vertical {
  @apply border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg;
}

.layer-header-vertical {
  @apply flex items-center space-x-3 mb-4;
}

.layer-icon-vertical {
  @apply text-2xl;
}

.layer-title-vertical {
  @apply text-lg font-bold;
}

.layer-components-vertical {
  @apply grid grid-cols-1 md:grid-cols-3 gap-3;
}

.component-card-vertical {
  @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-3 flex items-center space-x-3 transition-all duration-200 hover:shadow-md hover:scale-105;
}

.component-icon-vertical {
  @apply text-lg flex-shrink-0;
}

.component-text-vertical {
  @apply text-sm font-medium text-gray-700 dark:text-gray-300;
}
</style>
