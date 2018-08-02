<script>
import VueMarkdown from 'vue-markdown'
export default {
  extends: VueMarkdown,
  components: {
    VueMarkdown
  },
  mounted () {
    this.$el.classList.add('markdown-body')
  }
}
</script>
<style lang='sass'>

.markdown-body
  // Markdownのスタイル
</style>
