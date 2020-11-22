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
					<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign"
					:rules="rules" ref="ruleForm">
						<el-form-item label="input you username or email" prop="username" style="text-align: left;">
							<el-input v-model="formLabelAlign.username" placeholder="输入你的用户名或者邮箱"></el-input>
						</el-form-item>
						<el-form-item  prop="password" label="input you passworld" style="position: relative; text-align: left;">
							<span style="position: absolute;top: -50px;z-index: 9;right: 0px;"><a href="" style="text-decoration: none;">忘记密码？</a></span>
							<el-input v-model="formLabelAlign.password" placeholder="输入你的密码" show-password></el-input>
						</el-form-item>
						<el-button type="success" style="width: 100%;" @click="submitForm('ruleForm')">sign in</el-button>
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
	import {siginInrequest} from '@/util/requestaxiosutil/sigInrequest'
	export default{
		name:"login",
		data(){
			return{
				labelPosition: 'top',
				formLabelAlign: {
				username:"",
				password:""
				},
				rules:{
					username:[
						{ required: true, message: '请输入您的用户名'},
						{ min: 3, max: 30, message: '长度在 3 到 30 个字符'}	
					],
					password:[
						{ required: true, message: '请输入您的密码'},
						{ min: 3, max: 30, message: '请输入正确的长度（限制不能超过30个字符,最少不能3个字符）'}
					]
				}
			}
		},
		methods:{
			gotoregister(){
				this.$router.push("/loginandsign/register")
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				if (valid) {
					let user={};
					let type=1;
					if(this.formLabelAlign.username.length>10){
						type=2;
					}
					user.siginType=type;
					user.username=this.formLabelAlign.username;
					user.userpassword=this.formLabelAlign.password;
					let data=JSON.stringify(user);
					console.log(data)
					siginInrequest(data)
					.then(res=>{
						console.log(res)
					})
					.catch(error=>{
						
					})
					// 这里进行登录请求
				} else {
					console.log('error submit!!');
				return false;
				}
			});
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
