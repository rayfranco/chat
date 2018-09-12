<template>
  <ul>
    <MessagesListMessage v-for="(message, index) in messages" :key="index" :message="message"/>
  </ul>
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
