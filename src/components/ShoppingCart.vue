<template>
  <div>
    <!--购物车底部条-->
    <div class="cart">
      <div class="cart-item1">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        <div>
          关注
        </div>
      </div>
      <div class="cart-item1" @click="shopingCartCount">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        <div>
          购物车
        </div>
        <mt-badge size="small" type="error">10</mt-badge>
      </div>
      <div class="cart-item2" @click="getPopupVisible(1)">
        加入购物车
      </div>
      <div class="cart-item2" style="background: #f31b19" @click="getPopupVisible(2)">立即购买</div>
    </div>
    <!--弹框-->
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <div class="popup">
        <div style="display: flex;border-bottom: 1px solid #c7c7c7;height: 13vh">
          <img class="popup-photo"/>
          <div>
            <div class="pupop-price"> ¥ 632～3333</div>
            <div class="pupop-store">库存 1002件</div>
            <div class="pupop-select">请选择分类 尺码</div>
            <div><i @click="popupVisible=false" class="fa fa-times close" aria-hidden="true"></i></div>
          </div>
        </div>
        <div style="border-bottom: 1px solid #c7c7c7;">
          <div style="padding: 10px;color: #6b6b6b">
            颜色
          </div>
          <div>
            <chooser
              :selections="colorLists"
              @on-change="onParamChange('period', $event)">
            </chooser>
          </div>
        </div>
        <div style="border-bottom: 1px solid #c7c7c7;">
          <div style="padding: 10px;color: #6b6b6b">
            尺码
          </div>
          <div>
            <chooser
              :selections="sizeLists"
              @on-change="onParamChange('period', $event)">
            </chooser>
          </div>
        </div>
        <div
          style="border-bottom: 1px solid #c7c7c7;display: flex;justify-content: space-between;align-items: center;height: 8vh;">
          <div style="padding-left: 10px;color: #6b6b6b">
            数量
          </div>
          <div style="display: flex;align-items: center;padding-right: 10px">
            <counter @on-change="onParamChange('buyNum', $event)"></counter>
          </div>
        </div>
        <div style="padding:  10px;">
          <div class="button" @click="shoppingCartHandler(popupButtonText.id)">{{popupButtonText.label}}</div>
        </div>

      </div>
    </mt-popup>


  </div>
</template>

<script>
  import Counter from '../components/base/counter'
  import Chooser from '../components/base/chooser'
  export default {
    name: '',
    components: {
      Counter,
      Chooser
    },
    data() {
      return {
        popupVisible: false,
        colorLists: [{
          label: '188A-05&12337B-05【礼品套盒】',
          value: 0
        }, {
          label: '188A-05&12337B-05【礼品套盒】',
          value: 1
        }, {
          label: '【男款礼品套盒】',
          value: 2
        }, {
          label: '【女款礼品套盒】',
          value: 3
        }],
        sizeLists: [{
          label: 'S',
          value: 0
        }, {
          label: 'X',
          value: 1
        }, {
          label: 'XL',
          value: 2
        }, {
          label: 'XXL',
          value: 3
        }],
        popupButtonText: {
          id: "1",
          label: "加入购物车"
        }
    }
    },
    methods: {
      shopingCartCount(){
        this.$router.push("/shoppingcart");
      },
      onParamChange (attr, val) {
//        this[attr] = val
        // this.getPrice()
//        console.log(this[attr], attr)
      },
      getPopupVisible(e){
        /**
         * 1 是加入购物车 2 是立即购买
         * @type {boolean}
         */
        this.popupVisible = !this.popupVisible;
        if (e == 1) {
          this.popupButtonText = {
            id: "1",
            label: "加入购物车"
          };
        } else if (e == 2) {
          this.popupButtonText = {
            id: "2",
            label: "确定"
          };
        }
      },
      shoppingCartHandler(id){
        this.popupVisible = false;
        /**
         * 1 点的购物车，显示加入成功
         * 2 是确定 跳转到 订单详情页去支付
         */
        if (id == "1") {
            // TODO 购物车实现
        } else if (id == "2") {
          this.$router.push("/orderlistpage")
        }


      }
    },
    mounted: function () {

    }
  }
</script>

<style lang="scss" scoped>
  .mint-badge.is-size-small {
    padding: 1px 6px;
    position: absolute;
    top: 0;
  }

  .popup {
    width: 100vw;
    background: white;
    font-size: 0.8rem;
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 6vh;
      background: #000000;
      color: white
    }
    .popup-photo {
      width: 30vw;
      height: 30vw;
      background: red;
      position: relative;
      top: -6vh;
      left: 4vh;
    }
    .pupop-price {
      position: relative;
      left: 11vw;
      font-size: 1.4rem;
      color: red;
    }
    .pupop-store {
      position: relative;
      left: 11vw;
      font-size: 0.8rem;
      color: #6d6d6d;
    }
    .pupop-select {
      position: relative;
      left: 10vw;
      font-size: .9rem;
      color: #3c3c3c;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.5rem;
      color: #6d6d6d;
    }
  }

  .cart {
    width: 100vw;
    height: 8vh;
    background: white;
    position: fixed;
    bottom: 0;
    z-index: 2;
    text-align: center;
    display: flex;
    align-items: center;
    .cart-item1 {
      position: relative;
      width: 15%;
      font-size: .8rem;
      i {
        font-size: 1.6rem;
      }
    }
    .cart-item2 {
      width: 35%;
      color: white;
      font-size: 1.1rem;
      background: #000000;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }
</style>
