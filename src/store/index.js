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
	  },
	  deleteuserm(state){
		  state.user={};
	  }
  },
  actions: {
	  saveUserInfoAction(content,user){
		  content.commit("saveUserInfo",user);
	  },
	  deleteuser(content){
		  content.commit("deleteuserm")
	  }
  },
  modules: {
  }
})
