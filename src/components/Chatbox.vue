<template>
  <section>
    <MessagesList :messages="messages" />
    <Sendbox @messageSent="onMessageSent" />
  </section>
</template>

<script>
import MessagesList from './MessagesList'
import Sendbox from './Sendbox'
import store from '../store'

export default {
  methods: {
    onMessageSent (message) {
      // store.messages.push(message)
      this.$api.messageSend(message)
    }
  },
  computed: {
    messages: () => store.messages
  },
  components: {
    MessagesList,
    Sendbox
  }
}
</script>
