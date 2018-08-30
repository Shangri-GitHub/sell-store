<template>
    <div>
      clothes
      <!--商品列表-->
      <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
      <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
      <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
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
          goodsLists: [{
            id: "1",
            photo: require('../../assets/images/home/1.png'),
            name: "阿迪达斯三叶草短袖",
            price: "100.88",
            marketPrice: "120.00",
            stock: "10"
          }, {
            id: "2",
            photo: require('../../assets/images/home/2.png'),
            name: "阿迪达斯三叶草短袖",
            price: "100.88",
            marketPrice: "120.00",
            stock: "10"
          }, {
            id: "3",
            photo: require('../../assets/images/home/3.png'),
            name: "阿迪达斯三叶草短袖",
            price: "100.88",
            marketPrice: "120.00",
            stock: "10"
          }, {
            id: "4",
            photo: require('../../assets/images/home/4.png'),
            name: "阿迪达斯三叶草短袖",
            price: "100.88",
            marketPrice: "120.00",
            stock: "10"
          }]
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
