import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  user:{},
	  blogs:[],
	  nowpage:1,
	  totalpage:0
  },
  mutations: {
	  saveUserInfo(state,user){
		  state.user=user;
	  },
	  deleteuserm(state){
		  state.user={};
	  },
	   // 下面是保存blog的总的页数
	  saveTotalPage(state,totalpage){
		  state.totalpage=totalpage;
	  },
	  // 下面就是保存当前的页数
	  saveNowPage(state,nowPage){
		  state.nowpage=nowPage;
	  },
	  // 下面是添加blogs
	  addBlog(state,blogs){
		  blogs.forEach(blog=>{
			 state.blogs.push(blog); 
			 
		  })
		  
		  state.nowpage+=1;
	  }
	  
  },
  actions: {
	  saveUserInfoAction(content,user){
		  content.commit("saveUserInfo",user);
	  },
	  deleteuser(content){
		  content.commit("deleteuserm")
	  },
	  // 下面是保存blog的总的页数
	  saveTotalPage(content,totalpage){
		  content.commit("saveTotalPage",totalpage);
	  },
	  
	  // 下面就是保存当前的页数
	  saveNowPage(content,nowPage){
	  	content.commit("saveNowPage",nowPage);
	  },
	  
	  // 下面是添加blogs
	  addBlog(content,blogs){
	  	content.commit("addBlog",blogs)
	  }
  },
  modules: {
  }
})
