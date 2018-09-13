<template>
  <ul>
    <UsersListUser v-for="(user, index) in users" :key="index" :user="user"/>
  </ul>
</template>

<script>
import UsersListUser from './UsersListUser'
import store from '../store'

export default {
  computed: {
    users: () => store.users
  },
  components: {
    UsersListUser
  }
}
</script>
