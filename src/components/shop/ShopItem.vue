<script lang="ts">
import { useItemsCart } from '@/stores'
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: ""
    },
    name: {
      type: String,
      required: true,
      default: ""
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
  },
  methods: {
    addToCart() {
      const store = useItemsCart()
      store.addToCart({
        id: this.id,
        name: this.name,
        price: this.price
      })
      console.log(store.cartCount)
    }
  },
}
</script>
<template>
  <div class="item">
    <div>
      <img src="https://picsum.photos/200" alt="item" />
      <div class="descr">
        <h3> {{ name }}</h3>
        <p>${{ price }}</p>
      </div>
    </div>
    <button class="itemButton" @click="addToCart">Add to cart</button>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  place-items: center;
  border-style: solid;
  border-color: rgb(56, 56, 56);
  border-width: 2px;
  width: 15rem;
  margin: 1rem;
  transition: 0.3s;
}

.item:hover {
  border-color: rgb(255, 255, 255);
}

h3 {
  color: rgb(202, 202, 202);
}

img {
  object-fit: contain;
}

.descr {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 1rem;
}

.itemButton {
  background-color: hsla(160, 100%, 37%, 1);
  font-size: large;
  width: 100%;
  border: none;
  height: 2.5rem;
  transition: 0.3s;
  cursor: pointer;
}

.itemButton:hover {
  background-color: hsla(160, 100%, 37%, 0.5);
}
</style>
