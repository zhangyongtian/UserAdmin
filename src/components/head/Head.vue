<template>
  <div>
	  <!-- //这个是左边的隐藏菜单的按钮 -->
	  <el-row class="hidden-lg-and-up">
	     <el-col :span="24">
			 <div class="left_menu" @click="drawer = true">
				 <i class="el-icon-s-unfold" style="font-size: large;"></i>
			 </div>
		 </el-col>
	  </el-row>
	  
	  <!-- 这个是侧边栏 -->
       <el-drawer
         title="我是标题"
         :visible.sync="drawer"
         :with-header="false"
		 :direction="direction">
         <leftmenu></leftmenu>
       </el-drawer>
	   
	  <!-- 这个是下面的tags -->
	  <el-row>
	    <el-col :span="24" class="hidden-md-and-down">
	  		<div class="home_head">
	  			  <div class="home_logo">
	  				  <div>
	  					  <img src="@/assets/Homeimgs/homearg.jpg" alt="">
	  				  </div>
	  				  <h3>zhangyong</h3>
	  			  </div>
	  			  <div class="home_content">
	  			  	  <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
	  			  	    <el-tab-pane label="首页" name="first"></el-tab-pane>
	  			  	    <el-tab-pane label="博文" name="second"></el-tab-pane>
	  			  	    <el-tab-pane label="我的关注" name="third"></el-tab-pane>
	  			  	    <el-tab-pane label="留言" name="four"></el-tab-pane>
	  			  	  	<el-tab-pane label="照片墙" name="five"></el-tab-pane>
	  			  	  	<el-tab-pane label="关于站长" name="six"></el-tab-pane>
	  			  	  	<el-tab-pane label="登录/注册" name="seven"></el-tab-pane>
	  			  	  </el-tabs>
	  			  </div>
	  		</div>
	  	</el-col>
	  </el-row>
  </div>
</template>
<script>
  import Leftmenu from '@/components/head-l-menu/menu.vue'
  export default {
    data() {
      return {
        activeName: 'second',
		drawer: false,
		direction: 'ltr'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
	components:{
		Leftmenu
	}
  };
</script>

<style lang="less">
	.home_head{
		display: flex;
		width: 100%;
		.home_logo{
			flex: 2;
			display: flex;
			justify-content: center;
			align-content: center;
			&>div{
				display: flex;
				justify-content: center;
				align-content: center;
				margin-right: 5px;
			}
			&>div img{
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
		}
		.home_content{
			flex: 9
		}
	}
	.left_menu{
		height: 100px;
		width: 100px;
		text-align: center;
		line-height: 100px;
		&>i::before{
			display: block;
			width: 100px;
			height: 100px;
			font-size: large;
			font-size: xx-large;
			line-height: 100px;
		}	
	}
</style>
