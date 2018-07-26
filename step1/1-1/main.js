Vue.component('my-button',{
  template:'<button v-on:click="handleClick">{{message}}</button>',
  data: function() {
    return {
      message: 'Hello Vue.js'
    }
  },
  methods: {
    handleClick() {
      alert('こんにちは');
    }
  }
})

var app = new Vue({
  el: '#app'
});
