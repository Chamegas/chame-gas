<template>
  <div class="index">
    <div class="index-content">
      <div class="title">
        <h1>Faça já seu pedido</h1>
      </div>
      <div class="product-container">
        <div class="product">
          <div class="product-content"></div>
          <div class="product-image"></div>
        </div>
        <div class="product">Água</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 32px;
}

.index-content {
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

.product {
  max-width: 480px;
  width: 40%;
  height: 200px;
  background-color: var(--white);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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

  .product {
    width: 80%;
    height: 150px;
    font-size: 1.2rem;
  }
}
</style>
