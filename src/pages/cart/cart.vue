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
          <img class="item" :src="item.photo">
        </div>
        <div style="padding: 10px 10px 10px 0 ">
          <div>
            {{item.name}}
          </div>
          <div style="color: #8a8a8a;font-size: .8rem">
            {{item.selectedColor + "-" + item.selectedSize}}
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div style="color: red;font-size: 1.2rem">¥{{item.price}}<span
              style="color: #8a8a8a;margin-left: 8px;font-size: .9rem">¥{{item.price * 1.2}}</span>
            </div>
            <div>
              <counter @on-change="onParamChange(item, $event)"></counter>
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
        items: [{
          selectValue: false,
          photo: require('../../assets/images/home/adidas-shirt/small.png'),
          name: " 中长款格子衬衫连衣裙女秋装2018新款长秋suykol少女裙子",
          selectedColor: "黑色",
          selectedSize: "XXL",
          price: "155",
          selectedNum: "1"
        }, {
          selectValue: false,
          photo: require('../../assets/images/home/yoga/yogasmall.jpg'),
          name: " 奥氏 春夏季新款专业健身房背心女性感显瘦跑步运动瑜伽服套装",
          selectedColor: "黑色",
          selectedSize: "S",
          price: "40",
          selectedNum: "1"
        }]
      }
    },
    props: ['sourceData'],
    methods: {
      selectOne(){
        var money = 0;
        this.items.forEach(function (ele) {
          if (ele.selectValue) {
            money += ele.price * ele.selectedNum;
          }
        });
        this.total = money;
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
        var arr = [],arr1=[];
        this.items.forEach(function (ele) {
            if (!ele.selectValue) {
              arr.push(ele);
            }else {
              arr1.push(ele);
            }
          }
        );
        this.items = arr;
        if (this.textFlag) {
          if(arr1.length==0){
            Toast("请选择需要结算的商品");
            return
          }
          this.$router.push({name: "orderlistpage", params: {shoppingCartData: arr1}})
        } else {
          // 删除商品操作
          if (this.items.length == 0) {
            this.selecAll = false;
          }
        }


      },
      onParamChange (item, val) {
        item.selectedNum = val;
        this.selectOne();
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
        document.getElementsByClassName("popup")[0].style.height = 7 + "vh";
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
