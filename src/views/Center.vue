<template>
  <div>
    <div id="header">
      <img src="./../../static/img4/touxiang.jpg" />   
      <p id="username">昵称:username</p>
      <p id="lv">等级: lv 5</p>      
    </div>
    <ul>
      <li><i class="iconfont icon-duanxin"></i>我的消息</li>
      <li><i class="iconfont icon-shoucang"></i>我的收藏</li>
      <li><i class="iconfont icon-youhuijuan"></i>我的账户</li>
      <li><i class="iconfont icon-xiai"></i>任务中心</li>
      <li><i class="iconfont icon-anquan"></i>帮助与反馈</li>
      <li><i class="iconfont icon-shezhi"></i>设置</li>
    </ul>
  </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
      if (localStorage.getItem('user')) {
        // 如果localStorage存储不为空 表示用户登录完成 直接放行
        next()
      } else {
        // 用户需要登录
        next({
          path: '/login'
        });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    background-color: #FFF6DF;
  }
  #header {
    width: 100%;
    height: 180px;
    background: url(./../../static/img4/background.jpg);
    background-size :cover;
  }
  #header img {
    width:100px;
    border:1px gray solid;
    border-radius :50%;
    position:absolute ;
    left:25px;
    top:30px;
  }
    #header #username  {
      margin: 5px;
      position: absolute;
      top: 50px;
      left: 150px;
      font-size :15px;
    }
    #header #lv {
      margin: 5px;
      margin-top: 20px;
      position: absolute;
      top: 70px;
      left: 150px;
      font-size: 12px;
      border: 1px #C4C4C4 solid;
      border-radius: 5px;
      background-color: #C4C4C4;
    }
  ul{    
    width:100%;
    list-style :none;
    padding-top:50px;
    padding-bottom:100px;
  }
    ul li {
      height: 40px;
      padding: 4px;
      margin: 0px;
      border-top: 1px gray dashed;
      border-radius: 7px;
      line-height: 40px;
    }
 
</style>
