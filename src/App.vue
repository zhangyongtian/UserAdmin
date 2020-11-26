<template>
  <div id="app">
		<Head></Head>
    <router-view/>
  </div>
</template>
<script>
import Head from '@/components/head/Head.vue'
export default{
	components:{
		Head
	},
	mounted(){
		let user=JSON.parse(window.localStorage.getItem("remembermeUser"))||{};
		this.$store.dispatch("saveUserInfoAction",user);
		console.log(user);
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
