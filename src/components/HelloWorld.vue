<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>前端</h3>
    <ul>
      <li><a href="#">vue</a></li>
      
      <li><a href="#">vuex</a></li>
			<li><a href="#">axios</a></li>
			<li><a href="#">element-ui</a></li>
    </ul>
    <h3>后端</h3>
    <ul>
			<li><a href="#">springboot</a></li>
			<li><a href="#">springcloud alibaba oss</a></li>
      <li><a href="#">jwt</a></li>
      <li><a href="#">mybatis</a></li>
      <li><a href="#">shiro</a></li>
      <li><a href="#">es</a></li>
			<li><a href="#">redis</a></li>
			<li><a href="#">docker</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
	  return{
		  
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
