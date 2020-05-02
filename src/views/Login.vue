<template>
  <div>  
      <form>
        <p>用户名:<input type="text" placeholder="请输入您的用户名" /></p>
        <p>密码:<input type="password" placeholder="密码" /></p>
        <p id="btn">
          <input id="login" type="button" value='登录' @click="loginHandler()" />
          <input id="reset" type="reset" value="重置" />
         </p> 
      </form>
    </div>   
</template>

<script>
  export default {
    methods: {
      loginHandler() {
        // 登录
        localStorage.setItem('user', { name: this.name, pwd: this.pwd });
        // 跳转到博客页面
        // 编程式导航
        this.$router.push("/center");
      }
    }

  }
</script>


<style scoped>
 div {
    background-color: #FFF6DF;

 }
  form {
    width: 300px;
    height: 300px;
    margin: 100px auto;
    border: 1px gray solid;
    border-radius: 5px;
    background-color: #FFF6DF;
  }
  p {
    margin: 50px auto;
    width: 250px;
    height: 50px;
  }
  #btn {
    text-align:center;
  }
  #login {
    width: 50px;
    height: 30px;
    margin: 10px;
    background-color: #FFF6DF;
  }
  #reset {
    width: 50px;
    height: 30px;
    margin: 10px;
    background-color: #FFF6DF;
  }

</style>
