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
            <div class="profilePhoto">
              <img class="profilePhoto" src="" alt="">
            </div>

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
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
            </div>
            <div style="display: flex;justify-content: space-between">
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
            </div>
            <div style="display: flex;justify-content: space-between">
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
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
            <div class="profilePhoto">
              <img class="profilePhoto" src="" alt="">
            </div>

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
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
            </div>
            <div style="display: flex;justify-content: space-between">
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
            </div>
            <div style="display: flex;justify-content: space-between">
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
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
      margin-bottom: 8vh;
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
        background: #ff9b97;
      }
    }
  }

</style>
