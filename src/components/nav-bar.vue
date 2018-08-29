<template>
  <div class="home">
    <div>
      <mt-search
        fixed
        v-model="value"
        :result="filterResult"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
      <!--<ly-tab-->
        <!--v-model="selectedId"-->
        <!--:items="items"-->
        <!--@change="handleChange"-->
        <!--:options="options">-->
      <!--</ly-tab>-->
    </div>
    <router-view></router-view>
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
          activeColor: '#1d98bd'
        },

      }
    },
    methods: {
      handleChange(item, index){
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
  .home {
    width: 100%;
    position: fixed;
  }
</style>
