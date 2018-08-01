<template>
  <span>{{createdAt | moment}}</span>
</template>

<script>
import moment from 'moment'
moment.lang('ja')
export default {

  filters: {
    moment: function (date) {
      return moment(date).fromNow()
    }
  },
  data() {
    return {
      createdAt: null
    }
  },
  created() {
    this.createdAt = new Date(new Date() - 12 * 3600 * 1000)
  }
};
</script>
