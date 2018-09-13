<template>
  <md-list-item>
    <md-avatar class="md-avatar-icon md-primary">{{ user.username[0] }}</md-avatar>
    {{ user.username }}
  </md-list-item>
</template>

<script>
export default {
  props: ['user']
}
</script>
