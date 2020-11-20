<template>
	<div class="login_main">
		<div style="display: flex;flex-direction: column;margin-top: -100px;">
			<div class="login_logo">
				<img src="@/assets/Homeimgs/homearg.jpg" alt="">
				<!-- 这里就是想图片上传的时候使用的+好 -->
<!-- 				<span><a href="" style="text-decoration: none;">+</a></span> -->
			</div>
			<div class="login_title">
				<h1>Login in Rememberme</h1>
			</div>
			<div class="login_form">
				<el-card class="box-card">
					<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
						<el-form-item label="input you username or email">
							<el-input v-model="formLabelAlign.name" placeholder="输入你的用户名或者邮箱"></el-input>
						</el-form-item>
						<el-form-item label="input you passworld" style="position: relative;">
							<span style="position: absolute;top: -50px;z-index: 9;right: 0px;"><a href="" style="text-decoration: none;">忘记密码？</a></span>
							<el-input v-model="formLabelAlign.region" placeholder="输入你的密码"></el-input>
						</el-form-item>
						<el-button type="success" style="width: 100%;">sign in</el-button>
					</el-form>
				</el-card>
			</div>
			<div class="login_to_signout">
				<el-card shadow="never">
					New to RemeberMe? 
					<span style="color: cornflowerblue">
						<a href="" style="text-decoration: none;" v-on:click.prevent="gotoregister">create an account</a>
					</span>
				</el-card>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"login",
		data(){
			return{
				labelPosition: 'top',
				formLabelAlign: {
				name: '',
				region: '',
				type: ''
				}
			}
		},
		methods:{
			gotoregister(){
				this.$router.push("/loginandsign/register")
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.login_main{
		text-decoration: none;
		.login_logo{
			position:relative;
			&>img{
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
			&>span{
				width: 20px;
				height: 20px;
				background-color: lightgray;
				border-radius: 50%;
				display: block;
				position: absolute;
				right: 52%;
				top: 0px;
				text-align: center;
				line-height: 20px;
			}
		}
		display: flex;
		align-items: center;
		justify-content: center;
		.login_form{
			
			
		}
		.login_to_signout{
			margin-top: 20px;
		}
	}
</style>
