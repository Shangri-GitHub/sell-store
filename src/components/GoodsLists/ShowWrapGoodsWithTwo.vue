<template>
  <div class="showGoodWithTwo">
    <div class="title">
      <div>
        <div class="title-primary">
          本周热卖
        </div>
        <div class="sub-title">HOT SELLING THIS WEEK</div>
      </div>
      <div class="more">更多>></div>
    </div>

    <div style="display: flex;flex-wrap: wrap;margin-top: 4px;">

      <div class="list">
        <div style="text-align:center">
          <img class="photo" alt="" v-for="">
        </div>
        <div class="text-title">【爆款】是你适合的非啊尽快发货口2是你适合的非啊尽快发货口23werqerqwrqwerqwrwqrwerqwerqwerw号</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">¥100<span class="origin-price">¥100</span></div>
          <div><i style="color: red;font-size: 1.6rem;padding: 0 10px" class="fa fa-plus-circle" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div class="list">
        <div style="text-align:center">
          <img class="photo" alt="" v-for="">
        </div>
        <div class="text-title">【爆款】是你适合的非啊尽快发货口2是你适合的非啊尽快发货口23werqerqwrqwerqwrwqrwerqwerqwerw号</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">¥100<span class="origin-price">¥100</span></div>
          <div><i style="color: red;font-size: 1.6rem;padding: 0 10px" class="fa fa-plus-circle" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div class="list">
        <div style="text-align:center">
          <img class="photo" alt="" v-for="">
        </div>
        <div class="text-title">【爆款】是你适合的非啊尽快发货口2是你适合的非啊尽快发货口23werqerqwrqwerqwrwqrwerqwerqwerw号</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">¥100<span class="origin-price">¥100</span></div>
          <div><i style="color: red;font-size: 1.6rem;padding: 0 10px" class="fa fa-plus-circle" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="list">
        <div style="text-align:center">
          <img class="photo" alt="" v-for="">
        </div>
        <div class="text-title">【爆款】是你适合的非啊尽快发货口2是你适合的非啊尽快发货口23werqerqwrqwerqwrwqrwerqwerqwerw号</div>
        <div style="display: flex;justify-content: space-between">
          <div style="padding-left: 10px;color: red;font-size: 1.2rem">¥100<span class="origin-price">¥100</span></div>
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
      return {}
    },
    methods: {},
    mounted: function () {

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
