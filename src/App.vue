<template>
  <div id="app">
		<Head></Head>
    <router-view/>
  </div>
</template>
<script>
import Head from '@/components/head/Head.vue'
import {getAllUserLikeBlog} from '@/util/requestaxiosutil/getAllUserLikeBlog.js'
export default{
	components:{
		Head
	},
	mounted(){
		let user=JSON.parse(window.localStorage.getItem("remembermeUser"))||{};
		this.$store.dispatch("saveUserInfoAction",user);
		console.log(user);
		// 下面是获取用户所有喜欢的blogid(就是点过赞的)
		// let user=JSON.parse(window.localStorage.getItem("remembermeUser"))||{};
		let usertemp={};
		usertemp.userid=user.id;
		getAllUserLikeBlog(JSON.stringify(usertemp)).then(res=>{
			let userlikeblog=[];
			let temp=res.data.data;
			temp.forEach(function(item){
				userlikeblog.push(item.blogid);
			})
			this.$store.dispatch("saveUserLikes",userlikeblog);
			console.log(this.$store.state.userlikes)
		}).catch(error=>{
			
		})
	}
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
