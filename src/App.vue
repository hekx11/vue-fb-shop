<script lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/navbar/TheNavbar.vue'
import { defineComponent } from 'vue'
import { useItemsCart } from '@/stores'
export default defineComponent({
  components: {
    TheNavbar,
    RouterView,
  },
  created() {
    useItemsCart().loadItemsFromFirebase()
  },
})
</script>

<template>
  <TheNavbar />
  <RouterView />
</template>

<style scoped></style>
