<template lang='pug'>
el-row(:gutter="20" style='width: 100%;')
  el-col(:span="6")
    h3 グループ一覧
    GroupList
  el-col(:span="18")
    .article-container(v-if="currentGroup")
      h3 {{currentGroup.name}}
      ArticleForm
      ArticleList
</template>
<script>
import GroupList from '~/components/GroupList.vue'
import ArticleList from '~/components/ArticleList.vue'
import ArticleForm from '~/components/ArticleForm.vue'
import { mapState } from 'vuex'
export default {
  components: {
    GroupList,
    ArticleList,
    ArticleForm
  },
  computed: {
    ...mapState({
      currentGroup: state => state.group.currentGroup
    })
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
