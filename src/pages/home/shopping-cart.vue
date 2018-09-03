<template>
  <div>
    <cart :sourceData="1"></cart>
  </div>
</template>

<script>
  import cart from '../cart/cart.vue'
  export default {
    name: '',
    components: {
      cart
    },
    data() {
      return {
        source:""
      }
    },
    methods: {},
    mounted: function () {

    }
  }
</script>

<style>

</style>
