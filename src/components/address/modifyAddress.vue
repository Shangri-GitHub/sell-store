<template>
  <div class="modifyAdd">
    <!--返回按钮-->
    <mt-header fixed :title="true?'管理收货地址':'新增收货地址'">
      <div @click="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <!--详情-->
    <div class="content">
      <mt-field label="收货人" placeholder="请输入姓名" v-model="form.name"></mt-field>
      <mt-field label="联系电话" placeholder="请输入手机号" type="tel" v-model="form.phone"></mt-field>
      <div @click="popupVisible = !popupVisible">
        <mt-cell title="所在地区" is-link><span :style="{color:(form.region=='请选择'?'#888':'#000')}">{{form.region}}</span>
        </mt-cell>
      </div>
      <mt-field label="详细地址" placeholder="请输入详细地址信息，如道路、门牌号、小区、楼栋号、单元室等" type="textarea" rows="3"
                v-model="form.address"></mt-field>
      <mt-field label="设置默认地址" placeholder="">
        <mt-switch v-model="form.value"></mt-switch>
      </mt-field>

      <div class="button" @click="saveAddress">
        保存
      </div>

    </div>

    <!--地区弹框-->
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <div style="display: flex;justify-content: space-between;padding: 10px">
        <div @click="popupVisible = !popupVisible">取消</div>
        <div @click="popupVisible = !popupVisible;addressOk()">确定</div>
      </div>
      <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
    </mt-popup>
    <!--底部掩盖-->
    <div class="addNewAddress"></div>

  </div>
</template>

<script>
  import myaddress from '../../store/adress.json' //引入省市区数据
  export default {
    name: '',
    data() {
      return {

        popupVisible: false,
        onChangeAddress: "",
        myAddressSlots: [
          {
            flex: 1,
            defaultIndex: 1,
            values: Object.keys(myaddress), //省份数组
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          },
          {
            divider: true,
            content: '-',
            className: 'slot4'
          },
          {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'center'
          }
        ],
        form:{
          value: false,
          name: "",
          phone: "",
          region:"请选择",
          address: "",
        },
      }
    },
    methods: {
      saveAddress(){
        console.log(1)
      },
      addressOk(){
        this.form.region = this.onChangeAddress;
      },
      onMyAddressChange(picker, values) {
        if (myaddress[values[0]]) { //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
          picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
          picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
          this.onChangeAddress = values[0] + values[1] + values[2];
        }
      },
      back(){
        this.$router.back();//返回上一层
      }
    },
    mounted: function () {
      // 跳转到页面的顶端
      window.scroll(0, 0);
      this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
        this.myAddressSlots[0].defaultIndex = 0
      });
      // 编辑带过来等参数
//      this.form = this.$route.params.a;
//
//      console.log(this.form)


    },
    beforeMount: function () {
      var that = this;
      /**
       * 根据商品的id查看详情
       */
      // 购物车的数目
//      that.$http.post('seller/product/findProductById', {
//        productId: this.$route.params.id,
//      }).then(function (res) {
//        that.detailsOfGoodslistData = res.data.data;
//      })


    }
  }
</script>

<style lang="scss" scoped>


  .modifyAdd {

    .mint-popup-bottom {
      width: 100vw;
    }
    .content {
      margin-top: 40px;
      .button {
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 95vw;
        height: 7vh;
        background: black;
        color: #ffffff;
      }
    }
    .addNewAddress {
      width: 100vw;
      height: 8vh;
      background: #f3f3f3;
      position: fixed;
      bottom: 0;
      z-index: 2;
    }
  }

</style>
