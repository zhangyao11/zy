<template>
  <div>
    <!--声明式导航-->
    
    <ul>
      <router-link to="/film/nowplaying" tag="li" activeClass="myactive">
        <i class="iconfont icon-zhuye"></i>
        film
      </router-link>
      <router-link to="/cinema" tag="li" activeClass="myactive">
        <i class="iconfont icon-shipin"></i>
        cinema
      </router-link>
      <router-link to="/center" tag="li" activeClass="myactive">
        <i class="iconfont icon-zhongxin"></i>
        center
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {


  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myactive{
    color :orange ;
  }
  div{
    position:fixed;
    bottom :0px;
    left:0;
    width:100%;
    height:50px;
    background-color :#fff;
    z-index :10;
  }
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 50px;
    display:flex ;
  }
  ul li {
     flex:1;   
     height:50px;   
     line-height:50px;
     text-align: center;
     list-style: none;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
