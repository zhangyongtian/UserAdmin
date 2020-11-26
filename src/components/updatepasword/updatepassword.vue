<template>
	<div class="login_main">
		<div style="display: flex;flex-direction: column;margin-top: -100px;">
			<div class="login_logo">
				<img src="@/assets/Homeimgs/homearg.jpg" alt="">
				<!-- 这里就是想图片上传的时候使用的+好 -->
<!-- 				<span><a href="" style="text-decoration: none;">+</a></span> -->
			</div>
			<div class="login_title">
				<h1>oh you miss the password</h1>
			</div>
			<div class="login_form">
				<el-card class="box-card">
					<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign"
					:rules="rules" ref="ruleForm">
						<el-form-item label="input you email" prop="username" style="text-align: left;">
							<el-input v-model="formLabelAlign.username" placeholder="输入你的用户名或者邮箱"></el-input>
						</el-form-item>
						<el-form-item  prop="password" label="input you new passworld" style="position: relative; text-align: left;">
							<el-input v-model="formLabelAlign.password" placeholder="输入你的密码" show-password></el-input>
						</el-form-item>
						<el-form-item label=""  prop="vertify">
							<div style="display: flex;">
								<el-input v-model="formLabelAlign.vertify" placeholder="验证码" ></el-input>
								<el-button type="success" style="margin-left: 10px;" @click="getverification"  :loading="siginloadflag">获取验证码</el-button>
							</div>
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
	import {getupdateverify} from '@/util/requestaxiosutil/getupdateverify'
	import {updatapasswordreq} from '@/util/requestaxiosutil/updatepassword'
	export default{
		name:"login",
		data(){
			return{
				labelPosition: 'top',
				formLabelAlign: {
				username:"",
				password:"",
				vertify:""
				},
				rules:{
					username:[
						{ required: true, message: '请输入您的用户名'},
						{ min: 3, max: 30, message: '长度在 3 到 30 个字符'}	
					],
					password:[
						{ required: true, message: '请输入您的密码'},
						{ min: 3, max: 30, message: '请输入正确的长度（限制不能超过30个字符,最少不能3个字符）'}
					],
					vertify:[
						{ required: true, message: '请输入您收到的验证码'},
						{ min: 3, max: 7, message: '请输入正确的长度（限制不能超过3个字符,最少不能7个字符）'}
					]
				},
				siginloadflag:false
			}
		},
		methods:{
			gotoregister(){
				this.$router.push("/loginandsign/register")
			},
			submitForm(formName) {
				// 这里是用户登录
				this.$refs[formName].validate((valid) => {
				if (valid) {
					console.log("更改密码")
					let userpassword=this.formLabelAlign.password;
					let useremail=this.formLabelAlign.username;
					let verification=this.formLabelAlign.vertify;
					// 这里进行登录请求
					let user={};
					user.userpassword=userpassword;
					user.useremail=useremail;
					user.verification=verification;
					updatapasswordreq(JSON.stringify(user))
					.then((res)=>{
						// 这里是登录成功
						if(res.data.status==500){
							this.$message({
							    message: res.data.msg,
							    type: 'error'
							 });
							 return;
						}
						this.$message({
						    message: '信息修改成功，快去体验吧',
						    type: 'success'
						 });
						 window.localStorage.removeItem("remembermeUser");
						 window.localStorage.removeItem("usertoken");
						this.$store.dispatch("deleteuser");
						this.$router.push("/loginandsign");
					}).catch((error)=>{
						
					})
					
				} else {
					console.log('error submit!!');
				return false;
				}
			});
			},
			//修改密码
			updatepassword(){
				
			},
			getverification(){
				let userEmail=this.formLabelAlign.username;
				this.siginloadflag=true;
				console.log(userEmail)
				let user={};
				user.useremail=userEmail;
				getupdateverify(JSON.stringify(user))
				.then((res)=>{
					this.$message({
					    message: '验证码发送成功，请及时查收',
					    type: 'success'
					 });
					 this.siginloadflag=false;
					
				}).catch((error)=>{
					this.$message({
					   message: '获取验证码错误',
					  type: 'warning'
					});
					this.siginloadflag=false;
				})
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
