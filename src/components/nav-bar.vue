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
      <ly-tab
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
        items: [
          {
            id: "/navbar/home",
            label: '首页'
          },
          {
            id: "/navbar/clothes",
            label: '服饰箱包'
          },
          {
            id: "/navbar/relaxfood",
            label: '休闲零食'
          },
          {
            id: "/navbar",
            label: '水果生鲜'
          },
          {
            id: "/navbar",
            label: '百货家居'
          },
          {
            id: "/navbar",
            label: '数码家电'
          }
        ],
        options: {
          activeColor: '#ffffff',
        },

      }
    },
    methods: {
      handleChange(item, index){
        this.selectedId = index;
        this.$router.push(item.id);
      }
    },
    mounted: function () {

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
  .ly-tab{
    background-color:#000000;
    color: #ffffff;
  }
  .view{
    position: relative;top: 14vh;margin-bottom: 8vh;
  }
</style>
