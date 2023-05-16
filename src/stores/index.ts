import { collection, getDocs, getFirestore } from '@firebase/firestore'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type User
} from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../main'

export const useItemsCart = defineStore('items', {
  state: () => ({
    items: [] as ItemInfo[],
    cart: [] as ItemInfo[],
    user: {
      loggedIn: false,
      data: null as User | null
    }
  }),
  getters: {
    cartCount: (state) => state.cart.length,
    userState: (state) => state.user
  },
  actions: {
    addToCart(item: ItemInfo) {
      this.cart.push(item)
    },
    async loadItemsFromFirebase() {
      try {
        const db = getFirestore()
        const colRef = collection(db, 'items')
        const docsSnap = await getDocs(colRef)
        docsSnap.forEach((doc) => {
          const body = doc.data()
          const idforbody = doc.id
          const item = body
          item.id = idforbody
          this.items.push(item as ItemInfo)
        })
      } catch (error) {
        console.log('Error getting documents', error)
      }
    },
    deleteItemFromCart(item: ItemInfo) {
      const index = this.cart.findIndex((i) => i.id === item.id)
      this.cart.splice(index, 1)
    },
    async register({ email, password, name }) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        this.user.data = response.user
        response.user.updateProfile({ displayName: name })
      } else {
        throw new Error('Unable to register user')
      }
    },
    async logIn({ email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        this.user.data = response.user
      } else {
        throw new Error('login failed')
      }
    }
  }
})
export interface ItemInfo {
  id: string
  name: string
  price: number
}
