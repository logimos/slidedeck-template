<script setup lang="ts">
interface Props {
  x: number
  y: number
  w: number
  h: number
}
const props = defineProps<Props>()
</script>

<template>
  <div
    class="hl-box"
    :style="{
      left: props.x + 'px',
      top: props.y + 'px',
      width: props.w + 'px',
      height: props.h + 'px',
    }"
  />
</template>

<style scoped>
.hl-box { transition: opacity 200ms ease, transform 200ms ease, box-shadow 200ms ease; }
</style>