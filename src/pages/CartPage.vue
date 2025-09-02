<template>
  <div>
    <h2>Cart</h2>
    <div v-if="cartItems.length">
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          <div>
            {{ item.title }} - ₹{{ item.price }}
            <button @click="removeFromCart(item.id)">Remove</button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>Cart is empty</div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { cartItems } = storeToRefs(cartStore)
const { removeFromCart } = cartStore
</script>
