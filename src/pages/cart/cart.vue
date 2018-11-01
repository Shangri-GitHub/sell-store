<template>
  <div class="cart">
    <!--返回按钮-->
    <mt-header fixed title="购物车">
      <div @click="back" slot="left">
        <mt-button v-show="this.sourceData==1" icon="back">返回</mt-button>
      </div>
      <mt-button slot="right" @click="edit">{{textFlag ? "编辑" : "完成"}}</mt-button>
    </mt-header>
    <div style="top: 40px;position: relative;margin-bottom: 20vh">
      <!--购物车商品-->
      <div style="background: white;display: flex;margin: 5px 0" v-for="item in items">
        <!--复选框-->
        <div style="align-items: center;display: flex">
          <label class="mint-checklist-label">
          <span class="mint-checkbox" @change="selectOne">
            <input type="checkbox" class="mint-checkbox-input" v-model="item.selectValue"/>
                <span class="mint-checkbox-core"></span>
          </span>
          </label>
        </div>
        <!--图片-->
        <div style="display:flex;align-items: center">
          <img class="item" :src="photo.url" v-for="photo in item.smallModelPhoto">
        </div>
        <div style="padding: 10px 10px 10px 0;width: 100%">
          <div>
            {{item.productName}}
          </div>
          <div style="color: #8a8a8a;font-size: .8rem">
            {{item.productColor + "-" + item.productSize}}
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="color: red;font-size: 1.2rem">¥{{item.price}}<span



              style="color: #8a8a8a;margin-left: 8px;font-size: .9rem">¥{{Number(item.productPrice * item.productRate).toFixed(2)}}</span>
            </div>
            <div>
              <counter :numbers="item.productQuantity" @on-change="onParamChange(item, $event)"></counter>
            </div>
          </div>
        </div>
      </div>

      <!--去结算-->
      <mt-popup
        v-model="popupVisible"
        :modal="false"
        position="bottom">
        <div class="popup">
          <div style="display: flex;height: 7vh;align-items: center" @change="selectAll">
            <label class="mint-checklist-label">
              <span class="mint-checkbox">
                 <input type="checkbox" class="mint-checkbox-input" v-model="selecAll"/>
                 <span class="mint-checkbox-core"></span>
               </span>
            </label>
            全选
          </div>
          <div style="display: flex;height: 7vh;align-items: center">
            <div v-show="textFlag" style="display: flex;color: red;margin-right: 10px">
              总计 ¥{{total}}
            </div>
            <div class="btn" @click="shoppingCartHandler">
              {{textFlag ? "去结算" : "删除商品"}}
            </div>
          </div>
        </div>

      </mt-popup>

    </div>

  </div>
</template>

<script>
  import Counter from '../../components/base/counter';
  import {Toast} from 'mint-ui';
  export default {
    name: '',
    components: {
      Counter,
    },
    data() {
      return {
        textFlag: true,
        selecAll: false,
        popupVisible: true,
        total: 0,
        items: []
      }
    },
    props: ['sourceData'],
    methods: {
      getShappingCartList  () {
        // 购物车页面查询接口
        var that = this;
        that.$http.get('seller/cart/list', {}).then(function (res) {
          that.items = res.data.data;
          that.selectOne();
          if (that.items.length == 0) {
            that.selecAll = false;
          }
        })
      },
      selectOne(){
        var money = 0;
        this.items.forEach(function (ele) {
          if (ele.selectValue) {
            money += ele.productPrice * ele.productQuantity * ele.productRate
          }
        });
        this.total = money.toFixed(2);
      },
      selectAll(){
        this.items.forEach(ele => ele.selectValue = this.selecAll);
        this.selectOne();
      },
      edit(){
        this.popupVisible = true;
        this.textFlag = !this.textFlag;
      },
      shoppingCartHandler(){
        // arr 未选中 arr1 已选中
        var arr = [], arr1 = [];
        this.items.forEach(function (ele) {
            if (!ele.selectValue) {
              arr.push(ele);
            } else {
              arr1.push(ele);
            }
          }
        );
        if (this.textFlag) {
          if (arr1.length == 0) {
            Toast("请选择需要结算的商品");
            return
          }
          this.$store.state.shoppingCartData = arr1;
          this.$router.push({name: "orderlistpage"});
        } else {
          // 删除商品操作
          var that = this;
          that.$http.post('seller/cart/deleteByCartId', arr1).then(function (res) {
            that.getShappingCartList();
          })
        }
      },
      onParamChange (item, val) {
        item.productQuantity = val;
        this.selectOne();
      },

      back(){
        this.$router.back();//返回上一层
      }
    },
    mounted: function () {
      window.scroll(0, 0);

      // 记录当前的url
      this.$store.state.recordUrl = this.$route.fullPath;

      /**
       * 当购物车是首页跳转过来的，则下面的footer-bar是隐藏状态，根据this.sourceData == 1 判断
       */
      if (this.sourceData == 1) {
        document.getElementsByClassName("mint-popup-bottom")[0].style.zIndex = 2000;
        document.getElementsByClassName("popup")[0].style.height = 7 + "vh";
      } else {
        document.getElementsByClassName("mint-popup-bottom")[0].style.zIndex = 0;
      }
      this.getShappingCartList();
    }
  }
</script>

<style lang="scss" scoped>
  .cart {
    .mint-header {
      background-color: #000000;
    }
    .item {
      width: 25vw;
      height: 25vw;
      padding: 10px;
      position: relative;
    }
    .popup {
      width: 100vw;
      height: 15vh;
      display: flex;
      padding: 10px;
      justify-content: space-between;
      .btn {
        margin-right: 10px;
        width: 30vw;
        height: 7vh;
        background: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
      }
    }
  }

</style>
