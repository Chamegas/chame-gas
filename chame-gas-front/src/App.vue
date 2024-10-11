<template>
  <div class="main">
    <Header />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
</script>

<style scoped>
.main {
  background-color: var(--soft-white);
  height: 100%;
}

.content {
  height: 100%;
  padding-top: 100px;
}

@media screen and (max-width: 768px) {
  .content {
    padding-top: 80px;
  }
}
</style>
