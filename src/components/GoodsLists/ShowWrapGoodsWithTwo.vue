<template>
  <div class="showGoodWithTwo">
    <div class="title">
      <div>
        <div class="title-primary">
          本周热卖
        </div>
        <div class="sub-title">HOT SELLING THIS WEEK</div>
      </div>
      <div @click="showMoreProduct" class="more">更多>></div>
    </div>

    <div style="display: flex;flex-wrap: wrap;margin-top: 4px;">

      <!--展示商品两列的列表-->
      <div @click="handleClick(item)"  class="list" v-for="item in showWrapGoodsWithTwoLimitDatas">
        <div style="text-align:center">
          <img class="photo" :src="img.url" v-for="img in item.smallModelPhoto">
        </div>
        <div class="text-title" style="-webkit-box-orient: vertical">
          {{item.productName}}
        </div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">
            ¥{{Number(item.productPrice * item.productRate).toFixed(2)}}<span class="origin-price">¥{{item.productPrice}}</span>
          </div>
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
        showWrapGoodsWithTwoLimitDatas: []
      }
    },
    methods: {
      handleClick(goodsList){
        this.$router.push({name: "detailsofgoods", params: {id: goodsList.productId}});
      },
      showMoreProduct(){
        console.log(this.showWrapGoodsWithTwoLimitDatas);
      }
    },
    props: ['showWrapGoodsWithTwoDatas'],
    mounted: function () {
      var data = JSON.parse(JSON.stringify(this.showWrapGoodsWithTwoDatas));
      data.length = 4;
      this.showWrapGoodsWithTwoLimitDatas = data;
    }
  }
</script>

<style lang="scss" scoped>
  .showGoodWithTwo {
    .list {
      width: 50vw;
      height: 70vw;
      background: white;
      margin-bottom: 5px;
      .photo {
        width: 48vw;
        height: 48vw;
      }
      .text-title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: .9rem;
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
