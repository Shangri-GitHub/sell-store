<template>
  <div class="home">
    <!--轮播图-->
    <swipper :imgDatas="imgDatas"></swipper>
    <!--热图榜-->
    <hot4-panel :hot4PanelDatas="hot4PanelDatas"></hot4-panel>
    <!--商品列表-->
    <show-wrap-goods-with-single v-if="showWrapGoodsWithSingleDatas.length>0"
                                 :showWrapGoodsWithSingleDatas="showWrapGoodsWithSingleDatas"></show-wrap-goods-with-single>
    <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
    <show-wrap-goods-with-two :showWrapGoodsWithTwoDatas="showWrapGoodsWithTwoDatas" v-if="showWrapGoodsWithTwoDatas.length>0"></show-wrap-goods-with-two>
    <show-goods-with-line v-if="showGoodsWithLineDatas.length>0"
                          :showGoodsWithLineDatas="showGoodsWithLineDatas"></show-goods-with-line>
  </div>
</template>
<script>
  let moment = require('moment');
  import Swipper from '../../components/swipper.vue'
  import Hot4Panel from '../../components/Hot4Panel.vue'
  import ShowWrapGoods from '../../components/GoodsLists/ShowWrapGoodsWithThree.vue'
  import ShowWrapGoodsWithSingle from '../../components/GoodsLists/ShowWrapGoodsWithSingle.vue'
  import ShowWrapGoodsWithTwo from '../../components/GoodsLists/ShowWrapGoodsWithTwo.vue'
  import ShowGoodsWithLine from '../../components/GoodsLists/ShowGoodsWithLine.vue'
  export default {
    name: '',
    components: {
      Swipper,
      Hot4Panel,
      ShowWrapGoods,
      ShowWrapGoodsWithSingle,
      ShowWrapGoodsWithTwo,
      ShowGoodsWithLine
    },
    data() {
      return {
        showWrapGoodsDatas: {
          "logo": require('../../assets/images/home/logo.png'),
          goodsLists: [],
        },
        showGoodsWithLineDatas: [],
        showWrapGoodsWithSingleDatas: [],
        showWrapGoodsWithTwoDatas: [],
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
    created() {
      var openId = this.$route.query.openId;
      if (openId) {
        this.$cookies.set("openId", openId, 60 * 60 * 1000); //过期时间60分钟
      }
    },
    methods: {},
    mounted: function () {
      var that = this;
      /**
       * 获取首页商品模块
       */
      that.$http.get('buyer/product/list', {}).then(function (res) {
        that.showWrapGoodsDatas.goodsLists = res.data.data[0].products;
        that.showGoodsWithLineDatas = res.data.data[0].products;
      })
      /**
       * 获取今日优选
       * 暂时交易量比较少，开启的是查询一年的量
       */
      that.$http.post('seller/productDetail/findOrderDetailByCondition', {
        startDate: moment().startOf('year').format(),
        endDate: moment().endOf('year').format(),
      }).then(function (res) {
        if (res.data.code == 0) {
          that.showWrapGoodsWithSingleDatas = res.data.data;
        }
      })
      /**
       * 获取本周热卖
       * 暂时交易量比较少，开启的是查询一年的量
       */
      that.$http.post('seller/productDetail/findOrderDetailByCondition', {
        startDate: moment().startOf('month').format(),
        endDate: moment().endOf('month').format(),
      }).then(function (res) {
        if (res.data.code == 0) {
          that.showWrapGoodsWithTwoDatas = res.data.data;
        }
      })


    }
  }
</script>
<style lang="scss" scoped>
  .home {
    position: relative;
    top: 14vh;
    background: #f3f3f3;
    margin-bottom: 8vh;
  }
</style>
