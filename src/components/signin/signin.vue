<template>
	<div class="register-main">
		<div style="margin-top: 20px;">
			<el-row :gutter="10">
				<el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
					<div class="register-main-left">
						<div class="register-main-left-content">
							<h1>发现你感兴趣的文章和有趣的人在一快</h1>
						</div>
					</div>
				</el-col>
				<el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
					<div class="register-main-right">
						<div class="register-main-right-form">
							<el-card class="box-card">
								<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign"
								 :rules="rules" ref="ruleForm">
								<el-form-item label="用户名" prop="username">
									<el-input v-model="formLabelAlign.username" placeholder="输入你的用户名" suffix-icon="el-icon-user" maxlength="10"></el-input>
								</el-form-item>
								<el-form-item label="邮箱" prop="email">
									<el-input v-model="formLabelAlign.email" placeholder="输入你的邮箱" suffix-icon="el-icon-message" maxlength="30"></el-input>
								</el-form-item>
								<el-form-item label="密码" prop="pasword">
									<el-input v-model="formLabelAlign.password" placeholder="输入你的密码" show-password  maxlength="20"></el-input>
								</el-form-item>
								<el-form-item label="验证码" prop="verification">
									<div style="display: flex;">
										<el-input v-model="formLabelAlign.verification" placeholder="验证码"></el-input>
										<el-button type="success" style="margin-left: 10px;" @click="getverification"  :loading="siginloadflag">获取验证码</el-button>
									</div>
								</el-form-item>
									<p style="text-align: left;text-indent: 2em;">
										申请的时候请输入正确的邮箱，这样才可以发送验证码到您的邮箱进行注册
									</p>
								<el-button type="success" style="width: 100%;" @click="submitForm('ruleForm')">注册</el-button>
								</el-form>
							</el-card>
							<el-card shadow="never" style="margin-top: 30px;">
								you has account?  
								<span>
									<a href="" style="text-decoration: none;" v-on:click.prevent="gotologin">go to login</a>
								</span>
							</el-card>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import {loginrequest} from '@/util/requestaxiosutil/loginreques'
	export default{
		name:"signin",
		data(){
			return{
				labelPosition: 'right',
				siginloadflag:false,
				formLabelAlign: {
				username: "",
				email: "",
				password: "",
				verification:""
				},
				rules:{
					username:[
						{ required: true, message: '请输入您的用户名', trigger: 'blur' },
						{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }	
					],
					email:[
						{ required: true, message: '请输入您的邮箱', trigger: 'blur' },
						{ min: 10, max: 30, message: '请输入正确的长度（限制不能超过30个字符，最少不能低于6）', trigger: 'blur' },
						{ type: 'email', required: true, message: '请输入正确的日期', trigger: 'change' }
					],
					password:[
						{ required: true, message: '请输入您的密码', trigger: 'blur' },
						{ min: 6, max: 20, message: '长度在 6到 20 个字符', trigger: 'blur' }
					],
					verification:[
						{ required: true, message: '请输入您收到的验证码', trigger: 'blur' },
						{ min: 6, max: 6, message: '请输入正确长度的验证码', trigger: 'blur' }
					]
				}
				
			}
		},
		methods:{
			gotologin(){
				this.$router.push("/loginandsign")
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!');
				} else {
					console.log('error submit!!');
				return false;
				}
			});
			},
			getverification(){
				let verification={};
				verification.email=this.formLabelAlign.email;
				console.log(typeof verification)
				console.log(JSON.stringify(verification))
				console.log(JSON.stringify(verification))
				loginrequest(JSON.stringify(verification))
				.then(res=>{
					console.log("请求到的数据是"+res);
					this.siginloadflag=false;
				}).catch(error=>{
					console.log("恢复倒计时");
					this.siginloadflag=false;
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.register-main{
		width: 100%;
		height: 100%;
		.register-main-left{
			height: 80vh;
			display: flex;
			align-items: center;
			justify-content: center;
			.register-main-left-content{
				height: 70%;
				width: 60%;
			}
		}
		.register-main-right{
			height: 80vh;
			display: flex;
			align-items: center;
			justify-content: center;
			.register-main-right-form{
				// margin-top: -100px;
			}
		}
	}
</style>
