<template lang='pug'>
.article-list
  .article-items
    el-card.article-item(v-for="article in articles" :key="article.id" shadow="never")
      markdown {{article.body}}
</template>
<script>
import { mapState } from 'vuex'
import Markdown from '~/components/Markdown.vue'

export default {
  components: {
    Markdown
  },
  computed: {
    ...mapState({
      articles: state => state.article.articles
    })
  }
}
</script>
<style lang='sass'>
.article-list
  .article-item
    margin: 8px 0
</style>
