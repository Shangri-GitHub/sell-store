<template>
  <div>
    <div class="nav-bar">
      <mt-search
        fixed
        v-model="value"
        :result="filterResult"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
      <!--滚动标题栏-->
      <ly-tab v-if="items.length>0"
              v-model="selectedId"
              :items="items"
              @change="handleChange"
              :options="options">
      </ly-tab>
    </div>
    <router-view class="view"></router-view>


  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.css'
  export default {
    name: '',
    data() {
      return {
        value: "",
        defaultResult: [
          'Apple',
          'Banana',
          'Orange',
          'Durian',
          'Lemon',
          'Peach',
          'Cherry',
          'Berry',
          'Core',
          'Fig',
          'Haw',
          'Melon',
          'Plum',
          'Pear',
          'Peanut',
          'Other'
        ],
        selectedId: 0,
        items: [],
        options: {
          activeColor: '#ffffff',
        },
      }
    },
    methods: {
      handleChange(item, index){
        this.$store.state.index = index;
        this.$router.push(item.path);
      }
    },
    beforeMount: function () {
      this.selectedId = this.$store.state.index;
    },
    mounted: function () {
      var that = this;
      that.$http.get('buyer/product/list', {}).then(function (res) {
        res.data.data.forEach(function (ele) {
          var item = {
            path: ele.path,
            label: ele.name
          }
          that.items.push(item);
        })
      })
    },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    width: 100%;
    position: fixed;
    z-index: 1;
  }

  .ly-tab {
    background-color: #000000;
    color: #ffffff;
  }

  .view {
    position: relative;
    top: 90px;
    margin-bottom: 55px;
    background: #f3f3f3;
    /*overflow: auto;*/
    /*height: 77vh;*/
    /*overflow-scrolling: touch;*/
    /*-webkit-overflow-scrolling: touch;*/
    /*margin-bottom: 9vh;*/
  }
</style>
