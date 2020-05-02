<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination filmswiper-pagination "></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import "./../../../node_modules/swiper/css/swiper.css"
  export default {
    mounted() {
      new Swiper('.filmswiper', {
        loop: true,
        autoplay: {
          delay:2000
        },
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>
<style scoped>

  .swiper-wrapper {
    width:100%;
    height: 180px;
  }
  .filmswiper-pagination {
   text-align :right;
   height:20px;
  
  }
</style>
