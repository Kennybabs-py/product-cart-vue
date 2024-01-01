<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import SideBar from '@/components/SideBar.vue'

import food from './food.json'

const inventory = ref(food)
const showSidebar = ref(false)
const cart = ref({})

function addToCart(name, quantity) {
  if (!cart.value[name]) cart.value[name] = 0
  cart.value[name] += quantity
}

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}

function removeCartItem(name) {
  delete cart.value[name]
}

const totalCartQuantity = computed(() => {
  return Object.values(cart.value).reduce((acc, curr) => acc + curr, 0)
})
</script>

<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <RouterLink to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/products" class="top-bar-link">
        <span>Products</span>
      </RouterLink>
      <RouterLink to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </RouterLink>
    </nav>

    <button @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalCartQuantity }})</span>
    </button>
  </header>

  <SideBar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :remove="removeCartItem"
    :inventory="inventory"
  />

  <RouterView :inventory="inventory" :addToCart="addToCart" />
</template>
