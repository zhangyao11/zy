<template>
  <div>
    <swiper :key="imglist.length" ref="myswiper">
      <div class="swiper-slide" v-for="data in imglist" :key="data.id">
             <img :src="data.address" />
      </div>
    </swiper>
    <filmheader :class="isFixed? 'fixed':''"></filmheader>
    <router-view></router-view>   
  </div>
</template>

<script>
  import swiper from "./Film/Swiper"
  import axios from "axios"
  import filmheader from "./Film/Filmheader"
  import { Indicator } from 'mint-ui';
  export default {
    data() {
      return {
        imglist: [],
        isFixed:false
      }
    },
    components: {
      swiper,
      filmheader
    },
    mounted() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      axios.get("./../../static/data2.json").then(res => {       
        this.imglist = res.data.data;
        Indicator.close();
      })
      window.onscroll = this.handleScroll;//监听滚动，不加（）
    },
    beforeDestory() {
      window.onscroll = null;//解绑事件，以免影响其他页面
    },
    methods: {
      handleScroll() {
        if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    background-color: #FFF6DF;
  }
  .swiper-slide {
    height:200px;
  }
  .swiper-slide  img {
    width: 100%;
    height:180px;
  }
</style>
