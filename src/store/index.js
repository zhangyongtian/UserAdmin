import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  user:{}
  },
  mutations: {
	  saveUserInfo(state,user){
		  state.user=user;
	  }
  },
  actions: {
	  saveUserInfoAction(content,user){
		  content.commit("saveUserInfo",user);
	  }
  },
  modules: {
  }
})
