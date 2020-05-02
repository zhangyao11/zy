<template>
  <div>
    <div id="hend">
      <div id="cinema">影院</div>
      <hr />
      <div id="city" @click="handleClick()"><i class="iconfont icon-dizhi"></i>城市</div>
      <div id="ticket"><i class="iconfont icon-youhuijuan"></i> 购票</div>
    </div>
    <ul>
      <li v-for="data in datalist" :key="data.id">
        <h3>{{data.name}}</h3>
        <p>地址：{{data.address}}</p>
        <p id="phone">电话：{{data.phone}}</p>
        <a :href="data.url">选座购票</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
  import { Indicator } from 'mint-ui';
export default {
    data() {
      return {
        datalist: []
      }
    },
    mounted() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
      var id = localStorage.getItem("cityId");//获取当前城市id
      axios.get("./../../static/data4.json").then(res => {
        this.datalist = res.data.data;
        Indicator.close();
      })     
    },
    methods: {
      handleClick(id) {
        this.$router.push("/city")
      }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    
  }
  #hend {  
    height: 80px;
    width: 100%;   
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #fff;
    z-index: 10;   
  }
  #cinema {
    height:50px;
    width:100%;
    text-align :center;
    line-height :50px;
    color: orange;
    font-size: 20px;
  }
  #city {
    display :inline-block ;
    float:left ;
    height: 30px;
    width: 50%;
    text-align: center;
    line-height: 30px;
    color: #000;
    font-size: 15px;    
  }
  #city:hover {
    color:orange;
  }
  #ticket {
    display :inline-block ;
    float:right;
    height: 30px;
    width: 50%;
    text-align: center;
    line-height: 30px;
    color: #000;
    font-size: 15px;
  }


  ul li {
    padding: 3px 20px;
    position: relative;
    background-color: #FFF6DF;
  }
  ul li a{
    color:#000;
    font-weight:bold;
    text-decoration :none;
    background-color :orange;
    border-radius :5px;
    position :absolute ;
    top:10px;
    right:10px;
  }
    ul li:first-child a{
      top:90px;
    }
    ul li:first-child {
      padding-top: 80px;
    }
  ul li:last-child {
    padding-bottom :50px;
  }
  a:hover{
    color:orange;
  }
  h3 {
    padding:5px;
    color:#000;
  }
  p{
    font-size :15px;
    color:gray;
    padding:5px;
  }
  #phone {
    border-bottom: 1px gray dashed;
  }
  ul li:last-child #phone  {
    border-bottom :none;
  }
</style>
