import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  user:{},
	  blogs:[],
	  nowpage:1,
	  totalpage:0,
	  userlikes:[],
	  userlikeblogtemp:{}
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
	  },
	  saveUserLikes(state,userlikes){
		  state.userlikes=userlikes;
	  },
	  deleteUserlikes(state){
		  state.userlikes=[]
	  },
	  // 这里是用户喜欢的博客中间的一个传递值
	  saveuserlikeblogtemp(state,userlikeblog){
		  state.userlikeblogtemp=userlikeblog;
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
	  },
	  // 下面是保存用户喜欢的所有的博客id
	  saveUserLikes(content,userlikes){
		  content.commit("saveUserLikes",userlikes);
	  },
	  deleteUserlikes(content){
		  content.commit("deleteUserlikes");
	  },
	  saveuserlikeblogtemp(content,saveuserlikeblogtemp){
		  content.commit("saveuserlikeblogtemp",saveuserlikeblogtemp)
	  }
  },
  modules: {
  }
})
