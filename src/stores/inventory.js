import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import food from '../food.json'

export const useInventoryStore = defineStore('inventory', () => {
  const inventory = ref(food)
  const cart = ref({})

  const totalCartQuantity = computed(() => {
    return Object.values(cart.value).reduce((acc, curr) => acc + curr, 0)
  })

  function addToCart(name, quantity) {
    if (!cart.value[name]) cart.value[name] = 0
    cart.value[name] += quantity
  }

  function removeCartItem(name) {
    delete cart.value[name]
  }

  return { inventory, cart, addToCart, removeCartItem, totalCartQuantity }
})
