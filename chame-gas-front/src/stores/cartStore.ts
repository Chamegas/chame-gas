import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { ProductMainData } from '@/types/products'

export const useCartStore = defineStore('cart', () => {
  const cart = reactive<ProductMainData[]>([])

  const getQuantity = computed(() => {
    return cart.length
  })

  return {
    cart,
    getQuantity
  }
})
