<template>
  <div>
    <UsersList/>
    <Chatbox/>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList'
import Chatbox from '@/components/Chatbox'

export default {
  components: {
    UsersList,
    Chatbox
  }
}
</script>
