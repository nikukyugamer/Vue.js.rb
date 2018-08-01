<template>
  <div class="my-article-list">
    <h3>記事一覧</h3>
    <my-article v-for="article in articles" :views='article.views'>
      <template slot="title">{{article.title}}</template>
      {{article.body}}
    </my-article>
  </div>
</template>

<script>
import MyArticle from './Article.vue'
export default {
  components: {
    MyArticle
  },
  data() {
    return {
      articles: [
        {
          title: '8月1日の日記',
          body: '今日は、カレーを食べました。',
          views: 123
        }, {
          title: '8月2日の日記',
          body: '今日は、寿司を食べました。',
          views: 456
        }
      ]
    }
  }
};
</script>

<style>
</style>
