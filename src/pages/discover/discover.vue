<template>
  <div>
    <div class="discover">
      <!--返回按钮-->
      <mt-header fixed title="发现">
        <div slot="left">
        </div>
        <mt-button slot="right">
        </mt-button>
      </mt-header>
      <div class="contain">
        <!--内容-->
        <div style="background: white;margin-bottom: 10px" v-for="(item,index)  in momentDatas">
          <div style="display: flex;">
            <img class="profilePhoto" :src="item.picture">
            <div style="width: 60vw;margin: 16px 0">
              <div>{{item.nickname}}</div>
              <div style="color: #9a9a9a;font-size: 0.8rem">新人</div>
            </div>

            <div style="display: flex;align-items: center;justify-content:center;width: 20vw">
              <div style="background: black;color: white;text-align: center;padding: 2px 6px;border-radius: 8px;"><i
                class="fa fa-heartbeat" aria-hidden="true"></i>关注
              </div>
            </div>
          </div>
          <div style="padding: 8px">{{item.content}}</div>


          <!--暂时是针对九张图片处理 四张图片还没做处理-->
          <div class="photo-wall">
            <div class="box" v-for="(item,index)  in item.images">
              <img style="width: 33vw;height: 33vw" :src="item.src">
            </div>
          </div>


          <div style="display: flex;justify-content: space-between">
            <div style="padding: 8px">
              <!--阅读量 {{item.readCount}}-->
            </div>
            <div style="display: flex;align-items: center;padding: 8px">
              <div style="padding-right: 10px">
                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                {{item.commentList.length}}
              </div>
              <div>
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                {{item.thumbsUp}}
              </div>

            </div>
          </div>

        </div>


      </div>
      <!--新增按钮-->
      <div class="addNewMoment" @click="addNewMoment">
        <i class="fa fa-pencil-square-o icon" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: '',
    components: {},
    data() {
      return {
        momentDatas: [],
      }
    },
    methods: {
      addNewMoment(){
        this.$router.push('/addNewMoment');
      }
    },
    mounted: function () {
      var that = this;
      // 跳转到页面的顶端
      window.scroll(0, 0);
      /**
       * 查找所有的朋友圈
       */
      var params = {
        start: 1,
        size: 1000
      }
      that.$http.post('moment/findByCreateTimeBetweenAndPage', params).then(function (res) {

        if (res.data.code == 0) {
          that.momentDatas = res.data.data.data;
        }
      })

    },
    computed: {}
  }
</script>

<style lang="scss" scoped>
  .discover {
    width: 100%;
    .addNewMoment {
      width: 15vw;
      height: 15vw;
      background: black;
      border-radius: 50%;
      position: fixed;
      top: 75%;
      right: 6vw;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .icon {
        color: white;
        font-size: 1.8rem;
      }
    }
    .contain {
      margin-top: 40px;
      margin-bottom: 9vh;
      .profilePhoto {
        width: 14vw;
        height: 14vw;
        background: wheat;
        border-radius: 7vw;
        margin: 10px;
      }
      .photo-wall {
        display: flex;
        flex-wrap: wrap;
        .box {
          position: relative;
          width: 33vw;
          height: 33vw;
          margin-left: 0.33vw;
          margin-top: 0.33vw;
        }
      }
    }
  }
</style>
