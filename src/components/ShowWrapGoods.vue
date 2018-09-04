<template>
  <div class="goods">
    <div class="photo">
      <img class="logo" :src="showWrapGoodsDatas.logo" alt="">
    </div>
    <div style="display: flex;flex-wrap: wrap">
      <div class="goods-items" v-for="goodsList in showWrapGoodsDatas.goodsLists" @click="handleClick(goodsList)">
        <div class="goods-items-photo">
          <img class="photo" :src="goodsList.photo.smallmodelPhoto" alt="">
        </div>
        <div class="goods-items-label">
          {{goodsList.name}}
        </div>
        <div class="goods-items-price">
          ¥{{goodsList.price}} <span class="text-through">¥{{goodsList.marketPrice}}</span>
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
      handleClick(goodsList){
        this.$router.push({name:"detailsofgoods",params:{id:goodsList.id}});
      }
    },
    props: ['showWrapGoodsDatas'],
    mounted: function () {

    }
  }
</script>

<style lang="scss" scoped>
  .goods {
    padding: 10px 10px 0;
    background: #ffffff;
    .photo {
      height: 20vh;
      .logo {
        width: 100%;
        height: 20vh;
        background-size: 100% 100%;
      }
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
        .photo {
          width: 100%;
          height: 20vh;
          background-size: 100% 100%;
        }
      }
    }
    .goods-items:nth-child(odd) {
      width: 33.33%;
      .goods-items-photo {
        height: 20vh;
        .photo {
          width: 100%;
          height: 20vh;
          background-size: 100% 100%;
        }
      }
    }

  }
</style>
