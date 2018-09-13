<template>
  <md-toolbar md-elevation="0" class="md-medium">
    <form action="#" @submit.prevent="onFormSubmit">
      <md-field>
        <label for="input">Your message</label>
        <md-input
          name="input"
          id="input"
          autocomplete="off"
          v-model="input"
          />
      </md-field>
      <md-button class="md-raised md-primary">Send</md-button>
    </form>
  </md-toolbar>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  methods: {
    onFormSubmit () {
      this.$emit('messageSent', this.input)
      this.input = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.md-toolbar
  position fixed
  bottom 0
  right 0
  width calc(100vw - 250px)
form
  align-items center
  align-content center
  display flex
  flex-flow row wrap
  flex 1
.md-field
  flex 1
</style>
