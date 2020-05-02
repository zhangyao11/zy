<template>
  <div>
    <p id="city">城市</p>
    <mt-index-list ref="mylist">
      <mt-index-section :index="data.index" v-for="data in citylist" :key="data.index">
        <div @click="handleClick(city.zip)"  v-for="city in data.list" :key="city.index">
          <mt-cell :title="city.name"></mt-cell>
        </div>           
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
  import axios from "axios"
  import Vue from 'vue'
  import { Indicator } from 'mint-ui';
  import { IndexList, IndexSection } from 'mint-ui';
  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);
  export default {
    data() {
      return {
        citylist: []
      }
    },
    mounted() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
      });
      this.$refs.mylist.$el.style.height = document.documentElement.clientHeight - 50 + 'px';
      axios.get("./../../static/city.json").then(res => {       
        this.citylist = this.handleCity(res.data);
        Indicator.close();
      })
    },
    methods: {
      handleCity(datalist) {
        var letterArr = [];
        for (var i = 65; i < 91; i++) { //26个英文字母
          letterArr.push(String.fromCharCode(i));
        }
        var newlist = [];
        for (var j = 0; j < letterArr.length; j++) {
          var arr = datalist.filter(item => item.pinyin.substring(0, 1) === letterArr[j]);
          //console.log(arr)
          if (arr.length > 0) {
              newlist.push({
              index: letterArr[j],
              list: arr
            })
          }          
        }
        //console.log(newlist);
        return newlist;
      },
      handleClick(id) {
        //console.log(id);
        localStorage.setItem("cityId", id);//存储id以便点击跳转后获取当前城市信息
        this.$router.push("/cinema")
      }
    }
}
</script>
<style scoped >
  div {
    background-color: #FFF6DF;
  }
  #city{
    height:50px;
    width:100%;
    text-align :center;
    line-height :50px;
    z-index :10;
    font-size :30px;
    border-bottom :1px gray solid;
    border-radius :10px;
    color :orange;
  }
</style>
