<template>
  <section>
    <MessagesList :messages="messages" />
    <Sendbox @messageSent="onMessageSent" />
  </section>
</template>

<script>
import MessagesList from './MessagesList'
import Sendbox from './Sendbox'

export default {
  data () {
    return {
      // TODO: Supprimer
      messages: []
    }
  },
  methods: {
    onMessageSent (message) {
      this.messages.push(message)
    }
  },
  components: {
    MessagesList,
    Sendbox
  }
}
</script>
