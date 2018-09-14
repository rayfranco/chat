<template>
  <md-card>
    <md-card-header>
      <md-avatar
        class="md-primary"
        :style="styleAvatar"
        :class="{ 'md-avatar-icon': !user.avatar }">
        <template v-if="user.avatar">
          <img :src="user.avatar">
        </template>
        <template v-else>
          {{ user.username[0] }}
        </template>
      </md-avatar>
      <div class="md-title">{{ user.username }}</div>
    </md-card-header>
    <md-card-content>
      {{ message.text }}
    </md-card-content>
  </md-card>
</template>

<script>
import store from '../store'
export default {
  props: ['message'],
  computed: {
    user () {
      return store.users.find((user) => user.username === this.message.user.username)
    },
    styleAvatar () {
      return {
        backgroundColor: this.user.color
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.md-card
  margin 8px 16px
  &:first-child
    margin-top 16px
  &:last-child
    margin-bottom 16px
</style>
