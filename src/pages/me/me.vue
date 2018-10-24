<template>
  <div class="me">
    <div class="box">
      <div class="panel">
        <i class="fa fa-envelope-o email" aria-hidden="true">
          <mt-badge class="badge" size="small" type="error">10</mt-badge>
        </i>
        <i @click="setting" style="color: #ffffff;font-size: 3vh" class="fa fa-cog setting" aria-hidden="true"></i>
      </div>
      <div style="display: flex;height:20vh;align-items: center;">
          <img @click="userinfo" class="photo" src="../../assets/images/discover/red/red.jpg" alt="">
        <div style="color: #ffcb73;right: 10%;position: absolute">
          <img src=""/>
          黄金会员 {{openId}}
        </div>
      </div>
    </div>
    <div style="margin-bottom: 15px">
      <mt-cell
        title="我的订单" to="//github.com" is-link value="所有订单">
      </mt-cell>
      <div class="order">
        <div class="order-list">
          <i class="fa fa-credit-card  fa-2x" aria-hidden="true"></i>
          <div class="text">待付款</div>
        </div>
        <div class="order-list">
          <i class="fa fa-file-text-o  fa-2x" aria-hidden="true"></i>
          <div class="text">待发货</div>
        </div>
        <div class="order-list">
          <i class="fa fa-truck fa-2x" aria-hidden="true"></i>
          <div class="text">待收货</div>
        </div>
        <div class="order-list">
          <i class="fa fa-calendar-check-o  fa-2x" aria-hidden="true"></i>
          <div class="text">交易成功</div>
        </div>
        <div class="order-list">
          <i class="fa fa-history  fa-2x" aria-hidden="true"></i>
          <div class="text">退款/售后</div>
        </div>
      </div>
    </div>
    <div>
      <mt-cell
        title="会员中心" to="//github.com" is-link value="">
      </mt-cell>
      <mt-cell
        title="优惠券" to="//github.com" is-link value="10张">
      </mt-cell>
      <mt-cell
        title="我的收藏" to="//github.com" is-link value="">
      </mt-cell>
      <mt-cell
        title="帮助与客服" to="//github.com" is-link>
      </mt-cell>
    </div>

    <div style="margin-top: 15px">
      <mt-cell title="给我评分" label="描述信息" is-link></mt-cell>
    </div>

  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.min.css'
  export default {
    name: '',
    data() {
      return {
        value: "",
        openId:''
      }
    },
    methods: {
      userinfo(){
        this.$router.push("/userinfo")
      },
      setting(){
        this.$router.push("/setting")
      }
    },
    mounted: function () {
      this.openId = getCookie('openId');


    }


  }

  function getCookie(name) {
    var arr;
    var reg = new RegExp('(^| )' +name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  }
</script>

<style lang="scss" scoped>
  .me {
    background: #f3f3f3;
    .order {
      display: flex;
      background: #fff;
      justify-content: space-between;
      padding: 3% 6%;
      .order-list {
        text-align: center;
        color: #575757;
        .text {
          color: #636363;
          font-size: 0.8rem;
        }
      }
    }
    .box {
      height: 25vh;
      background: #000;
      .panel {
        display: flex;
        height: 5vh;
        .email {
          color: #ffffff;
          font-size: 3vh;
          left: 4%;
          top: 2%;
          position: absolute;
          .badge {
            color: #ffffff;
            font-size: 1.3vh;
            position: relative;
            left: -10px;
            top: -10px;
          }
        }
        .setting {
          color: #ffffff;
          font-size: 3vh;
          right: 4%;
          top: 2%;
          position: absolute;
        }
      }
      .photo {
        left: 6%;
        width: 10vh;
        height: 10vh;
        border-radius: 5vh;
        background: #fefdff;
        position: absolute;
      }
    }

  }
</style>
