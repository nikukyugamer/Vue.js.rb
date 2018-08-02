<template lang='pug'>
.card
  el-tabs(type="border-card" stretch)
    el-tab-pane(label="編集")
      el-form.article-form(:model="articleForm")
        el-form-item
          el-input(v-model="articleForm.body" type="textarea" :rows="4")
        el-form-item
          el-button.submit-button(type='primary' @click.native='createArticle') 投稿
    el-tab-pane(label="プレビュー")
      markdown(:source='articleForm.body')

</template>
<script>
import { mapState } from 'vuex'
import Markdown from '~/components/Markdown.vue'

export default {
  components: {
    Markdown
  },
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
