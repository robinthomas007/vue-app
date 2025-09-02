<!-- pages/ProductList.vue -->
<template>
  <div class="p-4">
    <h2 class="font-bold text-3xl mb-4">Product List</h2>
    <div class="grid grid-cols-4 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="border border-gray-300 p-4 rounded shadow hover:shadow-lg transition-shadow duration-200"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

const products = ref<Product[]>([])

onMounted(async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  products.value = await res.json()
})
</script>

<style scoped></style>
