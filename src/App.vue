<template>
  <div id="app">
    <div class="content-div" >
      <router-view/>
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
  import FooterBar from './components/footer-bar.vue'
  export default {
    name: 'App',
    data(){
      return {
      }
    },
    methods: {

    },
    components: {
      FooterBar
    },
    mounted: function () {

    },
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .content-div {
    /*margin-bottom: 55px;*/
    background: #f3f3f3;
    /*height: 91vh;*/
  }
</style>
