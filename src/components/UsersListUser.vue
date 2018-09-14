<template>
  <md-list-item>
    <md-avatar class="md-avatar-icon" :style="avatarStyle">{{ user.username[0] }}</md-avatar>
    {{ user.username }}
  </md-list-item>

</template>

<script>
export default {
  props: ['user'],
  computed: {
    avatarStyle () {
      return this.user && {
        backgroundColor: this.user.color
      }
    }
  }
}
</script>
