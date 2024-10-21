<template>
  <div class="radioInput">
    <InputLabel :is-required="props.isRequired" :label-text="props.labelText" />
    <div class="radioInput__item" v-for="(option, index) in props.options" :key="index">
      <input :name="props.checkName" :required="props.isRequired" class="radioInput__item-check" type="radio"
        :value="option" :checked="markedOption === option" @change="updateMarkedOption(option)" />
      <label class="radioInput__item-label">{{ props.labelValues[index] }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type radioInputProps } from '@/types/inputs'
import InputLabel from './shared/InputLabel.vue'
const props = defineProps<radioInputProps>()

const emits = defineEmits(['update:markedOption'])

const updateMarkedOption = (option: any) => {
  emits('update:markedOption', option)
}
</script>

<style scoped>
.radioInput {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.radioInput__item {
  display: flex;
  padding-left: 2px;
  align-items: center;
}

.radioInput__item-check {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: black;
}

.radioInput__item-label {
  padding-left: 8px;
}
</style>