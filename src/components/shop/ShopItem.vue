<template>
  <div class="item">
    <img src="https://picsum.photos/200" alt="item" />
    <h3>Item</h3>
    <p>Price</p>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  place-items: center;
  border-style: solid;
  max-height: 300px;
  margin: 1rem;
}
img {
  object-fit: contain;
}
</style>
