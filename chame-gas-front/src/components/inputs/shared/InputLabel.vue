<template>
  <div class="inputLabel">
    <label :for="props.id ? props.id : undefined" :class="['inputLabel__text', { required: props.isRequired }]">
      {{ props.labelText }}
    </label>
  </div>
</template>

<script setup lang="ts">
import type { LabelProps } from '@/types/inputs';
const props = defineProps<LabelProps>()
</script>

<style>
.inputLabel {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.inputLabel__text {
  font-weight: var(--font-medium);
}

.required::after {
  content: '*';
  position: relative;
  top: -2px;
  color: red;
}
</style>