<template>
  <div class="chooser">
    <div class="color"
         v-for="(item, index) in selectionsData"
         @click="chosenSelection(index)"
         :title="item.label"
         :class="{active:index === nowIndex}">
      {{ item.label }}
    </div>
  </div>
</template>

<script>
  export default {

    props: ['selections'],

    data () {
      return {
        nowIndex: "",
        selectionsData:[]
      }
    },
    methods: {
      chosenSelection (index) {
        this.nowIndex = index
        this.$emit('on-change', this.selections[index])
      }
    },
    mounted: function () {
      var arr = [];
      this.selections.forEach(function (ele, index) {
        var item = {
          label: ele,
          value: index
        }
        arr.push(item);
      })
      this.selectionsData = arr;
    }
  }
</script>

<style scoped>
  .chooser {
    display: flex;
    flex-wrap: wrap;
  }

  .color {
    color: #000000;
    border: 1px solid #000000;
    margin: 6px;
    padding: 4px 10px;
  }

  .color.active {
    border-color: #000000;
    background: #000000;
    color: #fff;
  }
</style>
