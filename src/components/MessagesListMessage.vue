<template>
  <md-card>
    <md-card-header>
      <md-avatar
        class="md-primary"
        :class="{ 'md-avatar-icon': !message.user.avatar }">
        <template v-if="message.user.avatar">
          <img :src="message.user.avatar">
        </template>
        <template v-else>
          {{ message.user.username[0] }}
        </template>
      </md-avatar>
      <div class="md-title">{{ message.user.username }}</div>
    </md-card-header>
    <md-card-content>
      {{ message.text }}
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: ['message']
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
