<template>
  <!--下面的购物车-->
  <div class="cart">
    <div class="cart-item1">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
      <div>
        关注
      </div>
    </div>
    <div class="cart-item1">
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <div>
        购物车
      </div>
    </div>
    <div class="cart-item2">
      加入购物车
    </div>
    <div class="cart-item2" style="background: #f31b19">立即购买</div>
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
  .cart {
    width: 100vw;
    height: 8vh;
    background: white;
    position: fixed;
    bottom: 0;
    z-index: 2;
    text-align: center;
    display: flex;
    align-items: center;
    .cart-item1 {
      width: 15%;
      font-size: .8rem;
      i {
        font-size: 1.6rem;
      }
    }
    .cart-item2 {
      width: 35%;
      color: white;
      font-size: 1.3rem;
      background: #000000;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }
</style>
