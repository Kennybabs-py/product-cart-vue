<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'

import SideBar from '@/components/SideBar.vue'

import { useInventoryStore } from '@/stores/inventory'

const showSidebar = ref(false)

const store = useInventoryStore()

const { totalCartQuantity } = storeToRefs(store)

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
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

  <SideBar v-if="showSidebar" :toggle="toggleSidebar" />

  <RouterView />
</template>
