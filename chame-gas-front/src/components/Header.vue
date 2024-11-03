<template>
  <header class="header">
    <div class="header__logo">
      <router-link :to="{ name: 'index' }">
        <img :src="logo" alt="logo" />
        <p>Inicio</p>
      </router-link>
    </div>
    <div class="header__sale">
      <div style="cursor: pointer" @click="goToCart">
        <div class="header__sale-cart">
          <img :src="Cart" alt="cart">
        </div>
        <div class="header__sale-info">Carrinho</div>
        <div v-if="cartQuantity" class="header__sale-qtd">{{ cartQuantity }}</div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import logo from '@/assets/imgs/logo/logoNoBg.png'
import Cart from '@/assets/imgs/icons/cart.svg'
import router from '@/router';
import { computed } from 'vue';
import { CartService } from '@/services/cartService';

const goToCart = () => {
  router.push({ name: 'cartIndex' });
}
const cartService = CartService.getInstance()

const cartQuantity = computed(() => cartService.getCartQuantity())

</script>

<style scoped>
.header {
  background-color: var(--soft-white);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-gray);
  position: fixed;
  width: 100%;
}

.header__logo {
  display: flex;
  align-items: end;
  width: 150px;
  margin-left: 150px;
}

.header__logo img {
  width: 100%;
  cursor: pointer;
}

.header__logo p {
  cursor: pointer;
  font-weight: var(--font-bold);
  text-decoration: underline;
  position: absolute;
  color: var(--base);
  bottom: 8px;
  left: 308px;
  font-size: 1.2rem;
}

.header__sale>div {
  display: flex;
  align-items: center;
  position: relative;
  top: 28px;
  margin-right: 150px;
  font-weight: var(--font-bold);
  font-style: italic;
}


.header__sale-info {
  position: relative;
  top: 4px;
  font-weight: var(--font-semibold);
  color: var(--base);
}

.header__sale-qtd {
  background-color: var(--light-secondary);
  color: var(--base);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: var(--font-semibold);
  position: absolute;
  top: -15px;
  right: 55px;
  font-weight: var(--font-bold);
}

.header__sale-cart {
  width: 30px;
}

.header__sale-cart img {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .header {
    height: 80px;
  }

  .header__logo {
    width: 100px;
    margin-left: 20px;
  }

  .header__logo p {
    bottom: 10px;
    font-size: 1rem;
    left: 124px;
  }

  .header__sale>div {
    margin-right: 20px;
    top: 23px;
  }

  .header__sale-cart {
    width: 25px;
  }

  .header__sale-info {
    font-size: 0.8rem;
  }

  .header__sale-qtd {
    right: 45px;
    font-size: 0.6rem;
  }
}
</style>
