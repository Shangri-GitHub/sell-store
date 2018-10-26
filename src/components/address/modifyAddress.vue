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
      <mt-field label="收货人" placeholder="请输入姓名" v-model="form.buyerName"></mt-field>
      <mt-field label="联系电话" placeholder="请输入手机号" type="tel" v-model="form.buyerPhone"></mt-field>
      <div @click="popupVisible = !popupVisible">
        <mt-cell title="所在地区" is-link><span :style="{color:(form.buyerRegion=='请选择'?'#888':'#000')}">{{form.buyerRegion}}</span>
        </mt-cell>
      </div>
      <mt-field label="详细地址" placeholder="请输入详细地址信息，如道路、门牌号、小区、楼栋号、单元室等" type="textarea" rows="3"
                v-model="form.buyerAddress"></mt-field>
      <!--<mt-field v-if="" label="设置默认地址" placeholder="">-->
      <!--<mt-switch v-model="form.default"></mt-switch>-->
      <!--</mt-field>-->
      <div class="button" @click="saveAddress">
        保存
      </div>
      <div v-if="$route.params.addressId" class="deleteButton" @click="deleteAddress">
        删除
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
  import {Toast} from 'mint-ui';
  import {MessageBox} from 'mint-ui';
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
        form: {
          buyerName: "",
          buyerPhone: "",
          buyerRegion: "请选择",
          buyerAddress: "",
        },
      }
    },
    methods: {
      deleteAddress(){
        var that = this;
        MessageBox.confirm('确定删除该条地址吗?').then(action => {
          that.$http.post('/address/deleteByAddressId', this.form).then(function (res) {
            if (res.data.code == 0) {
              that.$router.push("/selectAddress")
            }
          })
        }).catch(e => {});


      },
      saveAddress(){
        /**
         * 默认地址只能是一个；所以判断当前是不是默认地址
         * 保存当前的地址
         */
        var that = this;
        if (!this.form.buyerName) {
          Toast("姓名不能为空");
          return false;
        }
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if (!reg.test(this.form.buyerPhone)) {
          Toast("电话号码输入不正确");
          return false;
        }
        if (!this.form.buyerRegion) {
          Toast("请选择所在区域");
          return false;
        }
        if (!this.form.buyerAddress) {
          Toast("请填写详细地址");
          return false;
        }
        that.$http.post('/address/save', this.form).then(function (res) {
          if (res.data.code == 0) {
            that.$router.push("/selectAddress")
          }

        })


      },
      addressOk(){
        this.form.buyerRegion = this.onChangeAddress;
        this.form.defaultAddress = this.default;
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
      if (this.$route.params) {
        this.form = this.$route.params;
      }
    },
    beforeMount: function () {

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
      .button, .deleteButton {
        margin: 16px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 95vw;
        height: 7vh;
        background: black;
        color: #ffffff;
      }
      .deleteButton {
        background: rgb(241, 37, 37);
      }
    }
    .addNewAddress {
      width: 100vw;
      height: 10vh;
      background: #ffffff;
      position: fixed;
      bottom: 0;
      z-index: 2;
    }
  }

</style>
