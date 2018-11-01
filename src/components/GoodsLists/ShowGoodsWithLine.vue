<template>
  <div class="show-goods-with-line">
    <div class="photo">
      <img class="logo" alt="">
    </div>

    <div class="goods-line">

      <div class="list" v-for="item in showGoodsWithLineDatas">
        <div style="text-align:center" @click="handleClick(item)">
          <img class="photo" :src="img.url" v-for="img in item.smallModelPhoto">
        </div>
        <div class="text-title" style="-webkit-box-orient: vertical">{{item.name}}</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">
            ¥{{Number(item.price * item.rate).toFixed(2)}}<span class="origin-price">¥{{item.price}}</span></div>
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
        this.$router.push({name: "detailsofgoods", params: {id: goodsList.id}});
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
      height: 20vh;
      margin: 5px;
      .logo {
        width: 100%;
        height: 20vh;
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
