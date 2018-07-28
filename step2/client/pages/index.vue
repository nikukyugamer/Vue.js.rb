<template lang='pug'>
div
</template>
<script>
export default {

  methods: {
    async login() {
      await this.$store.dispatch('user/login', {
        username: this.formUsername
      })
    }
  }
}
</script>
<style lang='sass'>
</style>
