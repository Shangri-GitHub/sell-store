<template>
  <div class="selectAdd">
    <!--返回按钮-->
    <mt-header fixed title="选择收获地址">
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    <!--详情-->

    <div class="addressList">
      <div class="address-item" v-for="item in addressData">
        <!--单选按钮-->
        <div style="align-items: center;display: flex;width: 10vw;" @click="selectOne(item)">
          <div :class="[item.addressId != defaultAddressId ? 'circle' : 'fa fa-check-circle circle-selected']"></div>
        </div>
        <div style="width: 80vw;" @click="selectAddress(item)">
          <div style="display:flex;justify-content: space-between">
            <div>{{item.buyerName}}</div>
            <div>{{item.buyerPhone}}</div>
          </div>
          <div>
            {{(item.addressId == defaultAddressId ? "[默认地址]" : "") + item.buyerRegion + item.buyerAddress}}
          </div>
        </div>
        <div style="align-self: center;height: 100%;width: 10vw;" @click="modifyAdd(item)">
          <i style="font-size: 1.5rem;padding: 0 10px;color: #f12525;" class="fa fa-pencil-square-o"
             aria-hidden="true"></i>
        </div>
      </div>
    </div>


    <div class="addNewAddress">
      <div class="text" @click="modifyAdd()">
        <i class="fa fa-plus" aria-hidden="true"></i>
        添加新地址
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        selectValue: false,
        addressData: [],
        defaultAddressId: "",
      }
    },
    methods: {
      selectAddress(item){
        this.$router.push({name: "orderlistpage", params: item});
      },
      selectOne(item){
        var that = this;
        that.$http.post('/seller/saveAddressToUserInfo', item).then(function (res) {
          if (res.data.code == 0) {
            that.$router.push({name: "orderlistpage", params: item});
          }
        })
      },
      modifyAdd(e){
        this.$router.push({name: "modifyAddress", params: e})
      },
      back(){
        this.$router.back();//返回上一层
      }
    },
    mounted: function () {
      // 跳转到页面的顶端
      window.scroll(0, 0);
      var that = this;
      // 查询默认地址
      // todo 获取openId
      that.$http.post('/seller/getUserInfoByOpenId', {
        openId: "oBKLg0pK5y1nQg_HXFQAqb_hBgBI"
      }).then(function (res) {
        that.defaultAddressId = res.data.data.addressId;
      })

      // 查询用户所储存的地址
      that.$http.get('/address/list').then(function (res) {
        that.addressData = res.data.data;
      })


    },
    beforeMount: function () {

    }
  }
</script>

<style lang="scss" scoped>

  .selectAdd {
    .addressList {
      .circle {
        display: inline-block;
        background-color: #fff;
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      .circle-selected {
        color: #f12525;
        font-size: 1.6rem;
      }
      margin-top: 40px;
      .address-item {
        background: white;
        padding: 5px 10px;
        display: flex;
        margin-bottom: 2px
      }
    }
    .addNewAddress {
      width: 100vw;
      height: 8vh;
      background: white;
      position: fixed;
      bottom: 0;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        color: #f12525;
      }
    }
  }

</style>
