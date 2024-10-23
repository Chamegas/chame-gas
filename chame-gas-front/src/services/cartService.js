import { useCartStore } from '@/stores/cartStore';
export class CartService {
    static instance;
    cartStore;
    localStorageKey = '';
    constructor() {
        this.cartStore = useCartStore();
        this.localStorageKey = 'c';
        this.loadCartProducts();
    }
    static getInstance() {
        if (!CartService.instance) {
            CartService.instance = new CartService();
        }
        return CartService.instance;
    }
    loadCartProducts() {
        const cartProducts = localStorage.getItem(this.localStorageKey);
        this.cartStore.cart.splice(0, this.cartStore.cart.length, ...(cartProducts ? JSON.parse(cartProducts) : []));
    }
    saveCartProducts() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartStore.cart));
    }
    getCartProducts() {
        return [...this.cartStore.cart];
    }
    addProductToCart(product) {
        this.cartStore.cart.push(product);
        this.saveCartProducts();
    }
    getCartQuantity() {
        return this.cartStore.getQuantity;
    }
}
