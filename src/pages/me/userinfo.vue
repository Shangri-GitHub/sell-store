<template>
  <div class="setting">
    <mt-header fixed title="账号信息">
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>

    <div style="margin-top: 40px;">
      <mt-cell
        title="头像"  value="">
        <span>
           <img slot="icon" :src="userInfo.headImgUrl" style="border-radius: 50%" width="40"
                height="40">
        </span>
      </mt-cell>


      <div @click="modifyUserinfo('昵称','nickname',userInfo.nickname)">
        <mt-cell
          title="昵称" is-link :value="userInfo.nickname">
        </mt-cell>
      </div>


      <div @click="modifyUserinfo('个性签名','signature',userInfo.signature)">
        <mt-cell
          title="个性签名" is-link :value="userInfo.signature">
        </mt-cell>
      </div>

      <div @click="modifyUserinfo('所在地','country',userInfo.country)">
        <mt-cell style="margin-top: 15px"
                 title="所在地" is-link :value="userInfo.country">
        </mt-cell>
      </div>

      <div @click="modifyUserinfo('性别','sex',userInfo.sex)">
        <mt-cell
          title="性别" is-link :value="userInfo.sexDesc">
        </mt-cell>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        userInfo: ''
      }
    },
    methods: {
      modifyUserinfo(title, name, value){
        this.$router.push({name: "modifyUserinfo", params: {title: title, name: name, value: value}})
      },
      logout(){
        this.$router.push("/")
      },
      back(){
        this.$router.push("/me");//返回上一层
      },
    },
    mounted: function () {

      /**
       * 展示用户的信息
       */
      var that = this;
      var openId = this.$cookies.get("openId");
      that.$http.post('seller/getUserInfoByOpenId', {
        openId: openId
      }).then(function (res) {
        that.userInfo = res.data.data;
      })

    }
  }
</script>

<style lang="scss" scoped>
  .setting {

  }

</style>
