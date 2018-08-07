<template>
  <div class="state-class">
    <span style="font-size: 48px;">{{text}}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '初期状態'
    }
  },
  created() {
    this.text = 'created!!!! by created()'
  }
};
</script>

<my-state>
  This could be e.g. documentation for the component.
</my-state>
