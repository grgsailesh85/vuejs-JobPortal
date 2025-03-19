<script setup>
import { defineProps } from 'vue'
defineProps({
    bg: {
        type: String,
        default: 'bg-gray-100'
    }
})
</script>

<!-- simple wrapper component that:- Uses <slot> to allow dynamic content insertion. -->
<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
z
