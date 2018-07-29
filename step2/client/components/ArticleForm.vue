<template lang='pug'>
el-form.article-form(:model="articleForm")
  el-form-item
    el-input(v-model="articleForm.body" type="textarea")
  el-form-item
    el-button.submit-button(type='primary' @click.native='createArticle') 投稿
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      articleForm: {
        name: ''
      }
    };
  },
  computed: {
    ...mapState({
      currentGroup: state => state.group.currentGroup
    })
  },
  methods: {
    createArticle() {
      this.$store.dispatch('article/createArticle', { groupId: this.currentGroup.id, body: this.articleForm.body }).then((data) => {
        this.$store.dispatch('article/fetchArticles', { groupId: this.currentGroup.id })
      });
    }
  }
}
</script>
<style lang='sass'>
.article-form
  .submit-button
    width: 100%
</style>
