<template>
  <div class="product" @click="props.onProductSelect()">
    <div class="product__info">
      <div class="product__info-title">{{ props.title }}</div>
      <div class="product__info-description">{{ props.description }}</div>
    </div>
    <div class="product__image">
      <div class="product__image-container">
        <img :src="props.image" :alt="props.imageAlt" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductMain } from '@/types/products';

interface ProductProps extends ProductMain {
  onProductSelect: Function;
}

const props = defineProps<ProductProps>()
</script>

<style scoped>
.product {
  max-width: 560px;
  width: 40%;
  height: 200px;
  background-color: var(--white);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s;
}

.product:hover {
  transform: scale(1.02);
}

.product__info {
  width: 50%;
  color: var(--black);
  height: 100%;
  padding: 70px 20px 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product__info-title {
  font-size: 1.2rem;
  font-weight: var(--font-bold);
}

.product__info-description {
  font-size: 0.8rem;
  line-height: 1.2rem;
  font-weight: var(--font-semibold);
  color: var(--base);
}

.product__image {
  height: 100%;
  padding: 20px;
  width: 50%;
}

.product__image-container {
  height: 100%;
  width: 100%;
}

.product__image-container img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .product {
    max-width: none;
    width: 80%;
    height: 150px;
    font-size: 1.2rem;
  }

  .product__info {
    width: 45%;
    padding: 40px 5px 10px 15px;
    gap: 10px;
  }

  .product__info-description {
    font-size: 0.8rem;
    line-height: 1rem;
  }

  .product__image {
    width: 55%;
    padding: 10px;
  }
}
</style>
