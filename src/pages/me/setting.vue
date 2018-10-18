<template>
  <div class="setting">
    <mt-header fixed title="设置">
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>

    <div style="margin-top: 40px;">
      <mt-cell
        title="账号信息" to="/userinfo" is-link value="">
      </mt-cell>

      <mt-cell
        title="我的收货地址" to="/address" is-link value="">
      </mt-cell>


      <mt-cell style="margin-top: 15px"
               title="音效与通知"  is-link value="">
      </mt-cell>


      <mt-cell
        title="问题建议"  is-link value="">
      </mt-cell>


      <mt-cell
        title="关于我们"  is-link value="">
      </mt-cell>


    </div>

    <div class="deleteButton" @click="logout()">
      退出当前账户
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
      logout(){
        this.$router.push("/")
      },
      back(){
        this.$router.push("/me");//返回上一层
      },
    },
    mounted: function () {

    }
  }
</script>

<style lang="scss" scoped>
  .setting {
    .deleteButton {
      width: 100vw;
      height: 8vh;
      position: fixed;
      bottom: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      background: rgb(241, 37, 37);
    }
  }

</style>
