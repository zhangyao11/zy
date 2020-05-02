import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

 const store=new Vuex.Store({
  state: {
    //自定义自选状态
    comingList:[]

  },
  mutations: {
    comingListMutation(state,data) {
        state.comingList = data;
    }
  },
  actions: {
    //异步处理
    getComingListAction(store) {
      axios.get("./../static/data3.json").then(res => {
        console.log(res.data.data);
        store.commit("comingListMutation",res.data.data)
      })
    }
  }
})
export default store
