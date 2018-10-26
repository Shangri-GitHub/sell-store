<template>
  <div class="modifyUsername">
    <mt-header fixed :title="'修改'+title">
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>

    <div style="margin-top: 40px;">

      <mt-field
        v-if="title=='昵称'"
        placeholder=""
        v-model="userInfo.nickname">
      </mt-field>

      <mt-field
        v-if="title=='所在地'"
        placeholder=""
        v-model="userInfo.country">
      </mt-field>


      <mt-field
        v-if="title=='个性签名'"
        label="个性签名"
        placeholder="请输入字数在40字内"
        type="textarea"
        v-model="userInfo.signature"
        rows="4">
      </mt-field>

      <mt-radio
        v-if="title=='性别'"
        title=""
        v-model="userInfo.sex"
        :options="options">
      </mt-radio>

    </div>

    <div class="button" @click="save()">
      保存
    </div>
    <!--底部掩盖-->
    <div class="addNewAddress"></div>

  </div>


</template>

<script>
  import {Toast} from 'mint-ui';
  export default {
    name: '',
    data() {
      return {
        title: "",
        options: [{
          label: '不填写',
          value: "0"
        }, {
          label: '男',
          value: 1
        }, {
          label: '女',
          value: 2
        }],
        userInfo: {
          openId: ''
        }
      }
    },
    methods: {
      save(){
        var that = this;
        var openId = this.$cookies.get("openId");

        this.userInfo.openId = openId;
        this.userInfo.sex = this.userInfo.sex-0;
        that.$http.post('seller/saveUserInfo', this.userInfo).then(function (res) {
          if (res.data.code == 0) {
            Toast('保存成功');
            that.$router.push("/userinfo");
          }
        })
      },
      back(){
        this.$router.push("/userinfo");//返回上一层
      },
    },
    mounted: function () {
      this.title = this.$route.params.title;
      this.userInfo[this.$route.params.name] = this.$route.params.value + "";
    }
  }
</script>

<style lang="scss" scoped>
  .modifyUsername {
    .button {
      width: 98vw;
      height: 7vh;
      margin: 5vh auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      background: black;
    }
    .addNewAddress {
      width: 100vw;
      height: 10vh;
      background: #f3f3f3;
      position: fixed;
      bottom: 0;
      z-index: 2;
    }
  }

</style>
