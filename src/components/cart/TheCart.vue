<script lang="ts">
import CartItem from './CartItem.vue'
import { defineComponent } from 'vue'
import { useItemsCart } from '@/stores'

export default defineComponent({
  components: {
    CartItem,
  },
  computed: {
    cart() {
      return useItemsCart().cart
    },
  },

})
</script>
<template>
  <div id="container">
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        <CartItem v-if="item" :id="item.id" :name="item.name" :price="item.price" />
      </li>
    </ul>
  </div>
</template>
<style scoped>
#container {
  display: flex;
}

li {
  list-style: none;
}
</style>

