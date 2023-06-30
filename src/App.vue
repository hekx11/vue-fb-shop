<script lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/navbar/TheNavbar.vue'
import { defineComponent } from 'vue'
import { useItemsCart } from '@/stores'
import { auth } from './main'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    TheNavbar,
    RouterView,
  },
  created() {
    useItemsCart().loadItemsFromFirebase()
    const router = useRouter()
    auth.onAuthStateChanged(function (user) {
      if (user) {
        router.push('shop')
      } else {
        router.push('login')
      }
    });
  },
  computed: {
    isLogin() {
      console.log(this.$route.path)
      return this.$route.path === '/login' || this.$route.path === '/'
    }
  }
})
</script>

<template>
  <TheNavbar v-if="!isLogin" />
  <RouterView />
</template>

<style scoped></style>
