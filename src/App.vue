<script>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'

import food from './food.json'

export default {
  components: {
    RouterLink: RouterLink,
    RouterView: RouterView,
    SideBar: SideBar
  },

  data() {
    return {
      inventory: food,
      showSidebar: false,
      cart: {}
    }
  },
  methods: {
    addToCart(name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },

    removeCartItem(name) {
      delete this.cart[name]
    }
  },
  computed: {
    totalCartQuantity() {
      return Object.values(this.cart).reduce((acc, curr) => acc + curr, 0)
    }
  }
}
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
    :inventory="inventory"
    :remove="removeCartItem"
  />

  <RouterView :inventory="inventory" :addToCart="addToCart" />
</template>
