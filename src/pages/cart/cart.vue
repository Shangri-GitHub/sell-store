<template>
  <div class="cart">
    <!--返回按钮-->
    <mt-header fixed title="购物车">
      <div @click="back" slot="left">
        <mt-button v-show="this.sourceData==1" icon="back">返回</mt-button>
      </div>
      <mt-button slot="right" @click="edit">{{textFlag ? "编辑" : "完成"}}</mt-button>
    </mt-header>
    <div style="top: 40px;position: absolute">
      <!--购物车商品-->
      <div style="background: white;display: flex;margin: 5px 0">
        <!--复选框-->
        <div style="align-items: center;display: flex">
          <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="checkbox" class="mint-checkbox-input" v-model="value"/>
                <span class="mint-checkbox-core"></span>
          </span>
          </label>
        </div>
        <!--图片-->
        <div style="display:flex;align-items: center">
          <img class="item" src="">
        </div>
        <div style="padding: 10px 10px 10px 0 ">
          <div>
            中长款格子衬衫连衣裙女秋装2018新款长秋suykol少女裙子
          </div>
          <div style="color: #8a8a8a;font-size: .8rem">
            黑色-41码
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="color: red;font-size: 1.2rem">¥55<span style="color: #8a8a8a;margin-left: 8px;font-size: .9rem">¥155</span>
            </div>
            <div>
              <counter @on-change="onParamChange('buyNum', $event)"></counter>
            </div>
          </div>
        </div>
      </div>
      <div style="background: white;display: flex;margin: 5px 0">
        <!--复选框-->
        <div style="align-items: center;display: flex">
          <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="checkbox" class="mint-checkbox-input">
                <span class="mint-checkbox-core"></span>
          </span>
          </label>
        </div>
        <!--图片-->
        <div style="display:flex;align-items: center">
          <img class="item" src="">
        </div>
        <div style="padding: 10px 10px 10px 0 ">
          <div>
            中长款格子衬衫连衣裙女秋装2018新款长秋suykol少女裙子
          </div>
          <div style="color: #8a8a8a;font-size: .8rem">
            黑色-41码
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="color: red;font-size: 1.2rem">¥55<span style="color: #8a8a8a;margin-left: 8px;font-size: .9rem">¥155</span>
            </div>
            <div>
              <counter @on-change="onParamChange('buyNum', $event)"></counter>
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
          <div style="display: flex;height: 7vh;align-items: center">
            <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="checkbox" class="mint-checkbox-input"/>
                <span class="mint-checkbox-core"></span>
          </span>
            </label>
            全选
          </div>
          <div style="display: flex;height: 7vh;align-items: center">
            <div v-show="textFlag" style="display: flex;color: red;margin-right: 10px">
              总计 ¥0
            </div>
            <div class="btn"  @click="shoppingCartHandler">
              {{textFlag ? "去结算" : "删除商品"}}
            </div>
          </div>
        </div>

      </mt-popup>

    </div>

  </div>
</template>

<script>
  import Counter from '../../components/base/counter'
  export default {
    name: '',
    components: {
      Counter,
    },
    data() {
      return {
        textFlag: true,
        value: true,
        popupVisible: true,
      }
    },
    props: ['sourceData'],
    methods: {
      edit(){
        this.popupVisible = true;
        this.textFlag = !this.textFlag;
      },
      shoppingCartHandler(){
        if (this.textFlag) {
          this.$router.push("/orderlistpage");
        } else {
          // 删除商品操作
        }


      },
      onParamChange (attr, val) {
//        this[attr] = val
        // this.getPrice()
//        console.log(this[attr], attr)
      },

      back(){
        this.$router.back();//返回上一层
      }
    },
    mounted: function () {
      window.scroll(0, 0);
      /**
       * 当购物车是首页跳转过来的，则下面的footer-bar是隐藏状态，根据this.sourceData == 1 判断
       */
      if (this.sourceData == 1) {
        document.getElementsByClassName("mint-popup-bottom")[0].style.zIndex = 2000;
        document.getElementsByClassName("popup")[0].style.height = 7 +"vh";
      } else {
        document.getElementsByClassName("mint-popup-bottom")[0].style.zIndex = 0;
      }
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
      height: 14vh;
      display: flex;
      padding: 10px;
      justify-content: space-between;
      .btn {
        margin-right: 10px;
        width: 30vw;
        height: 6vh;
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
