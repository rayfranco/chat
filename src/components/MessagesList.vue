<template>
  <md-content class="md-scrollbar">
    <MessagesListMessage v-for="(message, index) in messages" :key="index" :message="message"/>
    <!-- {{ groupedMessages }} -->
  </md-content>
</template>

<script>
import MessagesListMessage from './MessagesListMessage'

export default {
  props: ['messages'],
  components: {
    MessagesListMessage
  },
  computed: {
    groupedMessages () {
      var lastUser = null
      var messageStack = []
      const messageGroup = []

      this.messages.forEach((message, index) => {
        const isSameUser = lastUser && message.user.username === lastUser.username
        const isLast = index === this.messages.length - 1

        console.log('isSameUser', isSameUser, lastUser, isLast)
        console.debug()
        if (!isLast && (isSameUser || !lastUser)) {
          console.log('is same user or there is no user')
          messageStack.push({
            text: message.text,
            created: message.created
          })
        } else if (!isLast && !!lastUser) {
          console.log('else if there is a user so push previous stack', messageStack)
          messageGroup.push({
            user: { ...lastUser },
            messages: [ ...messageStack ]
          })
          messageStack = []
          lastUser = { ...message.user }
        }

        if (isLast) {
          messageStack.push({
            text: message.text,
            created: message.created
          })
          messageGroup.push({
            user: { ...message.user },
            messages: [ ...messageStack ]
          })
        }

        if (!lastUser) {
          lastUser = { ...message.user }
          console.log('nolastuser setting it', lastUser)
        }
      })

      console.log('returning', messageStack, messageGroup)

      return messageGroup
    }
  }
}
</script>

<style lang="stylus" scoped>
.md-content
  display flex
  flex-direction column
  overflow auto
</style>
