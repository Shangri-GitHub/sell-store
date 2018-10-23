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
        <div style="background: white;margin-bottom: 10px">


          <div style="display: flex;">
              <img class="profilePhoto" src="../../assets/images/discover/beaytiful/beautiful.jpg" alt="">
            <div style="width: 60vw;margin: 16px 0">
              <div>OCEANPARK WITH U</div>
              <div style="color: #9a9a9a">26.3万粉丝</div>
            </div>

            <div style="display: flex;align-items: center;justify-content:center;width: 20vw">
              <div style="background: black;color: white;text-align: center;padding: 2px 6px;border-radius: 8px;"><i
                class="fa fa-heartbeat" aria-hidden="true"></i>关注
              </div>
            </div>
          </div>
          <div style="padding: 8px">#上新装# 换上秋裤，双手往裤子口袋一插，一切都是那么自然~</div>
          <div style="display: flex;flex-direction: column;justify-content: space-between;height: 100vw">
            <div style="display: flex;justify-content: space-between">
                <img class="box" src="../../assets/images/discover/beaytiful/beautiful_01.jpg" alt="">
                <img class="box" src="../../assets/images/discover/beaytiful/beautiful_02.jpg" alt="">
                <img class="box" src="../../assets/images/discover/beaytiful/beautiful_03.jpg" alt="">
            </div>
            <div style="display: flex;justify-content: space-between">
              <img class="box" src="../../assets/images/discover/beaytiful/beautiful_04.jpg" alt="">
              <img class="box" src="../../assets/images/discover/beaytiful/beautiful_05.jpg" alt="">
              <img class="box" src="../../assets/images/discover/beaytiful/beautiful_06.jpg" alt="">
            </div>
            <div style="display: flex;justify-content: space-between">
              <img class="box" src="../../assets/images/discover/beaytiful/beautiful_07.jpg" alt="">
              <img class="box" src="../../assets/images/discover/beaytiful/beautiful_08.jpg" alt="">
              <img class="box" src="../../assets/images/discover/beaytiful/beautiful_09.jpg" alt="">
            </div>
          </div>
          <div style="display: flex;justify-content: space-between">
            <div style="padding: 8px">
              4.2万阅读
            </div>
            <div style="display: flex;align-items: center;padding: 8px">
              <div style="padding-right: 10px">
                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                4
              </div>
              <div>
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                31
              </div>

            </div>
          </div>

        </div>

        <div style="background: white;margin-bottom: 10px">


          <div style="display: flex;">
              <img class="profilePhoto" src="../../assets/images/discover/red/red.jpg" alt="">
            <div style="width: 60vw;margin: 16px 0">
              <div>早安樊樊 </div>
              <div style="color: #9a9a9a">12.2万粉丝</div>
            </div>

            <div style="display: flex;align-items: center;justify-content:center;width: 20vw">
              <div style="background: black;color: white;text-align: center;padding: 2px 6px;border-radius: 8px;"><i
                class="fa fa-heartbeat" aria-hidden="true"></i>关注
              </div>
            </div>
          </div>
          <div style="padding: 8px">#开春真的很需要一件# 随手拿起就可以穿的开衫外套，穿羽绒服太热，穿卫衣太冷，外面多加一件开衫感觉会舒适许多，而且还能搭配在外套里面当内搭也很ok~</div>
          <div style="display: flex;flex-direction: column;justify-content: space-between;height: 100vw">
            <div style="display: flex;justify-content: space-between">
              <img class="box" src="../../assets/images/discover/red/red_01.jpg" alt="">
              <img class="box" src="../../assets/images/discover/red/red_02.jpg" alt="">
              <img class="box" src="../../assets/images/discover/red/red_03.jpg" alt="">
            </div>
            <div style="display: flex;justify-content: space-between">
              <img class="box" src="../../assets/images/discover/red/red_04.jpg" alt="">
              <img class="box" src="../../assets/images/discover/red/red_05.jpg" alt="">
              <img class="box" src="../../assets/images/discover/red/red_06.jpg" alt="">
            </div>
            <div style="display: flex;justify-content: space-between">
              <img class="box" src="../../assets/images/discover/red/red_07.jpg" alt="">
              <img class="box" src="../../assets/images/discover/red/red_08.jpg" alt="">
              <img class="box" src="../../assets/images/discover/red/red_09.jpg" alt="">
            </div>
          </div>
          <div style="display: flex;justify-content: space-between">
            <div style="padding: 8px">
              1.8万阅读
            </div>
            <div style="display: flex;align-items: center;padding: 8px">
              <div style="padding-right: 10px">
                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                2
              </div>
              <div>
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                600
              </div>

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
      return {}
    },
    methods: {},
    mounted: function () {
      // 跳转到页面的顶端
      window.scroll(0, 0);
    },
    computed: {}
  }
</script>

<style lang="scss" scoped>
  .discover {
    width: 100%;
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
      .box {
        width: 33vw;
        height: 33vw;
      }
    }
  }
</style>
