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
      return {}
    },
    methods: {},
    props: ['hot4PanelDatas'],
    mounted: function () {
    }
  }
</script>

<style lang="scss" scoped>
  .popular {
    padding: 5px 0px 0;
    width: 100%;
    display: flex;
    height: 30vh;
    .popular-item-1 {
      width: 40vw;
      .item {
        width: 40vw;
        height: 30vh;
        background-size: 100% 100%;
      }
    }
    .popular-item-2 {
      width: 60vw;
      height: 15vh;
      .item {
        width: 60vw;
        height: 15vh;
        background-size: 100% 100%;
      }
    }
    .popular-item-3,.popular-item-4 {
      height: 15vh;
      .item {
        width: 30vw;
        height: 15vh;
        background-size: 100% 100%;
      }
    }
  }
</style>
