<template lang='pug'>
el-container.app
  el-header.app-header
    TopNav
  el-main.app-main-container
    nuxt
</template>
<script>
import TopNav from '~/components/TopNav.vue'
import { mapState } from 'vuex'

export default {
  components: {
    TopNav
  },
  computed: {
    ...mapState({
      currentUser: state => state.user.currentUser
    })
  }
}
</script>
<style lang='sass'>
html, body
  margin: 0
.app
  margin: 0
  padding: 0
  .app-header
    padding: 0
  .app-main-container
    overflow: visible
</style>
