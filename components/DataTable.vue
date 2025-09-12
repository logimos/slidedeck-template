<script setup lang="ts">
interface Column {
  key: string
  title: string
  width?: string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
}

interface Props {
  columns: Column[]
  data: Record<string, any>[]
  title?: string
  striped?: boolean
  hoverable?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  striped: true,
  hoverable: true,
  compact: false
})

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}
</script>

<template>
  <div class="data-table">
    <!-- Table Title -->
    <h3 v-if="props.title" class="heading-sm mb-4">{{ props.title }}</h3>

    <!-- Table Container -->
    <div class="overflow-x-auto">
      <table 
        class="w-full border-collapse"
        :class="{ 'text-sm': props.compact }"
      >
        <!-- Table Header -->
        <thead>
          <tr class="bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
            <th 
              v-for="column in props.columns" 
              :key="column.key"
              class="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300"
              :class="[alignClasses[column.align || 'left'], { 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700': column.sortable }]"
              :style="{ width: column.width }"
            >
              {{ column.title }}
              <span v-if="column.sortable" class="ml-1 text-gray-500 dark:text-gray-400">↕</span>
            </th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody>
          <tr 
            v-for="(row, index) in props.data" 
            :key="index"
            class="border-b border-gray-200 dark:border-gray-700 transition-colors duration-200"
            :class="{ 
              'bg-gray-50 dark:bg-gray-800': props.striped && index % 2 === 1,
              'hover:bg-blue-50 dark:hover:bg-blue-900/20': props.hoverable
            }"
          >
            <td 
              v-for="column in props.columns" 
              :key="column.key"
              class="px-4 py-3"
              :class="alignClasses[column.align || 'left']"
            >
              <slot 
                :name="`cell-${column.key}`" 
                :value="row[column.key]" 
                :row="row" 
                :column="column"
              >
                {{ row[column.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table Footer -->
    <div v-if="$slots.footer" class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.data-table {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive table styling */
@media (max-width: 768px) {
  .data-table {
    font-size: 0.875rem;
  }
  
  .data-table th,
  .data-table td {
    padding: 0.5rem 0.25rem;
  }
}
</style>
