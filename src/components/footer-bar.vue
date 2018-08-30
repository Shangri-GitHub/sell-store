<template>
  <div>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="Home">
        <div slot="icon"><i class="fa fa-home fa-1x icon" aria-hidden="true"></i></div>
        首页
      </mt-tab-item>
      <mt-tab-item id="Discover">
        <div slot="icon"><i class="fa fa-search fa-1x icon" aria-hidden="true"></i></div>
        发现
      </mt-tab-item>
      <mt-tab-item id="Cart">
        <div slot="icon"><i class="fa fa-shopping-cart fa-1x icon" aria-hidden="true"></i></div>
        购物车
      </mt-tab-item>
      <mt-tab-item id="Me" icon="fa fa-history">
        <div slot="icon"><i class="fa fa-user-o fa-1x icon" aria-hidden="true"></i></div>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        selected: "Home"
      }
    },
    methods: {},
    mounted: function () {

    },
    watch: {
      selected(n, v){
        if (n == "Home") {
          this.$router.push('/navbar/home');
        } else if (n == "Discover") {
          this.$router.push('/discover/detail');
        } else if (n == "Cart") {
          this.$router.push('/cart');
        } else if (n == "Me") {
          this.$router.push('/me');
        }
      }
    }
  }
</script>

<style lang="css" scoped>

  .mint-tabbar {
    height: 8vh;
    background-color: #282828;
  }

  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #282828;
    color: #ffffff;
  }

  .mint-tab-item {
    color: #828282;
  }

  .icon {
    font-size: 1.5rem
  }
</style>
