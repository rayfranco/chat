<template>
    <md-dialog-prompt
      v-model="username"
      :md-active="true"
      :md-input-max-length="15"
      :md-backdrop="false"
      :md-close-on-esc="false"
      :md-click-outside-to-close="false"
      :md-cancel-text="null"
      md-input-placeholder="Your nickname"
      md-title="Login"
      md-confirm-text="Connect"
      @md-confirm="onFormSubmit"/>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    onFormSubmit () {
      console.log(this.username)
      if (this.username.length > 0) {
        this.$emit('submit', this.username)
      } else {
        // Display error?
      }
    }
  }
}
</script>
