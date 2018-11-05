<template>
  <div class="showMoreProducts">
    <!--返回按钮-->
    <mt-header fixed :title="title">
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    <!--商品展示列表-->
    <show-wrap-goods :showWrapGoodsDatas="showWrapGoodsDatas"></show-wrap-goods>
  </div>
</template>

<script>
  let moment = require('moment');
  import ShowWrapGoods from './GoodsLists/ShowWrapGoodsWithThree.vue'

  export default {
    name: '',
    components: {
      ShowWrapGoods,
    },
    data() {
      return {
        title: "",
        showWrapGoodsDatas: {
          goodsLists: [],
        },
      }
    },
    methods: {
      back(){
        this.$router.back();//返回上一层
      }
    },
    mounted: function () {
      var that = this;
      if (this.$route.params.type == "today") {
        this.title = "今日优选";
        /**
         * 获取今日优选
         * 暂时交易量比较少，开启的是查询一年的量
         */
        that.$http.post('seller/productDetail/findOrderDetailByCondition', {
          startDate: moment().startOf('year').format(),
          endDate: moment().endOf('year').format(),
        }).then(function (res) {
          if (res.data.code == 0) {
            that.showWrapGoodsDatas.goodsLists = res.data.data;
          }
        })
      } else if (this.$route.params.type == "withLine") {
        this.title = "万圣节热卖";
        that.$http.get('buyer/product/list', {}).then(function (res) {
          that.showWrapGoodsDatas.goodsLists = res.data.data[0].products;
        })
      } else if (this.$route.params.type == "week") {
        this.title = "本周热卖";
        that.$http.post('seller/productDetail/findOrderDetailByCondition', {
          startDate: moment().startOf('month').format(),
          endDate: moment().endOf('month').format(),
        }).then(function (res) {
          if (res.data.code == 0) {
            that.showWrapGoodsDatas.goodsLists = res.data.data;
          }
        })
      } else if (this.$route.params.type == "WithThree") {
        this.title = "瑜伽服装大促销";
        that.$http.get('buyer/product/list', {}).then(function (res) {
          that.showWrapGoodsDatas.goodsLists = res.data.data[0].products;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .showMoreProducts {
    position: relative;
    top: 7vh;
    background: #f3f3f3;
    margin-bottom: 10vh;
  }
</style>
