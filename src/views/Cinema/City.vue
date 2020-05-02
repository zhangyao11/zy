<template>
  <div>
    city
   
  </div>
</template>
<script>
  import axios from "axios"
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
      axios.get("./../../../static/city.json").then(res => {
        this.citylist = res.data.data;
      })
    }

}
</script>
