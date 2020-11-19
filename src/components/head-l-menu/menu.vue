<template>
	<div class="head_left_menu">
		<el-row class="tac" style="min-width: 150px !important;">
		  <el-col :span="24">
		    <div class="login_img">
					<div>
						<img src="@/assets/Homeimgs/homearg.jpg" alt="">
					</div>
				</div>
				<div class="username_a_level">
					<h5>张永</h5>
					<i class="el-icon-s-custom" style="margin-left: 5px;"></i>
				</div>
		    <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose">
		      <el-submenu index="1">
		        <template slot="title">
		          <i class="el-icon-location"></i>
		          <span>主菜单</span>
		        </template>
		        <el-menu-item-group style="text-align:left;">
		          <el-menu-item index="1-1">首页</el-menu-item>
		          <el-menu-item index="1-2">博文</el-menu-item>
							<el-menu-item index="1-3">我的关注</el-menu-item>
							<el-menu-item index="1-4">留言</el-menu-item>
							<el-menu-item index="1-5">照片墙</el-menu-item>
							<el-menu-item index="1-6">关注站长</el-menu-item>
							<el-menu-item index="1-7">登录注册</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		    </el-menu>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less">
	.head_left_menu{
		margin-top: 100px;
		min-width: 150px;
		.login_img{
			width: 80%;
			margin: auto;
			& img{
				width: 50px;
				height: 50px;
				border-radius: 50%;
				display: block;
				margin: 10px;
			}
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.username_a_level{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
