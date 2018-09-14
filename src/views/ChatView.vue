<template>
  <div class="container-wrapper">
    <UsersList/>
    <MessagesList :messages="messages" />
    <Sendbox @messageSent="onMessageSent" />
  </div>
</template>

<script>
import UsersList from '@/components/UsersList'
import MessagesList from '@/components/MessagesList'
import Sendbox from '@/components/Sendbox'
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
  watch: {
    messages () {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.scrollHeight)
      })
    }
  },
  components: {
    UsersList,
    MessagesList,
    Sendbox
  }
}
</script>

<style lang="stylus" scoped>
.container-wrapper
  flex 1
  padding-left 250px
</style>
