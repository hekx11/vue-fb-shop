<script lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCartOutline } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiCartOutline,
    }
  }
}
</script>
<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/1.png" alt="logo" />
      </router-link>
    </div>
    <h2><router-link to="/shop">Shop</router-link></h2>

    <router-link to="/cart"><svg-icon type="mdi" :path="path"></svg-icon></router-link>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  place-content: space-around;
  align-items: center;
  padding: 1rem;
  border-bottom: solid 1px rgb(56, 56, 56);
}

img {
  width: 75px;
  height: 75px;
}

h2 {
  Transform: translate(-50%, 0)
}
</style>
