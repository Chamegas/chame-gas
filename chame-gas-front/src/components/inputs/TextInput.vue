<template>
  <div class="inputText">
    <InputLabel :is-required="props.isRequired" :id="props.id" :label-text="props.labelText" />
    <input v-if="props.type == 'text'" class="inputText-item" :required="props.isRequired"
      :id="props.id ? props.id : ''" :placeholder="props.placeholder" maxlength="120" @input="updateValue"
      :disabled="props.isDisabled ? props.isDisabled : false" v-model="internalValue" />
    <textarea v-else class="inputText-item" :required="props.isRequired" :id="props.id ? props.id : ''"
      :placeholder="props.placeholder" maxlength="200" @input="updateValue"
      :disabled="props.isDisabled ? props.isDisabled : false" v-model="internalValue" style="resize: vertical;"
      rows="5" />
  </div>
</template>

<script setup lang="ts">
import { textInputProps } from '@/types/inputs';
import InputLabel from './shared/InputLabel.vue';
import { ref } from 'vue';


const props = defineProps<textInputProps>();

const internalValue = ref(props.value);

const emits = defineEmits(['update:value']);
const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits('update:value', target.value);
};

</script>

<style scoped>
.inputText {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.inputText-item {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-weight: var(--font-medium);
  font-size: 1.05rem;
}
</style>