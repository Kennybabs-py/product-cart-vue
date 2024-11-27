<script setup>
import { ref } from 'vue'

const props = defineProps(['product', 'index', 'addToCart'])

const quantity = ref(0)
</script>

<template>
  <div class="card">
    <div class="card-title">{{ props.product.name }}</div>
    <div class="card-body">
      <i class="icofont-10x icofont-{{ props.product.icon }}"></i>
      <form>
        <div class="row">
          <div class="cell">
            <label>Type:</label>
          </div>
          <div class="cell">
            <em>{{ props.product.type }}</em>
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Price:</label>
          </div>
          <div class="cell">${{ props.product.price.USD }}</div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Quantity:</label>
          </div>
          <div class="cell">
            <input type="number" v-model.number="quantity" />
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <button @click="props.addToCart(product.name, quantity)" class="btn btn-light">
        Add to cart
      </button>
    </div>
  </div>
</template>
