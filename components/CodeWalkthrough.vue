<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface CodeBlock {
  id: string
  startLine: number
  endLine: number
  title: string
  description: string
  highlightColor?: 'blue' | 'green' | 'yellow' | 'red' | 'purple'
}

interface Props {
  code?: string
  codeFile?: string
  language?: string
  title?: string
  showTitle?: boolean
  blocks: CodeBlock[]
  autoAdvance?: boolean
  autoAdvanceDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  language: 'typescript',
  showTitle: true,
  autoAdvance: true,
  autoAdvanceDelay: 3000
})

const currentBlockIndex = ref(0)
const isExpanded = ref(false)
const isAnimating = ref(false)
const codeContent = ref('')

const currentBlock = computed(() => {
  return props.blocks?.[currentBlockIndex.value] || null
})
const hasNextBlock = computed(() => currentBlockIndex.value < (props.blocks?.length || 0) - 1)
const hasPreviousBlock = computed(() => currentBlockIndex.value > 0)

const codeLines = computed(() => codeContent.value.split('\n'))

// Load code from file if specified
const loadCodeFromFile = async () => {
  if (props.codeFile) {
    try {
      const response = await fetch(props.codeFile)
      codeContent.value = await response.text()
    } catch (error) {
      console.error('Failed to load code file:', error)
      codeContent.value = props.code || ''
    }
  } else {
    codeContent.value = props.code || ''
  }
}

// Load code on mount
import { onMounted } from 'vue'
onMounted(() => {
  loadCodeFromFile()
})

const highlightClasses = {
  blue: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-600',
  green: 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-600',
  yellow: 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-600',
  red: 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-600',
  purple: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-600'
}

const getBorderColor = (color: string) => {
  const borderColors = {
    blue: 'border-l-blue-500',
    green: 'border-l-green-500',
    yellow: 'border-l-yellow-500',
    red: 'border-l-red-500',
    purple: 'border-l-purple-500'
  }
  return borderColors[color as keyof typeof borderColors] || 'border-l-blue-500'
}

const getHighlightClasses = (color: string) => {
  const highlightColors = {
    blue: 'border-l-blue-500 bg-blue-50/50 dark:bg-blue-900/20',
    green: 'border-l-green-500 bg-green-50/50 dark:bg-green-900/20',
    yellow: 'border-l-yellow-500 bg-yellow-50/50 dark:bg-yellow-900/20',
    red: 'border-l-red-500 bg-red-50/50 dark:bg-red-900/20',
    purple: 'border-l-purple-500 bg-purple-50/50 dark:bg-purple-900/20'
  }
  return highlightColors[color as keyof typeof highlightColors] || 'border-l-blue-500 bg-blue-50/50 dark:bg-blue-900/20'
}

const getLineClasses = (lineIndex: number) => {
  if (!isExpanded.value) {
    return 'opacity-30 text-gray-400 dark:text-gray-600'
  }
  
  const block = currentBlock.value
  if (lineIndex >= block.startLine - 1 && lineIndex <= block.endLine - 1) {
    return `font-semibold ${highlightClasses[block.highlightColor || 'blue']} px-2 py-1 rounded`
  }
  
  return 'opacity-60 text-gray-600 dark:text-gray-400'
}

const expandCode = () => {
  isExpanded.value = true
  currentBlockIndex.value = 0
}

const nextBlock = () => {
  if (hasNextBlock.value) {
    isAnimating.value = true
    setTimeout(() => {
      currentBlockIndex.value++
      isAnimating.value = false
    }, 200)
  } else {
    // Navigate to next slide using Slidev's navigation
    $nav.next()
  }
}

const previousBlock = () => {
  if (hasPreviousBlock.value) {
    isAnimating.value = true
    setTimeout(() => {
      currentBlockIndex.value--
      isAnimating.value = false
    }, 200)
  }
}

// Auto-advance functionality
let autoAdvanceTimer: NodeJS.Timeout | null = null

const startAutoAdvance = () => {
  if (props.autoAdvance && isExpanded.value) {
    autoAdvanceTimer = setTimeout(() => {
      if (hasNextBlock.value) {
        nextBlock()
      } else {
        // Navigate to next slide using Slidev's navigation
        $nav.next()
      }
    }, props.autoAdvanceDelay)
  }
}

const stopAutoAdvance = () => {
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer)
    autoAdvanceTimer = null
  }
}

watch([currentBlockIndex, isExpanded], () => {
  stopAutoAdvance()
  if (isExpanded.value) {
    startAutoAdvance()
  }
})

watch(currentBlock, (newBlock) => {
  // Block changed
}, { immediate: true })

// Cleanup on unmount
import { onUnmounted } from 'vue'
onUnmounted(() => {
  stopAutoAdvance()
})
</script>

<template>
  <div class="code-walkthrough">
    <!-- Header -->
    <div v-if="showTitle" class="mb-6">
      <h2 class="text-2xl font-light text-gray-900 dark:text-gray-100 mb-2">{{ title }}</h2>
      <div class="flex items-center justify-between">
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ blocks.length }} code sections to explore
        </div>
        <button 
          v-if="!isExpanded"
          @click="expandCode"
          class="btn-primary text-sm px-4 py-2"
        >
          Start Walkthrough
        </button>
      </div>
    </div>
    
    <!-- Start Button (when title is hidden) -->
    <div v-if="!showTitle && !isExpanded" class="mb-6 text-center">
      <button 
        @click="expandCode"
        class="btn-primary text-sm px-4 py-2"
      >
        Start Walkthrough
      </button>
    </div>

    <!-- Code Display -->
    <div class="relative">
      <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-2 overflow-x-auto" style="max-height: 16rem;">
        <div class="font-mono text-xs leading-none">
          <div 
            v-for="(line, index) in codeLines" 
            :key="index"
            :class="[
              'transition-all duration-300',
              getLineClasses(index)
            ]"
          >
            <span class="text-gray-500 dark:text-gray-400 mr-1 select-none w-5 inline-block text-xs">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span v-html="line"></span>
          </div>
        </div>
      </div>

      <!-- Highlight Overlay -->
      <div 
        v-if="isExpanded && currentBlock"
        class="absolute inset-0 pointer-events-none"
        :class="{ 'opacity-0': isAnimating }"
      >
        <div 
          class="absolute left-0 right-0 border-l-4 transition-all duration-300"
          :class="getHighlightClasses(currentBlock.highlightColor || 'blue')"
          :style="{
            top: `${(currentBlock.startLine - 1) * 16}px`,
            height: `${(currentBlock.endLine - currentBlock.startLine + 1) * 16}px`
          }"
        ></div>
      </div>
    </div>

    <!-- Block Information -->
    <div 
      v-if="isExpanded && currentBlock"
      class="mt-3 p-2 rounded transition-all duration-300 bg-gray-50 dark:bg-gray-800 border-l-4"
      :class="getBorderColor(currentBlock.highlightColor || 'blue')"
    >
      <div class="flex items-center justify-between">
        <div class="flex-1 min-w-0" style="width: 70%;">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 text-xs leading-tight">
            {{ currentBlock.title }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300 text-xs leading-tight mt-1">
            {{ currentBlock.description }}
          </p>
        </div>
        
        <!-- Navigation Buttons in yellow box when auto-advance is disabled -->
        <div v-if="!autoAdvance" class="ml-3 flex-shrink-0 flex items-center space-x-2">
          <button 
            @click="previousBlock"
            :disabled="!hasPreviousBlock"
            class="bg-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-2 py-1 rounded text-xs font-medium"
          >
            ← Prev
          </button>
          <button 
            @click="nextBlock"
            class="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs font-medium"
          >
            {{ hasNextBlock ? 'Next →' : 'Finish' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Navigation Controls (only show when auto-advance is enabled) -->
    <div 
      v-if="autoAdvance && isExpanded"
      class="flex items-center justify-between mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
    >
      <button 
        @click="previousBlock"
        :disabled="!hasPreviousBlock"
        class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ← Previous
      </button>

      <div class="flex items-center space-x-2">
        <div 
          v-for="(block, index) in blocks"
          :key="block.id"
          class="w-3 h-3 rounded-full transition-colors duration-300"
          :class="index === currentBlockIndex 
            ? 'bg-blue-600' 
            : index < currentBlockIndex 
              ? 'bg-green-500' 
              : 'bg-gray-300 dark:bg-gray-600'"
        ></div>
      </div>

      <button 
        @click="nextBlock"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium"
      >
        {{ hasNextBlock ? 'Next →' : 'Finish' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.code-walkthrough {
  animation: slideInFromTop 0.4s ease-out;
}

@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
