<template>
  <div>
    <mt-header title="多个按钮">
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    detailOfGoods
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {
      back(){

        this.$router.back();//返回上一层
//        this.$router.push("/navbar/clothes");//返回上一层
      }
    },
    mounted: function () {
//      window.scroll(0, "500px")
    },

  }
</script>

<style>

</style>
