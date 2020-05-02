
<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>


<script>
  import tabbar from './components/Tabbar'
  //import {mapState} from 'vuex' 
  export default {
    components: {
      tabbar
    },
    //computed: { ...mapState( ["isTabbarShow"] ) } //ES6展开合并运算符...
  }
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  html{
    height:100%;
  }  
</style>
