<template lang='pug'>
.article-list
  .article-items
    el-card.article-item(v-for="article in articles" :key="article.id" shadow="never")
      span {{article.body}}
</template>
<script>
import { mapState } from 'vuex'
export default {
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
