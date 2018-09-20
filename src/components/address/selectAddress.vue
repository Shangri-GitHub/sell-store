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


      <div class="address-item">
        <!--单选按钮-->
        <div style="align-items: center;display: flex">
          <label class="mint-checklist-label">
              <span class="mint-checkbox" @change="selectOne">
                <input type="checkbox" class="mint-checkbox-input" v-model="selectValue"/>
                <span class="mint-checkbox-core"></span>
              </span>
          </label>
        </div>
        <div>
          <div style="display:flex;justify-content: space-between">
            <div>小明</div>
            <div>13899213450</div>
          </div>
          <div>
            [默认地址] 北京市朝阳区来广营甲一号朝来科技园18好院3号楼
          </div>
        </div>
        <div style="align-self: center;height: 100%" @click="modifyAdd({a:2})">
          <i style="font-size: 1.5rem;padding: 0 10px;color: #f12525;" class="fa fa-pencil-square-o"
             aria-hidden="true"></i>
        </div>
      </div>

      <div class="address-item">
        <!--单选按钮-->
        <div style="align-items: center;display: flex">
          <label class="mint-checklist-label">
              <span class="mint-checkbox" @change="selectOne">
                <input type="checkbox" class="mint-checkbox-input" v-model="selectValue"/>
                <span class="mint-checkbox-core"></span>
              </span>
          </label>
        </div>
        <div>
          <div style="display:flex;justify-content: space-between">
            <div>小明</div>
            <div>13899213450</div>
          </div>
          <div>
            [默认地址] 北京市朝阳区来广营甲一号朝来科技园18好院3号楼
          </div>
        </div>
        <div style="align-self: center;height: 100%" @click="modifyAdd({a:2})">
          <i style="font-size: 1.5rem;padding: 0 10px;color: #f12525;" class="fa fa-pencil-square-o"
             aria-hidden="true"></i>
        </div>
      </div>


    </div>


    <div class="addNewAddress">
      <div class="text" @click="modifyAdd(null)">
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
        selectValue: false
      }
    },
    methods: {
      selectOne(){
      },
      modifyAdd(e){
        this.$router.push({name:"modifyAddress",params:e})
      },
      back(){
        this.$router.back();//返回上一层
      }
    },
    mounted: function () {
      // 跳转到页面的顶端
      window.scroll(0, 0);
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

  .selectAdd {
    .addressList {
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
