<template>
  <div class="dateInput">
    <InputLabel :is-required="props.isRequired" :id="props.id" :label-text="props.labelText" />
    <div class="dateInput__input">
      <input :type="props.dateType" :value="props.value" @change="updateValue" :required="props.isRequired"
        :id="props.id ?? ''" :min="props.minDate ?? undefined" :max="props.maxDate ?? undefined">
      <span v-if="props.isErro" class="dateInput__input-error">{{ props.errorMessage }}</span>
    </div>
  </div>
</template>


<script setup lang="ts">
import InputLabel from './shared/InputLabel.vue';
import { type dateInputProps } from '@/types/inputs';

interface DateInputProps extends dateInputProps {
  isErro: boolean;
}

const props = defineProps<DateInputProps>();


const emits = defineEmits(['update:value']);

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits('update:value', target.value);
};
</script>


<style scoped>
.dateInput {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dateInput__input {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.dateInput__input input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  color: black !important;
}

.dateInput__input-error {
  font-size: 0.8rem;
  font-weight: var(--font-bold);
  color: red;
}
</style>