<template>
 <div>
   <ul>
     <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
     <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
   </ul>
  
 </div>
</template>

<script>

  export default {
   
  }
</script>
<style scoped>
  ul{
    margin:0;
    padding:0;
    display:flex ;
    height:40px;
    width:100%;    
  }
  ul li{
    flex:1;
    height:40px;
    line-height :40px;
    text-align :center;
    background :#fff;
    list-style :none;
    z-index :10;
  }
  .active {
    color: orange;
    border-bottom:2px orange solid;

  }
  .fixed {  /*吸顶效果*/
    position: fixed;
    left: 0;
    top: 0;
    height: 40px;
    width: 100%;
    background: #fff;
  }
</style>
