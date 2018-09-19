<template>
  <div class="order-list">
    <!--返回按钮-->
    <mt-header fixed title="提交订单">
      <div @click="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <!--地址-->
    <div class="address">
      <div><i style="font-size: 1.6rem;padding: 0 10px" class="fa fa-map-marker" aria-hidden="true"></i></div>
      <div>
        <div style="display:flex;justify-content: space-between">
          <div>小明</div>
          <div>13899213450</div>
        </div>
        <div>收货地址：北京市朝阳区来广营甲一号朝来科技园18好院3号楼</div>
      </div>
      <div><i style="font-size: 2rem;padding: 0 10px" class="fa fa-angle-right" aria-hidden="true"></i></div>
    </div>
    <!--信封线-->
    <div class="envelope"></div>
    <!--订单-->
    <div style="background: white;margin: 10px 0;" v-for="(item, index) in shoppingCartDatas">
      <div style="padding: 10px">
        商品{{ index + 1 }}
      </div>
      <div style="display: flex;background: #fafafa">
        <div style="">
          <img style="width: 120px;height: 120px;margin: 10px" :src="photo.url" v-for="photo in item.smallModelPhoto" />
        </div>
        <div style="padding: 10px">
          <div style="font-size: .9rem">{{item.productName}}[交易快照]</div>
          <div style="color:#a2a2a2;font-size: .8rem">颜色分类：{{item.productColor}} 尺寸：{{item.productSize}}
          </div>
          <div style="color:#f7a755;font-size: .8rem">发货时间：卖家承诺72小时</div>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="color:red;font-size: 1.2rem">¥{{(item.productRate * item.productPrice).toFixed(2)}}</div>
            <div>x{{item.productQuantity}}</div>
          </div>
        </div>
      </div>
      <div>
        <mt-cell title="配送方式" is-link value="快递免邮"></mt-cell>
        <mt-cell title="运费险投保须知">
          <span><i style="font-size: 1.4rem;" class="fa fa-question-circle" aria-hidden="true"></i></span>
        </mt-cell>
        <mt-cell title="买家留言" value="选填：填写内容已和卖家协商确认"></mt-cell>
        <mt-cell title="">
          <span style="color: #000;font-size: .8rem">共{{item.productQuantity}}件商品 小记：<span
            style="color: red;font-size: 1rem">¥{{(item.productQuantity * item.productRate * item.productPrice).toFixed(2)}}元</span></span>
        </mt-cell>
      </div>

    </div>

    <!--去付款-->
    <div class="pay">
      <div>合计金额:<span style="margin:0 10px;color: red;font-size: 1.2rem">¥{{total}}</span></div>
      <div class="btn" @click="payOrderList">
        去付款
      </div>
    </div>
    <div style="background: #f3f3f3;height: 10px"></div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        shoppingCartDatas: [],
        total: 0,
      }
    },
    methods: {
      back(){
        this.$router.back();//返回上一层
      },
      // 付款
      payOrderList(){
        var that = this;
        var params = {
          name: "小明",
          phone: "15992344221",
          address: "北京市朝阳区来广营甲一号朝来科技园18好院3号楼",
          openId: "oTgZpwU0PXwHZXueju_xLi7g4OOo",
          items: this.shoppingCartDatas.map(function (ele) {
            return {productId: ele.productId, productQuantity: ele.productQuantity}
          })
        }
        that.$http.post('buyer/order/create', params).then(function (res) {
          console.log(res)
          // TODO 唤起微信支付
        })



      }
    },
    mounted: function () {
      window.scroll(0, 0);
      this.shoppingCartDatas = this.$route.params.shoppingCartData;
      var total = 0
      this.shoppingCartDatas.forEach(function (ele) {
        total += ele.productQuantity * ele.productPrice * ele.productRate;
      })
      this.total = total.toFixed(2);
    }
  }
</script>

<style lang="scss" scoped>

  .mint-header {
    background-color: #000000;

  }

  .order-list {
    margin-top: 6vh;
    margin-bottom: 8vh;
    .address {
      display: flex;
      align-items: center;
      padding: 10px 0;
    }
    .envelope {
      width: 100%;
      height: 2px;
      box-sizing: border-box;
      background: linear-gradient(45deg, #bf8e6b 12.5%, #fbfaf5 12.5%, #fbfaf5 25%, #5590d6 25%, #5590d6 37.5%, #fbfaf5 37.5%, #fbfaf5 50%, #f25953 50%, #f25953 62.5%, #fbfaf5 62.5%, #fbfaf5 75%, #5590d6 75%, #5590d6 87.5%, #fbfaf5 87.5%, #fbfaf5 100%);
      background-size: 50px 50px;
    }
    .pay {
      width: 100vw;
      height: 8vh;
      background: white;
      position: fixed;
      bottom: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .btn {
        background: black;
        width: 35%;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        color: white;
      }
    }
  }


</style>
