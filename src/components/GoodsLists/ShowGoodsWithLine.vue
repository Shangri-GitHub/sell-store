<template>


  <div class="show-goods-with-line">
    <div class="photo">
      <img class="logo"  alt="">
    </div>
    <div class="goods-line">
      <div class="list">
        <div style="text-align:center">
          <img class="photo" alt="" v-for="">
        </div>
        <div class="text-title">【爆款】是你适合的非啊尽快发货口2是你适合的非啊尽快发货口23werqerqwrqwerqwrwqrwerqwerqwerw号</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">¥100<span class="origin-price">¥100</span></div>
        </div>
      </div>


      <div class="list">
        <div style="text-align:center">
          <img class="photo" alt="" v-for="">
        </div>
        <div class="text-title">【爆款】是你适合的非啊尽快发货口2是你适合的非啊尽快发货口23werqerqwrqwerqwrwqrwerqwerqwerw号</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">¥100<span class="origin-price">¥100</span></div>
        </div>
      </div>



      <div class="list">
        <div style="text-align:center">
          <img class="photo" alt="" v-for="">
        </div>
        <div class="text-title">【爆款】是你适合的非啊尽快发货口2是你适合的非啊尽快发货口23werqerqwrqwerqwrwqrwerqwerqwerw号</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">¥100<span class="origin-price">¥100</span></div>
        </div>
      </div>



      <div class="list">
        <div style="text-align:center">
          <img class="photo" alt="" v-for="">
        </div>
        <div class="text-title">【爆款】是你适合的非啊尽快发货口2是你适合的非啊尽快发货口23werqerqwrqwerqwrwqrwerqwerqwerw号</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">¥100<span class="origin-price">¥100</span></div>
        </div>
      </div>


      <div class="list">
        <div style="text-align:center">
          <img class="photo" alt="" v-for="">
        </div>
        <div class="text-title">【爆款】是你适合的非啊尽快发货口2是你适合的非啊尽快发货口23werqerqwrqwerqwrwqrwerqwerqwerw号</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">¥100<span class="origin-price">¥100</span></div>
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
  .show-goods-with-line{
    .photo {
      height: 20vh;
      margin: 5px;
      .logo {
        width: 100%;
        height: 20vh;
        background-size: 100% 100%;
      }
    }
    .goods-line{
      display: flex;
      width: 100vw;
      overflow-x: auto;
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
