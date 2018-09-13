<template>
  <md-content class="md-scrollbar">
    <MessagesListMessage v-for="(message, index) in messages" :key="index" :message="message"/>
  </md-content>
</template>

<script>
import MessagesListMessage from './MessagesListMessage'

export default {
  props: ['messages'],
  components: {
    MessagesListMessage
  }
}
</script>

<style lang="stylus" scoped>
.md-content
  display flex
  flex-direction column
  overflow auto
</style>
