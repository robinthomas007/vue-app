import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '@/types/Product'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<Product[]>([])

  function addToCart(product: Product) {
    const exists = cartItems.value.find((p) => p.id === product.id)
    if (!exists) cartItems.value.push(product)
  }

  function removeFromCart(productId: number) {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId)
  }

  return { cartItems, addToCart, removeFromCart }
})
