<template>
  <div>
    <a v-for="data in datalist" v-if="id===data.id" :href="data.url">{{data.directors}}</a>
  </div>
</template>
<script>
  import axios from "axios"
  export default {
    data() {
      return {
        datalist: [ ],
        id:''
      }
    },
    mounted() {
      this. id = this.$route.params.id ,
      axios.get("./../../static/data1.json").then(res => {
        this.datalist = res.data.data;
      })
    },
    menthods: {

    }
  }
</script>
