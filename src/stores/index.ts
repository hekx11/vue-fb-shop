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
      try {
        const itemsRef = firestore.collection('items')
        const snapshot = await itemsRef.get()
        snapshot.forEach((doc) => {
          const item = doc.data() as ItemInfo
          this.items.push(item)
        })
      } catch (error) {
        console.log('Error getting documents', error)
      }
    },
    deleteItemFromCart(item: ItemInfo) {
      const index = this.cart.findIndex((i) => i.name === item.name)
      this.cart.splice(index, 1)
    }
  }
})
export interface ItemInfo {
  id: string
  name: string
  price: number
}
