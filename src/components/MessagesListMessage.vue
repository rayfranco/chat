<template>
  <li>
    {{ message.user.username }}: {{ message.text }}
  </li>
</template>

<script>
export default {
  props: ['message']
}
</script>
