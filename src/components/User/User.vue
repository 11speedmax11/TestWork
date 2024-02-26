<template>
  <div class="user">
    <div class="user__info">

      <div class="user__field" v-for="user in userData" :key="user">
        <span class="label">{{ user[0] }}:</span>
        <span>{{ user[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "index.scss"
</style>
