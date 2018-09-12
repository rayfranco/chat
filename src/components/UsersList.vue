<template>
  <ul>
    <UsersListUser v-for="(user, index) in users" :key="index" :user="user"/>
  </ul>
</template>

<script>
import UsersListUser from './UsersListUser'

export default {
  data () {
    return {
      users: [
        'Booba',
        'Kaaris',
        'Robert',
        'Jean-Michel'
      ]
    }
  },
  components: {
    UsersListUser
  }
}
</script>
