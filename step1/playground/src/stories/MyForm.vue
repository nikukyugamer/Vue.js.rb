<template>
<div>
  <form @submit.prevent="onSubmit">
    <input type="text">
    <button type='submit'>リロードしない</button>
  </form>
  </hr>
  <form @submit="onSubmit">
    <input type="text">
    <button type='submit'>リロードする</button>
  </form>
</div>
</template>

<script>

export default {
  methods: {
    onSubmit() {
      alert("submit!")
    }
  }
};
</script>
