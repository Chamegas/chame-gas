<template>
  <div class="cart">

    <form @submit.prevent="sendOrder" class="cart__form" v-if="cartProducts.length">
      <div class="cart__form-resume">
        <div class="resume__products">
          <div v-for="(item, index) in cartProducts" :key="index">
            <div class="resume__products-info">
              <div>
                {{ item.name }}
              </div>
              <div v-if="item.validity" class="products__valid">
                V:{{ new Date(item.validity).toLocaleDateString('pt-BR', { year: '2-digit', month: 'numeric' }) }}
              </div>
            </div>
            <div class="resume__products-scndInfo">
              <div>
                {{ item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
              </div>
              <div class="products__action" @click="removeProduct(index)">
                <img :src="Delete" alt="trash">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__form-inputs">
        <TextInput :id="'customer'" v-model:value="customer" :placeholder="'Seu nome completo'" :is-required="true"
          :label-text="'Nome:'" :type="'text'" />
        <TextInput :is-disabled="true" :id="'city'" :value="'Santo Antônio'" :is-required="true"
          :label-text="'Cidade: '" :type="'text'" />
        <TextInput :id="'address'" v-model:value="address" :placeholder="'Sua Rua - Bairro, número xxx...'"
          :is-required="true" :label-text="'Endereço:'" :type="'textarea'" />
        <SelectInput :select-name="'payment'" :is-required="true" :label-text="'Forma de pagamento:'"
          :options="paymentMethods.map(item => item.name)" :label-values="paymentMethods.map(item => item.name)"
          v-model:selected-option="payment" />
      </div>
      <div class="cart__form-final">
        <div class="final__price">
          <span class="price-span">Total:</span> {{ total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }) }}
        </div>
        <div class="final__action">
          <button type="submit">Finalizar Pedido</button>
        </div>
      </div>
    </form>
    <div v-else class="cart__empty">
      <h1>Não há produtos no carrinho</h1>
    </div>

  </div>
</template>

<script setup lang="ts">
import { CartService } from '@/services/cartService';
import { ProductData } from '@/types/products';
import { paymentMethods } from '@/data/payment';
import { computed, onBeforeMount, reactive, ref } from 'vue';
import TextInput from '@/components/inputs/TextInput.vue';
import SelectInput from '@/components/inputs/SelectInput.vue';
import Delete from '@/assets/imgs/icons/delete.svg';
import router from '@/router';
import { PaymentFee } from '@/types/payment';

const cartService = CartService.getInstance();
const cartProducts = reactive<ProductData[]>([]);
const address = ref('');
const payment = ref('');
const customer = ref('');


onBeforeMount(() => {
  cartProducts.push(...cartService.getProductsFormatted());
});

const removeProduct = (index: number): void => {
  cartService.removeProductFromCart(index);
  cartProducts.splice(index, 1);
}

const total = computed(() => {
  const paymentFee: PaymentFee | Number = paymentMethods.find(item => item.name === payment.value)?.fee || 0;
  const totalCart = cartProducts.reduce((acc, item) => {
    if(paymentFee === 0) return acc + item.price;
    const feeValue = item.isComplete? (paymentFee as PaymentFee)[item.id].full : (paymentFee as PaymentFee)[item.id].normal;
    return acc + item.price + feeValue;
  }, 0);
  return totalCart;
})


const sendOrder = () => {
  const message = `🛵Novo Pedido!\n\nNome:\n${customer.value}\n\nEndereço:\n${address.value}\n\n${cartProducts.map(item => `${item.name} ${item.validity ? `V: ${new Date(item.validity).toLocaleDateString('pt-BR', { year: '2-digit', month: 'numeric' })}` : ''} `).join('\n')}\n\nTotal: ${total.value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })} --> ${payment.value.toLocaleUpperCase()}`;
  const url = `https://api.whatsapp.com/send?phone=7536323370&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
  cartService.cleanCart()
  router.push({ name: 'index' })
}

</script>

<style scoped>
.cart {
  padding: 28px;
  height: 100%;
  overflow-y: auto;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--soft-white);
}

.cart__form {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cart__empty {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  font-size: 1.5rem;
  color: var(--base);
  font-weight: var(--font-medium);
  text-align: center;
}

.cart__form-resume {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 6px;
  min-height: 60px;
  max-height: 120px;
  overflow-y: auto;
  margin-bottom: 32px;
}

.resume__products {
  display: grid;
  font-size: 0.8rem;
  gap: 4px;
  font-weight: var(--font-bold);
  color: var(--base);
}



.resume__products div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.resume__products-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.products__valid {
  align-self: flex-start;
}

.resume__products-scndInfo {
  display: flex;
  gap: 4px;
}

.products__action {
  cursor: pointer;
}

.products__action img:hover {
  transform: scale(1.05);
}

.cart__form-inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart__form-final {
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
}

.final__price {
  display: flex;
  font-size: 1.2rem;
  font-weight: var(--font-medium);
  margin-bottom: 20px;
}

.price-span {
  margin-right: 8px;
  font-weight: var(--font-semibold);
}

.final__action {
  width: 100%;
}

.final__action button {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background-color: var(--light-secondary);
  font-size: 1.2rem;
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: ease-in-out 0.1s;
}

.final__action button:hover {

  background-color: var(--dark-secondary);
}
</style>
