<template>
  <div class="productForm" @click="props.onClose()">
    <form @submit="handleSubmission" class="productForm__container" @click.stop>
      <div class="productForm__container-topAction">
        <img :src="CloseIcon" alt="x" @click="props.onClose()">
      </div>
      <div class="productForm__container-content">
        <div class="productForm__content-img">
          <img :src="props.productInfo.image" :alt="props.productInfo.imageAlt">
        </div>
        <div class="productForm__content-principal">
          <div class="productForm__principal-info">
            <div class="productForm__principal-info-title">{{ props.productInfo.title }}</div>
            <div class="productForm__principal-info-description">{{ props.productInfo.description }}</div>
          </div>
          <div class="productForm__content-form">
            <RadioInput :="props.radioInput" v-model:marked-option="radioInputMarkedOption" />
            <DateInput v-if="props.dateInput && radioInputMarkedOption" :="props.dateInput"
              v-model:value="dateInputValue" :isErro="isDateWrong" />
          </div>
          <div class="productForm__content-final">
            <div class="productForm__final-price">
              Valor: <span>{{ price }}</span>
            </div>
            <div class="productForm__final-action">
              <button type="submit">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </form>

  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch, } from 'vue'
import CloseIcon from '@/assets/imgs/icons/close.svg'
import RadioInput from '@/components/inputs/RadioInput.vue';
import DateInput from '@/components/inputs/DateInput.vue';
import { ProductFormType } from '@/types/products';
import { CartService } from '@/services/cartService';

interface ProductFormProps extends ProductFormType {
  onClose: Function
}

const props = defineProps<ProductFormProps>()
const moneyFormatter = () => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
const isDateWrong = ref(false)
const cartService = new CartService()

const dateInputValue = ref(props.dateInput?.value || "")
const radioInputMarkedOption = ref(props.radioInput.markedOption)
const price = computed(() => {
  return radioInputMarkedOption.value ? moneyFormatter().format(props.price) : moneyFormatter().format(props.fullPrice)
})

const isMobile = ref(false)

onMounted(() => {
  checkMobileView()
  window.addEventListener('resize', checkMobileView)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobileView)
})

const checkMobileView = () => {
  isMobile.value = window.innerWidth < 768
}

const isFormValid = () => {
  return !isDateWrong.value && [true, false].includes(radioInputMarkedOption.value as boolean)
}


const handleSubmission = (event: Event) => {
  event.preventDefault()
  if (!isFormValid()) {
    return
  }
  cartService.addProductToCart({
    id: props.productInfo.id,
    isComplete: !radioInputMarkedOption.value as boolean,
    validity: dateInputValue.value === "" ? null : dateInputValue.value
  })
  props.onClose()
}



watch(() => dateInputValue.value, (newValue) => {
  if (newValue) {
    const [year, month] = newValue.split('-').map(Number);
    const actualDate = new Date();
    const inputDate = new Date(year, month - 1);
    isDateWrong.value = actualDate >= inputDate;
  } else {
    isDateWrong.value = false;
  }
});

</script>

<style scoped>
.productForm {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.productForm__container {
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 28px;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.productForm__container-topAction {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
}

.productForm__container-topAction img {
  cursor: pointer;
}

.productForm__container-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.productForm__content-img {
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
}

.productForm__content-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.productForm__content-principal {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}

.productForm__principal-info {
  color: var(--black);
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.productForm__principal-info-title {
  font-size: 1.2rem;
  font-weight: var(--font-bold);
}

.productForm__principal-info-description {
  line-height: 1.2rem;
  font-weight: var(--font-semibold);
  color: var(--base);
}

.productForm__content-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.productForm__content-final {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
}

.productForm__final-price {
  font-size: 1.2rem;
  font-weight: var(--font-semibold);
  display: flex;
  gap: 4px;
}

.productForm__final-price span {
  font-weight: var(--font-semibold);
  font-style: italic;
  text-align: center
}

.productForm__final-action {
  width: 100%;
}

.productForm__final-action button {
  width: 100%;
  padding: 8px 16px;
  font-size: 1.1rem;
  font-weight: var(--font-medium);
  background-color: var(--base);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.productForm__final-action button:hover {
  background-color: var(--black);
}

@media screen and (min-width: 768px) {
  .productForm__container {
    width: 96%;
    height: 80%;
    max-width: 1100px;
    max-height: 700px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .productForm__container-content {
    flex-direction: row;
  }

  .productForm__content-img {
    width: 50%;
    height: 100%;
    margin-bottom: 0;
    padding: 10px;
    margin-right: 20px;
  }

  .productForm__content-principal {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .productForm__content-final {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 0px;
    align-items: center;
  }

  .productForm__final-action {
    width: 52%;
  }
}
</style>
