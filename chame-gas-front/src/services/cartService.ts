import { ProductData, ProductMainData } from '@/types/products'
import { useCartStore } from '@/stores/cartStore'
import { ProductsForm, ProductsMainIndex } from '@/data/products'

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

  public getProductsFormatted(): ProductData[] {
    return this.cartStore.cart.map((product) => ({
      id: product.id,
      name: product.isComplete
        ? ProductsMainIndex[product.id - 1].title + ' + vasilhame'
        : ProductsForm[product.id - 1].productInfo.title,
      price: product.isComplete
        ? ProductsForm[product.id - 1].fullPrice
        : ProductsForm[product.id - 1].price,
      isComplete: product.isComplete,
      validity: product.validity
    }))
  }

  public addProductToCart(product: ProductMainData): void {
    this.cartStore.cart.push(product)
    this.saveCartProducts()
  }

  public getCartQuantity(): number {
    return this.cartStore.getQuantity
  }

  public removeProductFromCart(index: number): void {
    this.cartStore.cart.splice(index, 1)
    this.saveCartProducts()
  }

  public cleanCart(): void {
    this.cartStore.cart.splice(0, this.cartStore.cart.length)
    this.saveCartProducts()
  }
}
