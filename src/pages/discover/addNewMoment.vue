<template>
  <div class="moment">
    <!--返回按钮-->
    <mt-header fixed title="发布动态">
      <div @click="back" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <!--<mt-button @click="shareMoment" slot="right">分享</mt-button>-->
    </mt-header>
    <!--内容-->
    <div class="content">
      <mt-field
        placeholder="Say something..."
        type="textarea"
        v-model="moment.content"
        rows="4">
      </mt-field>
      <!--上传图片-->
      <upload @on-change="onParamChange($event)"></upload>
      <div class="button" @click="publishMoment()">
        发布动态
      </div>
    </div>
    <!--底部掩盖-->
    <div class="addNewAddress"></div>

  </div>
</template>

<script>
  import Config from "../../config";
  import {Toast, Indicator} from "mint-ui";
  import Upload from '../../components/moment/Upload.vue'
  export default {
    name: '',
    components: {
      Upload
    },
    data() {
      return {
        uptoken: '',
        imageDatas: [],
        moment: {
          openId: '',
          content: '',
          images: [],
        },
      }
    },
    methods: {
      onParamChange (val) {
        this.imageDatas = val;
      },
      /**
       * 发布动态
       * 获取七牛云的upToken
       * 把图片上传到七牛云服务器
       * 获取到图片的路径保存起来
       * 调用publishMoment接口
       *
       */
      publishMoment(){

        var that = this;

        // 上传七牛云服务器
        this.getQiniuSuccessImageDatas();
        // 发布动态的接口
        this.moment.openId = this.$cookies.get("openId");
        this.imageDatas.forEach(function (ele) {
          var item = {
            name: ele.name,
            src: Config.qiniu.URL + ele.name,
            width: ele.width,
            height: ele.height
          }
          that.moment.images.push(item);
        })
        if (this.moment.content == "" && this.moment.images.length == 0) {
          Toast("所发布内容不能为空哦！");
          return;
        }
        Indicator.open({
          text: '发布中...',
          spinnerType: 'fading-circle'
        });
        that.$http.post('moment/publishMoment', this.moment).then(function (res) {
          if (res.data.code == 0) {
            Indicator.close();
            that.$router.push("/discover");
          }
        })


      },
      back(){
        this.$router.back();
      },
      getQiniuSuccessImageDatas () {

        var that = this;
        // 获取upToken
        that.$http.get("qiniu/getUpToken").then(function (res) {
          that.uptoken = res.data.data.upToken;
          // 上传至服务器
          that.imageDatas.forEach(function (ele) {
            var putExtra = {
              fname: "",
              params: {},
              mimeType: [] || null
            };
            var config = {
              useCdnDomain: true,
              region: qiniu.region.z0
            };

            var observer = {
              next(res){
                // res 参数带有total字段的 object，包含loaded、total、percent三个属性
              },
              error(err){
                Toast("上传失败！请稍后再试");

              },
              complete(res){
                /**
                 * 存储上传成功返回来的数据
                 */
              }
            }
            var observable = qiniu.upload(ele.file, ele.name, that.uptoken, putExtra, config)
            observable.subscribe(observer);
          })
        })
      },
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
    .button {
      margin: 30px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95vw;
      height: 7vh;
      background: black;
      color: #ffffff;
    }
    .addNewAddress {
      width: 100vw;
      height: 10vh;
      background: #ffffff;
      position: fixed;
      bottom: 0;
      z-index: 2;
    }
  }
</style>
