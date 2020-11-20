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
								<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
									<el-form-item label="用户名">
									<el-input v-model="formLabelAlign.name" placeholder="输入你的用户名"></el-input>
								</el-form-item>
								<el-form-item label="邮箱">
									<el-input v-model="formLabelAlign.region" placeholder="输入你的邮箱"></el-input>
								</el-form-item>
								<el-form-item label="密码">
									<el-input v-model="formLabelAlign.type" placeholder="输入你的密码"></el-input>
								</el-form-item>
								<el-form-item label="验证码">
									<div style="display: flex;">
										<el-input v-model="formLabelAlign.type" placeholder="验证码"></el-input>
										<el-button type="success" style="margin-left: 10px;">获取验证码</el-button>
									</div>
								</el-form-item>
									<p style="text-align: left;text-indent: 2em;">
										申请的时候请输入正确的邮箱，这样才可以发送验证码到您的邮箱进行注册
									</p>
								<el-button type="success" style="width: 100%;">注册</el-button>
								</el-form>
							</el-card>
							<el-card shadow="never">
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
	export default{
		name:"signin",
		data(){
			return{
				labelPosition: 'right',
				formLabelAlign: {
				name: '',
				region: '',
				type: ''
				}
			}
		},
		methods:{
			gotologin(){
				this.$router.push("/loginandsign")
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
				margin-top: -100px;
			}
		}
	}
</style>
