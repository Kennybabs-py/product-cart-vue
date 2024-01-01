<script setup>
import { storeToRefs } from 'pinia'
import { useInventoryStore } from '@/stores/inventory'

import ProductCard from '@/components/ProductCard.vue'

const store = useInventoryStore()

const { inventory } = storeToRefs(store)
</script>

<template>
  <div class="home__wrapper">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">
      <h2>Recommended</h2>

      <div class="recommended">
        <ProductCard
          v-for="(product, index) in inventory.slice(0, 3)"
          :key="product.id"
          :index="index"
          :product="product"
          :addToCart="store.addToCart"
        />
      </div>
    </main>
  </div>
</template>
