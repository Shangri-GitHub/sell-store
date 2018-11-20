<template>
  <!--轮播图-->
  <div class="swipe-wrapper">
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="(imgData,index) in imgDatas" :key="index">
        <img class="item" :src="imgData.path">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgDatas: [{
          id: '2',
          path: 'http://qiniu.hanxing.store/banner2.jpg'
        }, {
          id: '1',
          path: 'http://qiniu.hanxing.store/banner1.jpg'
        }, {
          id: '3',
          path: 'http://qiniu.hanxing.store/banner3.jpg'
        }]
      }
    },
    methods: {},
    mounted: function () {
    }
  }
</script>

<style lang="scss" scoped>
  .swipe-wrapper {
    width: 100%;
    height: 23vh;
    .item {
      width: 100%;
      height: 23vh;
      background-size: 100% 100%;
    }

  }
</style>
