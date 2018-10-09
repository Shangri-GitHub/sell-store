<template>
  <div class="setting">
    <mt-header fixed title="账号信息">
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>

    <div style="margin-top: 40px;">
      <mt-cell
        title="头像"  is-link value="">
        <span>
           <img slot="icon" src="../../assets/images/discover/red/red.jpg" style="border-radius: 50%" width="40"
                height="40">
        </span>
      </mt-cell>


      <div @click="modifyUserinfo('昵称','张三')">
        <mt-cell
          title="昵称" is-link value="张三">
        </mt-cell>
      </div>


      <div @click="modifyUserinfo('个性签名','个性签名')">
        <mt-cell
          title="个性签名" is-link value="个性签名">
        </mt-cell>
      </div>

      <div @click="modifyUserinfo('微信号','微信号')">
        <mt-cell style="margin-top: 15px"
                 title="微信号" is-link value="微信号">
        </mt-cell>
      </div>
      <div @click="modifyUserinfo('手机号','手机号')">
        <mt-cell
          title="手机号"  is-link value="手机号">
        </mt-cell>
      </div>
      <div @click="modifyUserinfo('性别','性别')">
        <mt-cell
          title="性别"  is-link value="">
        </mt-cell>
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
    methods: {
      modifyUserinfo(name, value){
        this.$router.push({name: "modifyUserinfo", params: {name: name, value: value}})
      },
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

  }

</style>
