<template>
  <div>
    ここはヘッダーです。{{header}}
  </div>
</template>


<script>
export default {
  name: 'myheader',
  props: {
    header: String
  },
  created: function () {
    //   this.$parent.msg = 'child!!!';
  }
}
</script>