<template>
  <div class="popular">
    <div class="popular-item-1">
      <img class="item" :src="hot4PanelDatas['1']">
    </div>
    <div>
      <div class="popular-item-2">
        <img class="item" :src="hot4PanelDatas['2']">
      </div>
      <div style="display: flex;">
        <div class="popular-item-3">
          <img class="item" :src="hot4PanelDatas['3']">
        </div>
        <div class="popular-item-4">
          <img class="item" :src="hot4PanelDatas['4']">
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
        hot4PanelDatas: {
          "1": 'http://qiniu.hanxing.store/hotpanel1.jpg',
          "2": 'http://qiniu.hanxing.store/hotpanel2.jpg',
          "3": 'http://qiniu.hanxing.store/hotpanel3.jpg',
          "4": 'http://qiniu.hanxing.store/hotpanel4.jpg'
        },
      }
    },
    methods: {},
    mounted: function () {
    }
  }
</script>

<style lang="scss" scoped>
  .popular {
    padding: 5px 0px 0;
    display: flex;
    height: 30vh;
    .popular-item-1 {
      width: 38vw;
      border: 1px solid #fff;
      .item {
        width: 40vw;
        height: 30vh;
        background-size: 100% 100%;
      }
    }
    .popular-item-2 {
      width: 60vw;
      height: 15vh;
      border: 1px solid #fff;
      .item {
        width: 60vw;
        height: 15vh;
        background-size: 100% 100%;
      }
    }
    .popular-item-3, .popular-item-4 {
      height: 15vh;
      .item {
        width: 30vw;
        height: 15vh;
        background-size: 100% 100%;
        border: 1px solid #fff;
      }
    }
  }
</style>
