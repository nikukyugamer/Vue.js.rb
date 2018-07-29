<template lang='pug'>
el-row(:gutter="20" style='width: 100%;')
  el-col(:span="6")
    h2.h2 グループ一覧
    GroupList
  el-col(:span="18")
</template>
<script>
import GroupList from '~/components/GroupList.vue'
import { mapState } from 'vuex'
export default {
  components: {
    GroupList
  },
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
