<template>
  <div>
    <LoginForm @submit="onFormSubmit"/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import store from '../store'

export default {
  components: {
    LoginForm
  },
  methods: {
    onFormSubmit (username) {
      this.$api.userRegister(username, 'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1480481059').then((user) => {
        store.user = user
        this.$router.push({ name: 'chatroom' })
      })
    }
  }
}
</script>
