import { defineStore } from 'pinia'
import { firestore } from '../main'

export const useItemsCart = defineStore('items', {
  state: () => ({
    items: [] as ItemInfo[],
    cart: [] as ItemInfo[]
  }),
  getters: {
    cartCount: (state) => state.cart.length
  },
  actions: {
    addToCart(item: ItemInfo) {
      this.cart.push(item)
    },
    async loadItemsFromFirebase() {
      const itemsRef = firestore.collection('items')
      const snapshot = await itemsRef.get()
      snapshot.forEach((doc) => {
        const item = doc.data() as ItemInfo
        this.items.push(item)
      })
    }
  }
})
interface ItemInfo {
  id: string
  name: string
  price: string
}
