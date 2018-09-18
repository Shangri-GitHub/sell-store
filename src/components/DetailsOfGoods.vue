<template>
  <div class="detail-goods">
    <!--返回按钮-->
    <mt-header fixed title="">
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button slot="right">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
      </mt-button>
    </mt-header>
    <!--详情-->
    <div class="show-big-photo">
      <img class="item" :src="item.url" v-for="item in detailsOfGoodslistData.superModelPhoto">
    </div>
    <!--价格-->
    <div style="width: 96%;margin:0 auto">
      <div class="detail-price">
        <div style="font-size: 1.8rem">¥{{detailsOfGoodslistData.productPrice * detailsOfGoodslistData.productRate}}
        </div>
        <div class="sale">
          <span>优惠促销</span>
        </div>
        <div class="vip">
          ¥{{detailsOfGoodslistData.productPrice}}
          <span class="sign"><span style="color: white">市场价</span></span>
        </div>
      </div>
      <!--优惠券-->
      <div class="couponing"><i class="fa fa-archive" aria-hidden="true"></i>您有一张20元的优惠券，下单即可使用</div>
      <!--描述-->
      <div class="describe">
        {{detailsOfGoodslistData.productDescription}}
      </div>
      <!--图片-->
      <div class="photo">
        <img :src="item.url" alt="" v-for="item in detailsOfGoodslistData.detailPhoto">
      </div>
      <footer>
        <div style="">温馨提示</div>
        <p class="footer">由于<span>部分品牌商品</span>由于包装<span>更新较为频繁</span>，因此您收到的商品<span>可能与商品详情页面不完全一致，</span>
          平台商品页面图片及描述仅供参考，<span>请您以最终收到的实际货品为准。</span>同时我们会尽量及时更新图片，为您带来不便敬请谅解。
        </p>
        <div style="">价格说明</div>
        <p class="footer">
          <span>划线价格：</span>指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品曾经展示过的销售价等<span>并非原价，</span>仅供参考。
        </p>
        <p class="footer">
          <span>未划线价格：</span>指商品的<span>实时标价，</span>不因表述等差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等变化最终以订单结算价为准。
        </p>
      </footer>
    </div>
    <shopping-cart :cartNums="cartNum" :shoppingCartData="detailsOfGoodslistData" @showCartNums = "showCartNums"></shopping-cart>
  </div>
</template>

<script>
  import ShoppingCart from '../components/ShoppingCart.vue'
  export default {
    name: '',
    components: {
      ShoppingCart,
    },
    data() {
      return {
        cartNum:{},
        detailsOfGoodslistData: {},
      }
    },
    methods: {
      back(){
        this.$router.back();//返回上一层
      },
      showCartNums(){
        /**
         * 出现的问题，改变字组件的值，报错props里的值已经声明过，因为是双向绑定的
         * 子组件呼唤父组件重新传值
         */
         var that = this;
        that.$http.get('seller/cart/list', {}).then(function (res) {
          that.cartNum= res.data.data;
        })
      }
    },
    mounted: function () {
      // 跳转到页面的顶端
      window.scroll(0, 0);
    },
    beforeMount: function () {
      var that = this;

      // TODO 购物车的传值
      this.showCartNums();
      /**
       * 根据商品的id查看详情
       */
      // 购物车的数目
      that.$http.post('seller/product/findProductById', {
        productId: this.$route.params.id,
      }).then(function (res) {
        that.detailsOfGoodslistData = res.data.data;
      })


    }
  }
</script>

<style lang="scss" scoped>
  .detail-goods {
    background: #ffffff;
    margin-bottom: 10vh;

    .footer {
      background: #f3f3f3;
      font-size: .8rem;
      span {
        font-weight: 500;
      }
    }
    .photo img {
      width: 100%;
    }
    .describe {
      font-weight: 700;
      font-size: 1rem;
      margin: 15px auto;
    }
    .couponing {
      background: #f3f3f3;
      margin: 0 auto;
    }
    .show-big-photo {
      margin-top: 40px;
      .item {
        width: 100vw;
      }
    }
    .detail-price {
      padding: 15px 10px;
      display: flex;
      font-size: .7rem;
      .sale {
        margin: 6px;
        color: #d03129;
        width: 45px;
        height: 15px;
        border: 1px solid #d03129;
      }
      .vip {
        margin: 6px;
        color: #cca354;
        font-size: .8rem;
        .sign {
          width: 100px;
          height: 20px;
        }
      }
      .time {
        color: #858585;
        margin: 6px;
      }
    }

  }


</style>
