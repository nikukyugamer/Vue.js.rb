<template>
  <button class="my-button">🐥<slot></slot>🐥</button>
</template>

<script>
export default {
};
</script>

<style>
.my-button {
  border: 1px solid #444;
  color: #444;
  padding: 4px 8px;
  background-color: #fff;
  outline: none;
}
</style>
