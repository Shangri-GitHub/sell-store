<template>
  <!--轮播图-->
  <div class="swipe-wrapper">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(imgData,index) in imgDatas" :key="index">
        <img class="item" :src="imgData.path">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: ['imgDatas'],
    methods: {},
    mounted: function () {
//      console.log(this.imgDatas);
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
