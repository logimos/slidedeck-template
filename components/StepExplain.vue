<script setup lang="ts">
interface Props {
  title: string
  type?: 'info' | 'success' | 'warning' | 'danger'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info'
})

const typeClasses = {
  info: 'callout',
  success: 'callout-success',
  warning: 'callout-warning',
  danger: 'callout-danger'
}
</script>

<template>
  <div :class="typeClasses[props.type]">
    <strong class="text-primary">{{ props.title }}</strong>
    <div class="text-muted mt-2"><slot /></div>
  </div>
</template>