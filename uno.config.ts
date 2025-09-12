import { defineConfig } from 'unocss'

export default defineConfig({
    shortcuts: {
        // Clean, consistent background
        'bg-main': 'bg-white text-gray-900 dark:(bg-gray-900 text-gray-100)',

        // Professional typography with better contrast
        'heading-xl': 'text-5xl font-light text-gray-900 dark:text-white mb-8 tracking-tight',
        'heading-lg': 'text-4xl font-light text-gray-900 dark:text-white mb-6 tracking-tight',
        'heading-md': 'text-3xl font-light text-gray-900 dark:text-white mb-4 tracking-tight',
        'heading-sm': 'text-2xl font-light text-gray-900 dark:text-white mb-3 tracking-tight',
        'text-primary': 'text-gray-900 dark:text-white font-normal',
        'text-secondary': 'text-gray-700 dark:text-gray-200 font-normal',
        'text-muted': 'text-gray-600 dark:text-gray-300 text-sm font-normal',
        'text-accent': 'text-blue-700 dark:text-blue-300 font-medium',

        // Clean cards with better contrast
        'card': 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-8',
        'card-elevated': 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 p-8',
        'card-primary': 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-8',
        'card-secondary': 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 p-8',

        // Subtle callouts with better visibility
        'callout': 'border-l-2 border-l-gray-500 dark:border-l-gray-400 pl-6 py-4 bg-gray-50 dark:bg-gray-800',
        'callout-success': 'border-l-2 border-l-green-600 dark:border-l-green-400 pl-6 py-4 bg-green-50 dark:bg-green-900/20',
        'callout-warning': 'border-l-2 border-l-yellow-600 dark:border-l-yellow-400 pl-6 py-4 bg-yellow-50 dark:bg-yellow-900/20',
        'callout-danger': 'border-l-2 border-l-red-600 dark:border-l-red-400 pl-6 py-4 bg-red-50 dark:bg-red-900/20',

        // Clean highlight box
        'hl-box': 'absolute border border-gray-500 dark:border-gray-400 pointer-events-none',

        // Professional buttons
        'btn-primary': 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors',
        'btn-secondary': 'border border-gray-400 dark:border-gray-500 text-gray-900 dark:text-white px-8 py-3 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors',
        'btn-outline': 'border border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-3 font-medium hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors',

        // Clean grid layouts
        'grid-2': 'grid grid-cols-1 md:grid-cols-2 gap-12',
        'grid-3': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12',
        'grid-4': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12',

        // Generous spacing
        'section-spacing': 'mb-16',
        'content-spacing': 'mb-12',
        'element-spacing': 'mb-6',
    },
})