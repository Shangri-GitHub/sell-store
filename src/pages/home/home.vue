<template>
  <div class="home">
    <!--轮播图-->
    <swipper :imgDatas="imgDatas"></swipper>
    <!--热图榜-->
    <hot4-panel :hot4PanelDatas="hot4PanelDatas"></hot4-panel>
    <!--商品-->
    <div class="goods">
      <div class="photo">
        <img src="" alt="">
      </div>
      <!--商品列表-->
      <div style="display: flex;flex-wrap: wrap">
        <div class="goods-items">
          <div class="goods-items-photo">
            <img src="" alt="">
          </div>
          <div class="goods-items-label">
            La Prairie 莱博尼白鲟鱼精华贵鱼精华贵
          </div>
          <div class="goods-items-price">
            ¥122.44 <span class="text-through">¥142</span>
          </div>
        </div>

        <div class="goods-items">
          <div class="goods-items-photo">
            <img src="" alt="">
          </div>
          <div class="goods-items-label">
            La Prairie 莱博尼白鲟鱼精华贵鱼精华贵
          </div>
          <div class="goods-items-price">
            ¥122.44 <span>会员价</span>
          </div>
        </div>

        <div class="goods-items">
          <div class="goods-items-photo">
            <img src="" alt="">
          </div>
          <div class="goods-items-label">
            La Prairie 莱博尼白鲟鱼精华贵鱼精华贵
          </div>
          <div class="goods-items-price">
            ¥122.44 <span>会员价</span>
          </div>
        </div>

        <div class="goods-items">
          <div class="goods-items-photo">
            <img src="" alt="">
          </div>
          <div class="goods-items-label">
            La Prairie 莱博尼白鲟鱼精华贵鱼精华贵
          </div>
          <div class="goods-items-price">
            ¥122.44 <span>会员价</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import Swipper from '../../components/swipper.vue'
  import Hot4Panel from '../../components/Hot4Panel.vue'
  export default {
    name: '',
    components: {
      Swipper,
      Hot4Panel
    },
    data() {
      return {
        hot4PanelDatas: {
          "1":require('../../assets/images/hot4Panel/mac.jpg'),
          "2":require('../../assets/images/hot4Panel/food.jpg'),
          "3":require('../../assets/images/hot4Panel/cup.jpg'),
          "4":require('../../assets/images/hot4Panel/girl.jpg')
        },
        imgDatas: [{
          id: '0',
          path: require('../../assets/images/banner/water.png')
        }, {
          id: '1',
          path: require('../../assets/images/banner/coffee.jpg')
        }, {
          id: '2',
          path: require('../../assets/images/banner/clothes.jpg')
        }],
      }
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
        .goods-items-label {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: .9rem;
        }
        .goods-items-price {
          color: #cc1d18;
          font-size: .8rem;
          font-weight: 500;
          .text-through {
            font-size: .7rem;
            text-decoration-line: line-through;
            color: #a5a5a5;
          }
        }
      }
      .goods-items:nth-child(even) {
        width: 33.33%;
        .goods-items-photo {
          height: 20vh;
          margin: 0 5px 0;
          background: lightgoldenrodyellow;
        }
      }
      .goods-items:nth-child(odd) {
        width: 33.33%;
        .goods-items-photo {
          height: 20vh;
          background: lightgoldenrodyellow;
        }
      }

    }

  }


</style>
