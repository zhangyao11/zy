<template>
  <div>
    <ul>
      <li v-for="data in this.$store.state.comingList" :key="data.id">
        <a :href="data.url">
          <img :src="data.cover" alt="加载错误" />
          <h3>{{data.title}}</h3>
          <p>导演：{{data.directors | actorfilter}}</p>
          <p id="actors">主演：{{data.casts | actorfilter}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
 
  import Vue from 'vue'

  Vue.filter("actorfilter", function (data) {
    return data.join(" , ")
  })
  export default {
    data() {
      return {
        datalist:[]
      }
    },
    components: {

    },
    methods: {
     
    },
    mounted(){
     // axios.get("./../../../static/data3.json").then(res => {
     // this.datalist = res.data.data; })
      if (this.$store.state.comingList.length===0) { //发请求
        this.$store.dispatch("getComingListAction")
      } else { //缓存
        //使用缓存数据
      }
    }
  }
</script>
<style scoped>
  div {
    overflow: auto;
  }
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
  }
    ul li {
      padding: 10px;
      overflow: hidden;
      width: 100%;
      height: 150px;
    }
      ul li:last-child {
        padding-bottom: 50px;
      }
      ul li a {
        text-decoration: none;
      }

      ul li img {
        float: left;
        width: 100px;
      }

      ul li h3 {
        margin: 5px;
        padding-left: 120px;
        color: #000;
      }
  h3:hover {
    color: orange;
  }
  p {
    font-size: 15px;
    margin: 10px;
    padding-left: 110px;
    padding-right: 30px;
    color: gray;
  }
  #actors {
    font-size: 12px;
  }
</style>
