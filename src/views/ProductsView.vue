<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: { ProductCard: ProductCard },

  props: ['inventory', 'addToCart'],

  data: function () {
    return {
      quantity: 0
    }
  }
}
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
