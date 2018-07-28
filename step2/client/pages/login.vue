<template lang='pug'>
el-card.login-card
  el-form(:label-position="'top'", :model="loginForm")
    el-form-item(label="名前")
      el-input(v-model="loginForm.name")
    el-form-item.text-center
      el-button(@click="login") ログイン
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        name: ''
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch('user/login', this.loginForm).then((data) => {
        this.$router.push('/')
      });
    }
  }
}
</script>
<style lang='sass'>
.login-card
  margin: 80px auto
  width: 380px
.text-center
  text-align: center
</style>
