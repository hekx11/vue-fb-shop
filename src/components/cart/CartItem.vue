<script lang="ts">
import { useItemsCart } from '@/stores';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiDeleteOutline } from '@mdi/js';

export default {
  components: {
    SvgIcon
  },
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
  methods: {
    deleteItem() {
      const store = useItemsCart();
      store.deleteItemFromCart(this)
    },
  },
  data() {
    return {
      path: mdiDeleteOutline,
    }
  },
}
</script>
<template>
  <div class="item">
    <h3>{{ name }}</h3>
    <p>Price: ${{ price }}</p>
    <button @click="deleteItem"><svg-icon type="mdi" :path="path"></svg-icon></button>
  </div>
</template>
<style scoped>
.item {
  display: flex;
  width: 700px;
  height: 50px;
  align-items: center;
  place-content: space-between;
  border-style: solid;
  border-color: rgb(56, 56, 56);
  border-width: 2px;
  margin: 1rem;
}

h3 {
  margin-left: 1rem;
  color: rgb(202, 202, 202);
}

button {
  color: rgb(138, 0, 0);
  background-color: transparent;
  border: none;
  outline: none;
  transition: 3s;
}

button:hover {
  color: rgb(196, 0, 0);
  cursor: pointer;
}
</style>