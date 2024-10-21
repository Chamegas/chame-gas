<template>
  <div class="index">
    <div class="index-content">
      <div class="title">
        <h1>Faça já seu pedido</h1>
      </div>
      <div class="product-container">
        <Product v-for="(product, index) in ProductsMainIndex" :key="index" :="product"
          :onProductSelect="() => handleProductSelect(index)" />
      </div>
    </div>
    <ProductForm v-if="canShowForm" :="productForm" :onClose="handleCloseForm" />
  </div>
</template>

<script setup lang="ts">
import Product from '@/components/index/Product.vue'
import ProductForm from '@/components/index/ProductForm.vue';
import { ProductsMainIndex, ProductsForm } from '@/data/products';
import type { ProductFormType } from '@/types/products';
import { ref } from 'vue';

let productForm: ProductFormType = {} as ProductFormType;
const canShowForm = ref(false);

const handleProductSelect = (id: number) => {
  productForm = ProductsForm[id];
  canShowForm.value = true;
}

const handleCloseForm = () => {
  canShowForm.value = false;
}

</script>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 40px;
  overflow: auto;
}

.title {
  text-align: center;
  font-size: 2rem;
  color: var(--white);
  background-color: var(--dark-primary);
  width: 40%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
}

.product-container {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 100px;
}

@media screen and (max-width: 768px) {
  .title {
    width: 80%;
    font-size: 1.5rem;
    padding: 5px;
  }

  .product-container {
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
}
</style>
