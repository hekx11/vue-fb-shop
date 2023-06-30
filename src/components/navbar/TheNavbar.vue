<script lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCartOutline, mdiLogout } from '@mdi/js';
import { useItemsCart } from '@/stores'
import { useRouter } from 'vue-router'

export default {
  components: {
    SvgIcon
  },

  data() {
    const store = useItemsCart()
    const router = useRouter()
    const error = null
    const Logout = async () => {
      try {
        await store.logout()
        router.push('/login')
      }
      catch (err: any) {
        error.value = err.message
      }
    }
    return {
      mdiCart: mdiCartOutline,
      mdiLogout: mdiLogout,
      Logout
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
    <div class="rightSideIcons">
      <router-link to="/cart"><svg-icon type="mdi" :path="mdiCart"></svg-icon></router-link>
      <div class="iconStyle" @click="Logout"><svg-icon type="mdi" :path="mdiLogout"></svg-icon></div>
    </div>
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

.rightSideIcons {
  display: flex;
}

img {
  width: 75px;
  height: 75px;
}

.iconStyle {
  margin: 0 5px;
}


h2 {
  Transform: translate(-50%, 0)
}
</style>
