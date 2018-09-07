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
      <img class="item" :src="detailsOfGoodslistData.photo.supermodelPhoto">
    </div>
    <!--价格-->
    <div style="width: 96%;margin:0 auto">
      <div class="detail-price">
        <div style="font-size: 1.8rem">¥{{detailsOfGoodslistData.price}}</div>
        <div class="sale">
          <span>优惠促销</span>
        </div>
        <div class="vip">
          ¥{{detailsOfGoodslistData.marketPrice}}
          <span class="sign"><span style="color: white">市场价</span></span>
        </div>
      </div>
      <!--优惠券-->
      <div class="couponing"><i class="fa fa-archive" aria-hidden="true"></i>您有一张20元的优惠券，下单即可使用</div>
      <!--描述-->
      <div class="describe">
        {{detailsOfGoodslistData.description}}
      </div>
      <!--图片-->
      <div class="photo">
        <img :src="item.src" alt="" v-for="item in detailsOfGoodslistData.photo.detailphoto">
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
    <shopping-cart :shoppingCartData=detailsOfGoodslistData></shopping-cart>
  </div>
</template>

<script>
  import ShoppingCart from '../components/ShoppingCart.vue'
  export default {
    name: '',
    components: {
      ShoppingCart
    },
    data() {
      return {
        detailsOfGoodslistData: {
          photo: {
            supermodelPhoto: "",
            detailphoto: ""
          }
        },
      }
    },
    methods: {
      back(){
        this.$router.back();//返回上一层
      }
    },
    mounted: function () {
      // 跳转到页面的顶端
      window.scroll(0, 0);
      // 详情参数

    },
    beforeMount: function () {


      // TODO 根据商品的id查看详情

      var goodsList = {
        "1": {
          id: "1",
          name: "阿迪达斯三叶草短袖",
          price: "100.00",
          marketPrice: "120.00",
          stock: "10",
          description: "热价 中长款格子衬衫连衣裙女秋装2018新款长秋suykol少女裙子",
          photo: {
            smallmodelPhoto: require('../assets/images/home/adidas-shirt/small.png'),
            supermodelPhoto: require('../assets/images/home/adidas-shirt/adidas.jpg'),
            detailphoto: [{
              id: 0,
              name: "",
              src: require('../assets/images/home/adidas-shirt/1.jpg'),
            }, {
              id: 1,
              name: "",
              src: require('../assets/images/home/adidas-shirt/2.jpg'),
            }, {
              id: 2,
              name: "",
              src: require('../assets/images/home/adidas-shirt/bottom.png')
            }]
          }
        },
        "2": {
          id: "2",
          name: "奥氏 春夏季新款专业健身房背心女性感显瘦跑步运动瑜伽服套装",
          price: "49.00",
          marketPrice: "59.00",
          stock: "10",
          description: "奥氏 春夏季新款专业健身房背心女性感显瘦跑步运动瑜伽服套装",
          photo: {
            smallmodelPhoto: require('../assets/images/home/yoga/yogasmall.jpg'),
            supermodelPhoto: require('../assets/images/home/yoga/bigyoga.jpg'),
            detailphoto: [{
              id: 0,
              name: "",
              src: require('../assets/images/home/yoga/yoga1.jpg')
            }, {
              id: 1,
              name: "",
              src: require('../assets/images/home/yoga/yoga2.jpg')
            }, {
              id: 2,
              name: "",
              src: require('../assets/images/home/yoga/yoga3.jpg')
            },{
              id: 2,
              name: "",
              src: require('../assets/images/home/adidas-shirt/bottom.png')
            }]
          }
        }
      }
      this.detailsOfGoodslistData = goodsList[this.$route.params.id];

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
      background: wheat
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
          background: #cca354;
        }
      }
      .time {
        color: #858585;
        margin: 6px;
      }
    }

  }


</style>
