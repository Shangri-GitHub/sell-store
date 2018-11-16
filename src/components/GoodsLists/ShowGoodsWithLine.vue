<template>
  <div class="show-goods-with-line">
    <div @click="showMoreProduct" class="photo">
      <img class="logo" src="http://qiniu.hanxing.store/万圣节.png" alt="">
    </div>

    <div class="goods-line">

      <div class="list" v-for="item in showGoodsWithLineDatas">
        <div style="text-align:center" @click="handleClick(item)">
          <img class="photo" :src="img.url" v-for="img in item.smallModelPhoto">
        </div>
        <div class="text-title" style="-webkit-box-orient: vertical">{{item.productName}}</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">
            ¥{{Number(item.productPrice * item.productRate).toFixed(2)}}<span class="origin-price">¥{{item.productPrice}}</span></div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {
      showMoreProduct(){
        this.$router.push({name: "showMoreProductsPage", params: {type: "withLine"}});
      },
      handleClick(goodsList){
        this.$router.push({name: "detailsofgoods", params: {id: goodsList.productId}});
      }
    },
    props: ['showGoodsWithLineDatas'],
    mounted: function () {
    }
  }
</script>

<style lang="scss" scoped>
  .show-goods-with-line {
    .photo {
      margin: 5px 5px 0 5px;
      .logo {
        width: 100%;
        height: 23vh;
        background-size: 100% 100%;
      }
    }
    .goods-line {
      display: flex;
      width: 100vw;
      overflow: auto;
      overflow-scrolling: touch;
      -webkit-overflow-scrolling: touch;
      .list {
        width: 32vw;
        height: 55vw;
        background: white;
        margin-bottom: 5px;
        .photo {
          width: 30vw;
          height: 30vw;
        }
        .text-title {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: .9rem;
          padding: 0 5px;
        }
        .origin-price {
          font-size: 0.8rem;
          text-decoration-line: line-through;
          color: #a5a5a5;
          padding-left: 5px;
        }
      }
    }
  }


</style>
