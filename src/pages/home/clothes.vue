<template>
    <div>
      <!--商品列表-->

      <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
      <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
      <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
      <div style="width: 100%;text-align: center">敬请开发...</div>
    </div>
</template>

<script>
  import ShowWrapGoods from '../../components/ShowWrapGoods.vue'
  export default {
    name: '',
    components: {
      ShowWrapGoods
    },
    data() {
      return {
        showWrapGoodsDatas: {
          "logo": require('../../assets/images/home/logo.png'),
          goodsLists: []
        },
      }
    },
    methods: {},
    mounted: function () {

    }
  }
</script>

<style>

</style>
