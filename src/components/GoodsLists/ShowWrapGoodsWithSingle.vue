<template>
  <div class="goodsWithRow">
    <div class="title">
      <div>
        <div class="title-primary">
          今日优选
        </div>
        <div class="sub-title">TODAY PREFERRED</div>
      </div>
      <div @click="showMoreProduct" class="more">更多>></div>
    </div>

    <!--展示列表-->
    <div @click="handleClick(item)" class="list" v-for="item in showWrapGoodsWithSingleLimitDatas">
      <img class="photo" :src="img.url" v-for="img in item.smallModelPhoto">
      <div style="width: 70vw;height: 30vw;padding: 10px">
        <div style="height: 20vw;-webkit-box-orient: vertical">{{item.productName}}</div>
        <div style="display: flex;justify-content: space-between">
          <div style="color: red;font-size: 1.1rem">¥{{Number(item.productPrice * item.productRate).toFixed(2)}}<span
            class="origin-price">¥{{item.productPrice}}</span></div>
          <div><i style="color: red;font-size: 1.6rem;padding: 0 10px" class="fa fa-plus-circle" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        showWrapGoodsWithSingleLimitDatas: []
      }
    },
    methods: {
      handleClick(goodsList){
        this.$router.push({name: "detailsofgoods", params: {id: goodsList.productId}});

      },
      showMoreProduct(){

        console.log(this.showWrapGoodsWithSingleDatas);
      }
    },
    props: ['showWrapGoodsWithSingleDatas'],
    mounted: function () {
      // 首页展示3个商品，点击更多展示全部
      var data = JSON.parse(JSON.stringify(this.showWrapGoodsWithSingleDatas));
      data.length = 2;
      this.showWrapGoodsWithSingleLimitDatas = data;
    }
  }
</script>

<style lang="scss" scoped>
  .goodsWithRow {
    .list {
      display: flex;
      padding: 0 10px;
      height: 30vw;
      background: white;
      margin-bottom: 5px;
      .photo {
        width: 30vw;
        height: 30vw;
      }
      .origin-price {
        font-size: 0.8rem;
        text-decoration-line: line-through;
        color: #a5a5a5;
        padding-left: 5px;
      }
    }
    .title {
      margin: 5px 0;
      width: 100vw;
      height: 18vw;
      background: #ffffff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .title-primary {
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center
      }
      .sub-title, .more {
        font-size: 0.5rem;
        color: #828282;
        text-align: center
      }
      .more {
        font-size: .8rem;
        position: absolute;
        right: 2vw;
        top: 4vh;
      }
    }
  }
</style>
