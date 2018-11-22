<template>
  <div class="moment">
    <!--返回按钮-->
    <mt-header fixed title="发布动态">
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button @click="shareMoment" slot="right">分享</mt-button>
    </mt-header>
    <!--内容-->
    <div class="content">
      <mt-field

        placeholder="请输入字数在80字内"
        type="textarea"
        v-model="moment.content"
        rows="4">
      </mt-field>

      <!--上传图片-->
      <croppa v-model="myCroppa"></croppa>


    </div>


  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        moment: {
          content: ''
        },
        myCroppa: {},
      }
    },
    methods: {
      uploadCroppedImage() {
        this.myCroppa.generateBlob(
          function (blob) {
          }, 'image/jpeg', 0.8); // 80% compressed jpeg file
      },
      back(){
        this.$router.back();
      },
      shareMoment(){
        // TODO  还没有做上传接口

      }
    },
    mounted: function () {

    }
  }
</script>

<style lang="scss" scoped>
  .moment {
    .content {
      top: 40px;
      position: relative;
      margin-bottom: 20vh
    }
  }
</style>
