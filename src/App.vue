<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="stylus">
#app
  padding 64px 0 88px
</style>
