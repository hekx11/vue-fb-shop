<script lang="ts">
import { defineComponent } from 'vue'
import { useItemsCart } from '@/stores'
import ShopItem from './ShopItem.vue'

export default defineComponent({

  components: {
    ShopItem,
  },
  created() {
    useItemsCart().loadItemsFromFirebase()
  },
  computed: {
    items() {
      return useItemsCart().items
    },
  },
})
</script>
<template>
  <div id="container">
    <ShopItem v-for="(item, index) in items" :key="index" :id="item.id" :name="item.name" :price="item.price" />
  </div>
</template>

<style scoped>
#container {
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(4, 0.2fr);
}
</style>
