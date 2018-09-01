<template>
  <div class="chooser">
    <div class="color"
         v-for="(item, index) in selections"
         @click="chosenSelection(index)"
         :title="item.label"
         :class="{active:index === nowIndex}">
      {{ item.label }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      selections: {
        type: Array,
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    data () {
      return {
        nowIndex: 0
      }
    },
    methods: {
      chosenSelection (index) {
        this.nowIndex = index
        this.$emit('on-change', this.selections[index])
      }
    }
  }
</script>

<style scoped>
  .chooser{
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
