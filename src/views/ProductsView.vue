<script setup>
import ProductCard from '@/components/ProductCard.vue'

import { storeToRefs } from 'pinia'
import { useInventoryStore } from '@/stores/inventory'

const store = useInventoryStore()

const { inventory } = storeToRefs(store)

const { addToCart } = store
</script>

<template>
  <main class="wrapper">
    <h1>Products 😢</h1>

    <div class="card-container">
      <ProductCard
        v-for="(product, index) in inventory.slice(0, 6)"
        :key="product.id"
        :index="index"
        :product="product"
        :addToCart="addToCart"
      />
    </div>
  </main>
</template>
