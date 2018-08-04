<template lang='pug'>
.article-list
  .article-items
    el-card.article-item(v-for="article in articles" :key="article.id" shadow="never")
      markdown {{article.body}}
      markdown {{shownDateTime(article.created_at)}}
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
  },
  methods: {
    shownDateTime(utcDateTime) {
      let date          = new Date(utcDateTime);

      // 力技です
      let year          = date.getFullYear();
      let month         = this.twoDigitsZeroPadding(date.getMonth() + 1);
      let day           = this.twoDigitsZeroPadding(date.getDate());
      let hour          = this.twoDigitsZeroPadding(date.getHours());
      let minute        = this.twoDigitsZeroPadding(date.getMinutes());
      let second        = this.twoDigitsZeroPadding(date.getSeconds());
      let dayOfWeek     = date.getDay();
      let dayOfWeekStr  = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];

      return `投稿日時: ${year}/${month}/${day}(${dayOfWeekStr}) ${hour}:${minute}:${second}`;
    },
    twoDigitsZeroPadding(value) {
      return ("0" + value).slice(-2);
    }
  }
}
</script>
<style lang='sass'>
.article-list
  .article-item
    margin: 8px 0
</style>
