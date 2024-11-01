<template>
  <div class="selectInput">
    <InputLabel :is-required="props.isRequired" :label-text="props.labelText" />
    <select :name="props.selectName" :required="props.isRequired" class="selectInput__item" v-model="selectedOption"
      @change="updateSelectedOption">
      <option value="" disabled selected hidden>Forma de pagamento</option>
      <option v-for="(option, index) in props.options" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { type selectInputProps } from '@/types/inputs'
import InputLabel from './shared/InputLabel.vue'
import { ref } from 'vue';

const props = defineProps<selectInputProps>()
const emits = defineEmits(['update:selectedOption'])

const selectedOption = ref('')

const updateSelectedOption = () => {
  emits('update:selectedOption', selectedOption.value)
}
</script>

<style scoped>
.selectInput {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.selectInput__item {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1.05rem;
  cursor: pointer;
  text-align: center;

}
</style>
