<template>
  <div class="upload">
    <!--图片展示区-->
    <div class="photo-wall">
      <div class="box" v-for="(item,index)  in imagesData">
        <div class="close">
          <i @click="removeImg(index)" class="fa fa-times times-circle" aria-hidden="true"></i>
        </div>
        <img @click="previewPhotoSwipe(index,imagesData)" style="width: 33vw;height: 33vw" :src="item.src">
      </div>
      <!--选择一个照片-->
      <div class="selectPhoto" v-if="this.imagesData.length < 9">
        <i class="fa fa-camera camera" aria-hidden="true"></i>
        <input class="inputNone" type="file" multiple accept="image/*" ref="file" @change="selectImgs()">
      </div>
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
</template>

<script>
  import {Toast} from "mint-ui";
  export default {
    name: '',
    data() {
      return {
        slides: [],
        imagesData: []
      }
    },
    methods: {
      // 图片预览区
      previewPhotoSwipe(index, imagesData){
        var pswpElement = document.querySelectorAll('.pswp')[0];
        // build items array
        var items = [];
        imagesData.forEach(function (ele) {
          items.push({
            src: ele.src,
            w: ele.width || 1200,
            h: ele.height || 900
          })
        })

        // define options (if needed)
        var options = {
          // optionName: 'option value'
          // for example:
          index: index // start at first slide
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();


      },
      // 取消上传
      removeImg(index){
        this.imagesData.splice(index, 1);
        this.$emit('on-change', this.imagesData);
      },
      //选择图片
      selectImgs() {
        var that = this;
        var fileList = this.$refs.file.files;
        if (fileList.length > 9) {
          Toast("亲！最多只允许传9张图片");
          return;
        }
        for (let i = 0, len = fileList.length; i < len; i++) {
          var reader = new FileReader();
          reader.onload = function (e) {
            //  获取图片的宽高

            var image = new Image();
            image.src = e.target.result;
            image.onload = function () {
              var item = {
                name: fileList[i].name,
                src: e.target.result,
                file: fileList[i],
                width:this.width*0.8,
                height:this.height*0.8
              }
              that.imagesData.push(item);
            };



          }
          reader.readAsDataURL(fileList[i]);
        }
        this.$emit('on-change', this.imagesData);
      },
    },
    mounted: function () {


    }
  }
</script>

<style lang="scss" scoped>
  .upload {
    width: 100%;
    .photo-wall {
      display: flex;
      flex-wrap: wrap;
      .box {
        position: relative;
        width: 33vw;
        height: 33vw;
        margin-left: 0.33vw;
        margin-top: 0.33vw;
        .close {
          margin-right: 0.33vw;
          margin-top: 0.33vw;
          width: 4.4vw;
          height: 4.4vw;
          border-radius: 50%;
          background: #de3d3d;
          border: 1px solid #dad7d7;
          position: absolute;
          right: 0;
          justify-content: center;
          align-items: center;
          .times-circle {
            position: absolute;
            right: 0.1vw;
            top: -0.3vw;
            color: white;
            font-size: 1.2rem;
          }
        }
      }
      .selectPhoto {
        position: relative;
        width: 33vw;
        height: 33vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #d0d0d0;
        margin-left: 0.33vw;
        margin-top: 0.33vw;
        .camera {
          font-size: 2rem;
          color: #989898;
          position: absolute;
        }
        .inputNone {
          position: relative;
          left: 0;
          top: 0;
          width: 33vw;
          height: 33vw;
          opacity: 0;
        }
      }
    }

  }
</style>
