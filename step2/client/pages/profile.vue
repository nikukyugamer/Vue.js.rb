<template lang='pug'>
el-card
  h2 プロフィール
  el-form(:model="currentUser")
    el-form-item(label="名前")
      p {{currentUser.name}}
    el-form-item(label="アバター")
      img(:src="currentUser.image_url" width='128' height='128')
    el-form-item(label="自己紹介")
      el-input(type="textarea" v-model="currentUser.biography")
    el-form-item
      el-button(@click.native="submit" type='primary') 更新
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      currentUser: state => state.user.currentUser
    })
  },
  methods: {
    submit() {
      this.$store.dispatch('user/updateProfile', {biography: this.currentUser.biography }).then((data) => {
        console.log("更新しました")
      }).catch((e) => {
        console.log("更新に失敗しました")
      })
    }
  }
}
</script>
<style lang='sass'>

</style>
