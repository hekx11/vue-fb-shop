import { getAuth } from 'firebase/auth'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { initializeApp } from 'firebase/app'
import 'firebase/compat/firestore'
import App from './App.vue'
import './assets/main.css'

import router from './router'

const app = createApp(App)
app.use(createPinia())

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}
const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase)
export { auth, firebase }
app.use(router)

app.mount('#app')
