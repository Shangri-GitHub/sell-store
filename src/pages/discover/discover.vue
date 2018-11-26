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
        <div style="background: white;margin-bottom: 10px" v-for="(items,index)  in momentDatas">
          <div style="display: flex;">
            <img class="profilePhoto" :src="items.picture">
            <div style="width: 60vw;margin: 16px 0">
              <div>{{items.nickname}}</div>
              <div style="color: #9a9a9a;font-size: 0.8rem">新人</div>
            </div>

            <div style="display: flex;align-items: center;justify-content:center;width: 20vw">
              <div style="background: black;color: white;text-align: center;padding: 2px 6px;border-radius: 8px;"><i
                class="fa fa-heartbeat" aria-hidden="true"></i>关注
              </div>
            </div>
          </div>
          <div style="padding: 8px">{{items.content}}</div>


          <!--暂时是针对九张图片处理 四张图片还没做处理-->
          <div class="photo-wall">
            <div class="box" v-for="(item,index)  in items.images">
              <img style="width: 33vw;height: 33vw" :src="item.src" @click="previewPhotoSwipe(index,items.images)">
            </div>
          </div>

          <div style="display: flex;justify-content: space-between">
            <div style="padding: 8px">
              <!--阅读量 {{item.readCount}}-->
            </div>
            <div style="display: flex;align-items: center;padding: 8px">
              <div style="padding-right: 10px">
                <i class="fa fa-commenting-o" @click="Comment(items)" aria-hidden="true"></i>
                {{items.commentList.length}}
              </div>
              <div>
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                {{items.thumbsUp}}
              </div>
            </div>
          </div>
          <!--评论区列表-->
          <div style="background:#f3f3f3;padding:10px;">
            <div style="display: flex;border-bottom: 1px solid #e4e4e4;padding: 5px 0"
                 v-for="commentList in items.commentList">
              <div style="width: 12vw;height: 12vw">
                <img style="width: 12vw;height: 12vw;" :src="commentList.picture" alt="">
              </div>
              <div style="padding: 0 10px">
                <div style="color: #4561a2;"> {{commentList.nickname}}</div>
                <div>{{commentList.content}}</div>
              </div>
            </div>
          </div>


        </div>


      </div>
      <!--新增按钮-->
      <div class="addNewMoment" @click="addNewMoment">
        <i class="fa fa-pencil-square-o icon" aria-hidden="true"></i>
      </div>

      <!--评论-->
      <mt-popup
        class="popup"
        v-model="popupVisible"
        :modal="true"
        position="bottom">
        <input class="commentArea" v-model="content" type="text" @keyup.enter="CommitComment($event)">
      </mt-popup>

      <!-- PhotoSwipe插件需要的元素， 一定要有类名 pswp -->
      <div class="pswp" ref="pswb" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
          <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
          </div>
          <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
              <div class="pswp__counter"></div>
              <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
              <div class="pswp__preloader">
                <div class="pswp__preloader__icn">
                  <div class="pswp__preloader__cut">
                    <div class="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>
            <div class="pswp__caption">
              <div class="pswp__caption__center"></div>
            </div>
          </div>
        </div>
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
        momentId: "",
        momentDatas: [],
        content: '',
        popupVisible: false,
      }
    },
    methods: {

      Comment(item){
        // 打开手机的键盘事件
        console.log(item)
        this.popupVisible = true;
        this.momentId = item.momentId
      },

      CommitComment(){

        var that = this;
        var param = {
          openId: this.$cookies.get("openId"),
          content: this.content,
          momentId: this.momentId
        }
        that.$http.post('commentList/saveCommentList', param).then(function (res) {

          if (res.data.code == 0) {
            that.popupVisible = false;
            that.findByCreateTimeBetweenAndPage();
          }
        })


      },
      // 图片预览区
      previewPhotoSwipe(index, imagesData){

        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [];
        //处理预览的照片
        imagesData.forEach(function (ele) {

          //获取图片原始的宽度和高度

          items.push({
            src: ele.src,
            w: ele.width || 1200,
            h: ele.height || 900
          })
        })


        // define options (if needed)
        var options = {
//           optionName: 'option value',
          // for example:
          index: index   // start at first slide
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();


      }
      ,
      addNewMoment()
      {
        this.$router.push('/addNewMoment');
      },

      /**
       * 查找所有的朋友圈
       */
      findByCreateTimeBetweenAndPage(){
        var that = this;

        var params = {
          start: 1,
          size: 1000
        }
        that.$http.post('moment/findByCreateTimeBetweenAndPage', params).then(function (res) {
          if (res.data.code == 0) {
            that.momentDatas = res.data.data.data;
          }
        })
      }


    }
    ,
    mounted: function () {
      // 跳转到页面的顶端
      window.scroll(0, 0);
      this.findByCreateTimeBetweenAndPage()

    }
    ,
    computed: {}
  }
</script>

<style lang="scss" scoped>
  .discover {
    width: 100%;
    input:focus {
      outline: none;
      border: none;
      outline-offset: 0;
      padding: 5px;
    }
    .popup {
      width: 101vw;
      height: 10vh;
      background: #eeeeee;
      display: flex;
      justify-content: center;
      align-items: center;
      .commentArea {
        width: 90%;
        height: 5vh;
        font-size: 1rem;
      }
    }

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
