<template>
  <md-content class="md-scrollbar">
    <md-list>
      <UsersListUser v-for="(user, index) in users" :key="index" :user="user"/>
    </md-list>
  </md-content>
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

<style scoped lang="stylus">
.md-content
  display flex
  align-items flex-start
  flex-direction column
  overflow auto
  position fixed
  top 64px
  bottom 0
  left 0
  width 250px
</style>
