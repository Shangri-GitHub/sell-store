<template>
  <div class="home">
    <!--轮播图-->
    <swipper :imgDatas="imgDatas"></swipper>
    <!--热图榜-->
    <hot4-panel :hot4PanelDatas="hot4PanelDatas"></hot4-panel>
    <!--商品列表-->
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
        showWrapGoodsDatas: {
          "logo": require('../../assets/images/home/logo.png'),
          goodsLists: [{
            id: "1",
            name: "阿迪达斯三叶草短袖",
            price: "100.00",
            marketPrice: "120.00",
            stock: "10",
            description:"热价 中长款格子衬衫连衣裙女秋装2018新款长秋suykol少女裙子",
            photo:{
              smallmodelPhoto: require('../../assets/images/home/adidas-shirt/small.png'),
              supermodelPhoto:require('../../assets/images/home/adidas-shirt/adidas.jpg'),
              detailphoto:[{
                id:0,
                name:"",
                src: require('../../assets/images/home/adidas-shirt/1.jpg'),
              },{
                id:1,
                name:"",
                src:"http://peidwdhmp.bkt.clouddn.com/T2.jpg"
              },{
                id:2,
                name:"",
                src:"http://peidwdhmp.bkt.clouddn.com/bottom.png"
              }]
            },
          },{
            id: "2",
            name: "奥氏 春夏季新款专业健身房背心女性感显瘦跑步运动瑜伽服套装",
            price: "49.00",
            marketPrice: "59.00",
            stock: "10",
            description:"奥氏 春夏季新款专业健身房背心女性感显瘦跑步运动瑜伽服套装",
            photo:{
              smallmodelPhoto: require('../../assets/images/home/yoga/yogasmall.jpg'),
              supermodelPhoto:require('../../assets/images/home/yoga/bigyoga.jpg'),
              detailphoto:[{
                id:0,
                name:"",
                src:require('../../assets/images/home/yoga/yoga1.jpg')
              },{
                id:1,
                name:"",
                src:require('../../assets/images/home/yoga/yoga2.jpg')
              },{
                id:2,
                name:"",
                src:require('../../assets/images/home/yoga/yoga3.jpg')
              }]
            },
          }, /*{
            id: "3",
            name: "阿迪达斯三叶草短袖",
            price: "100.88",
            marketPrice: "120.00",
            stock: "10",
            description:"热价 中长款格子衬衫连衣裙女秋装2018新款长秋suykol少女裙子",
            photo:{
              smallmodelPhoto: require('../../assets/images/home/3.png'),
              supermodelPhoto:"http://peidwdhmp.bkt.clouddn.com/adidas.jpg",
              detailphoto:[{
                id:0,
                name:"",
                src:"http://peidwdhmp.bkt.clouddn.com/T1.jpg"
              },{
                id:1,
                name:"",
                src:"http://peidwdhmp.bkt.clouddn.com/T2.jpg"
              },{
                id:2,
                name:"",
                src:"http://peidwdhmp.bkt.clouddn.com/bottom.png"
              }]
            },
          }, {
            id: "4",
            name: "阿迪达斯三叶草短袖",
            price: "100.88",
            marketPrice: "120.00",
            stock: "10",
            description:"热价 中长款格子衬衫连衣裙女秋装2018新款长秋suykol少女裙子",
            photo:{
              smallmodelPhoto: require('../../assets/images/home/4.png'),
              supermodelPhoto:"http://peidwdhmp.bkt.clouddn.com/adidas.jpg",
              detailphoto:[{
                id:0,
                name:"",
                src:"http://peidwdhmp.bkt.clouddn.com/T1.jpg"
              },{
                id:1,
                name:"",
                src:"http://peidwdhmp.bkt.clouddn.com/T2.jpg"
              },{
                id:2,
                name:"",
                src:"http://peidwdhmp.bkt.clouddn.com/bottom.png"
              }]
            },
          }*/]
        },
        hot4PanelDatas: {
          "1": require('../../assets/images/hot4Panel/1.jpg'),
          "2": require('../../assets/images/hot4Panel/2.jpg'),
          "3": require('../../assets/images/hot4Panel/3.jpg'),
          "4": require('../../assets/images/hot4Panel/4.jpg')
        },
        imgDatas: [
          {
            id: '2',
            path: require('../../assets/images/banner/1.jpg')
          }, {
            id: '0',
            path: require('../../assets/images/banner/water.png')
          }, {
            id: '1',
            path: require('../../assets/images/banner/coffee.jpg')
          },],
      }
    },
    methods: {},

    mounted: function () {
//      console.log(1)
    },
    created:function () {
      // 加载视图前让nav-tab显示出来，离开隐藏标题
//      this.$parent.isShow = true;
    },
    destroyed: function () {
    },


  }
</script>
<style lang="scss" scoped>
  .home {
    position: relative;
    top: 14vh;
    margin-bottom: 8vh;
  }
</style>
