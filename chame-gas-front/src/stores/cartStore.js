import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
export const useCartStore = defineStore('cart', () => {
    const cart = reactive([]);
    const getQuantity = computed(() => {
        return cart.length;
    });
    return {
        cart,
        getQuantity
    };
});
