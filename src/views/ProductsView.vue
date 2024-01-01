<script setup>
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps(['inventory', 'addToCart'])
</script>

<template>
  <main class="wrapper">
    <h1>Products 😢</h1>

    <div class="card-container">
      <ProductCard
        v-for="(product, index) in props.inventory.slice(0, 6)"
        :key="product.id"
        :index="index"
        :product="product"
        :addToCart="props.addToCart"
      />
    </div>
  </main>
</template>
