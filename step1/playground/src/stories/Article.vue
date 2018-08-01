<template>
  <div class="my-article">
    <div>
      <h4><slot name="title"></slot></h4>
      <small>👀 {{views}}</small>
    </div>
    <slot></slot>

  </div>
</template>

<script>
export default {
  props: {
    views: Number
  }
};
</script>

<style>
.my-article {
  border: 1px solid #aaa;
  padding: 16px;
}
.my-article h4 {
  margin: 4px;
}
</style>
