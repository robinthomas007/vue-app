<template>
  <div class="flex flex-col items-center">
    <img
      :src="product.image"
      :alt="product.title"
      class="w-[200px] h-[200px] object-contain bg-white p-2"
    />
    <h3 class="my-4 font-bold text-left mr-auto">{{ truncate(product.title, 100) }}</h3>
    <p class="mb-2">{{ truncate(product.description, 150) }}</p>
    <div class="flex item-center justify-between w-full mt-auto">
      <p class="font-bold">${{ product.price }}</p>
      <button
        class="px-4 py-2 bg-blue-600 text-white rounded-xl"
        v-if="!isInCart"
        @click="addToCart(product)"
      >
        Add to Cart
      </button>
      <button
        class="px-4 py-2 bg-red-600 text-white rounded-xl"
        v-else
        @click="removeFromCart(product.id)"
      >
        Remove from Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/Product'
import { useCartStore } from '@/stores/cartStore'
import { computed } from 'vue'

const truncate = (text: string, max = 200) =>
  text.length > max ? text.slice(0, max) + '...' : text

const props = defineProps<{ product: Product }>()
const cartStore = useCartStore()

const isInCart = computed(() => cartStore.cartItems.some((item) => item.id === props.product.id))

function addToCart(product: Product) {
  cartStore.addToCart(product)
}

function removeFromCart(productId: number) {
  cartStore.removeFromCart(productId)
}
</script>
