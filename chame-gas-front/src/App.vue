<template>
  <div class="main">
    <Header />
    <div class="content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { onBeforeMount } from 'vue';
import { CartService } from './services/cartService';

onBeforeMount(() => {
  new CartService()
})
</script>

<style scoped>
.main {
  height: 100%;
  background-color: var(--soft-white);
}

.content {
  height: 100%;
  padding-top: 100px;
  padding-bottom: 32px;
}

@media screen and (max-width: 768px) {
  .main {
    height: auto;
  }

  .content {
    padding-top: 80px;
  }
}
</style>
