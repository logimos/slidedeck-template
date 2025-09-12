import { defineConfig } from 'unocss'

export default defineConfig({
    theme: {
        colors: {
            accent: '#2563eb', // blue-600
            muted: '#64748b',  // slate-500
        }
    },
    shortcuts: {
        // custom the default background
        'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',

        // slidev layout utilities
        'slidev-layout': 'leading-5',

        // text utilities
        'small-muted': 'text-sm text-muted',

        // highlight box utility
        'hl-box': 'absolute border-3 border-accent border-rd-2 shadow-lg pointer-events-none',

        // callout utility
        'callout': 'border-l-4 border-l-accent px-4 py-3 bg-blue-50/60 border-rd-1.5',
    },
    // ...
})