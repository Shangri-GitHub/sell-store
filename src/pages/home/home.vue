<template>
  <div class="home">
    <!--轮播图-->
    <div class="swipe-wrapper">
      <mt-swipe :auto="0">
        <mt-swipe-item class="swip-item-1 item">
          <img src="../../assets/logo.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item class="swip-item-2 item">2</mt-swipe-item>
        <mt-swipe-item class="swip-item-3 item">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <!--热图榜-->
    <div class="popular">
      <div class="popular-item-1">1</div>
      <div>
        <div class="popular-item-2">2</div>
        <div style="display: flex;">
          <div class="popular-item-3">3</div>
          <div class="popular-item-4">4</div>
        </div>
      </div>
    </div>
    <!--商品-->
    <div class="goods">
      <div class="photo">
        <img src="" alt="">
      </div>
      <!--商品列表-->
      <div class="goods-items">
        <div class="goods-items-photo">
          <img src="" alt="">
        </div>
        <div class="goods-items-label">
          La Prairie 莱博尼白鲟鱼精华贵
        </div>
        <div class="goods-items-price">
          ¥122.44 <span>会员价</span>
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
    methods: {},
    mounted: function () {

    }
  }
</script>

<style lang="scss" scoped>
  .home {
    height: 78vh;
    overflow: auto;
    .goods {
      padding: 10px 10px 0;
      background: #ffffff;
      .photo {
        height: 20vh;
        background: red;
      }
      .goods-items {
        padding: 10px 0 0 0;
        width: 30%;
        .goods-items-photo {
          height: 20vh;
          background: lightgoldenrodyellow;
        }
        .goods-items-label {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .goods-items-price {
          color: #cca45c;
          font-size: .8rem;
          font-weight: 500;
        }
      }
    }
    .popular {
      padding: 10px 10px 0;
      display: flex;
      height: 30vh;
      background: #ffffff;
      .popular-item-1 {
        width: 40vw;
        background: darkred;
      }
      .popular-item-2 {
        background: wheat;
        width: 60vw;
        height: 15vh;
      }
      .popular-item-3 {
        flex: 0 1 50%;
        height: 15vh;
        background: rebeccapurple;
      }
    }
  }
  .swipe-wrapper {
    width: 100%;
    height: 20vh;
    .item {
      text-align: center;
      font-size: 40px;
      color: white;
    }
    .swip-item-1 {
      background: red;
    }
    .swip-item-2 {
      background: blue;
    }
    .swip-item-3 {
      background: green;
    }
  }

</style>
