<template>
  <span>{{text}}</span>
</template>

<script>
export default {
  data() {
    return {
      text: '初期状態'
    }
  },
  created() {
    this.text = 'created'
  }
};
</script>
