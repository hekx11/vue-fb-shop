<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
  },
}
</script>
<template>
  <div class="item">
    <h3>{{ name }}</h3>
    <p>${{ price }}</p>
  </div>
</template>
<style scoped>
.item {
  display: flex;
  width: 700px;
  height: 50px;
  align-items: center;
  place-content: space-between;
}
</style>