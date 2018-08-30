<template>
  <div class="home">
    <swipper :imgDatas="imgDatas"></swipper>
    <!--热图榜-->
    <hot4-panel :hot4PanelDatas="hot4PanelDatas"></hot4-panel>
    <!--商品列表-->
    <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
    <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
    <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
  </div>
</template>

<script>
  import Swipper from '../../components/swipper.vue'
  import Hot4Panel from '../../components/Hot4Panel.vue'
  import ShowWrapGoods from '../../components/ShowWrapGoods.vue'
  export default {
    name: '',
    components: {
      Swipper,
      Hot4Panel,
      ShowWrapGoods
    },
    data() {
      return {
        value: "",
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
        hot4PanelDatas: {
          "1": require('../../assets/images/hot4Panel/mac.jpg'),
          "2": require('../../assets/images/hot4Panel/food.jpg'),
          "3": require('../../assets/images/hot4Panel/cup.jpg'),
          "4": require('../../assets/images/hot4Panel/girl.jpg')
        },
        imgDatas: [
          {
            id: '2',
            path: require('../../assets/images/banner/clothes.jpg')
          }, {
            id: '0',
            path: require('../../assets/images/banner/water.png')
          }, {
            id: '1',
            path: require('../../assets/images/banner/coffee.jpg')
          },],
      }
    },
    methods: {
      fun(){
        this.$router.push("/detailsofgoods")
      }
    },
    mounted: function () {

    }
  }
</script>

<style lang="css" scoped>
  .home {
    /*height: 78vh;*/
    /*overflow: auto;*/
  }
</style>
