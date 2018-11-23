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
                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                {{items.commentList.length}}
              </div>
              <div>
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                {{items.thumbsUp}}
              </div>

            </div>
          </div>

        </div>


      </div>
      <!--新增按钮-->
      <div class="addNewMoment" @click="addNewMoment">
        <i class="fa fa-pencil-square-o icon" aria-hidden="true"></i>
      </div>


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
        momentDatas: [],
      }
    },
    methods: {

      // 图片预览区
      previewPhotoSwipe(index,imagesData){

        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [];
        //处理预览的照片
        imagesData.forEach(function (ele) {

          //获取图片原始的宽度和高度

          items.push( {
            src: ele.src,
            w: ele.width ||1200,
            h: ele.height ||900
          })
        })


        // define options (if needed)
        var options = {
//           optionName: 'option value',
          // for example:
          index:  index   // start at first slide
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();



      },
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
