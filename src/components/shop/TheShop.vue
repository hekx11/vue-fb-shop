<script setup lang="ts">
import ShopItem from './ShopItem.vue'
</script>
<template>
  <div id="container">
    <ShopItem />
    <ShopItem />
    <ShopItem />
    <ShopItem />
  </div>
</template>

<style scoped>
#container {
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(4, 0.2fr);
}
</style>
