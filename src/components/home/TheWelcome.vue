<script lang="ts">
import { useItemsCart } from '@/stores'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const emailLog = ref('')
    const passwordLog = ref('')
    const error = ref(null)
    const register = ref(false)
    const store = useItemsCart()
    const router = useRouter()
    const Login = async () => {
      try {
        console.log(emailLog.value, passwordLog.value)
        await store.logIn({
          email: emailLog.value,
          password: passwordLog.value
        })
        router.push('/shop')
      }
      catch (err: any) {
        error.value = err.message
      }
    }
    const Register = async () => {
      try {
        await store.register({
          email: email.value,
          password: password.value,
          name: name.value
        })
      }
      catch (err: any) {
        error.value = err.message
      }
    }
    return { Register, register, Login, name, email, password, error, emailLog, passwordLog }
  }
}
</script>
<template>
  <div id="container">
    <div v-if="!register" class="form-group">
      <form action="#" @submit.prevent="Login">
        <input required value type="email" placeholder="Enter your mail" v-model="emailLog" />
        <input required type="password" placeholder="Enter your password" v-model="passwordLog" />
        <button type="submit" v-if="!register">Log in</button>
        <button v-if="!register" @click="register = !register">Register</button>
      </form>
    </div>
    <div v-if="register" class="form-group">
      <form action="#" @submit.prevent="Register">
        <input required type="text" placeholder="Enter your mail" v-model="email" />
        <input required type="text" placeholder="Enter your name" v-model="name" />
        <input required type="password" placeholder="Enter your password" v-model="password" />
        <button type="submit" v-if="register">Register</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
#container {
  display: flex;
  place-items: center;
  place-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
}

.form-group form {
  flex-direction: column;
  place-content: center;
  display: flex;
  width: 200px;
}
</style>
