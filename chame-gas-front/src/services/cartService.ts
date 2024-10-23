import { ProductMainData } from '@/types/products'
import { useCartStore } from '@/stores/cartStore'

export class CartService {
  private static instance: CartService
  private cartStore
  private localStorageKey = ''

  constructor() {
    this.cartStore = useCartStore()
    this.localStorageKey = 'c'
    this.loadCartProducts()
  }

  public static getInstance(): CartService {
    if (!CartService.instance) {
      CartService.instance = new CartService()
    }
    return CartService.instance
  }

  private loadCartProducts() {
    const cartProducts = localStorage.getItem(this.localStorageKey)
    this.cartStore.cart.splice(
      0,
      this.cartStore.cart.length,
      ...(cartProducts ? JSON.parse(cartProducts) : [])
    )
  }

  private saveCartProducts() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartStore.cart))
  }

  public getCartProducts(): ProductMainData[] {
    return [...this.cartStore.cart]
  }

  public addProductToCart(product: ProductMainData): void {
    this.cartStore.cart.push(product)
    this.saveCartProducts()
  }

  public getCartQuantity(): number {
    return this.cartStore.getQuantity
  }
}
