<template>
  <li>
    {{ user.username }}
  </li>
</template>

<script>
export default {
  props: ['user']
}
</script>
