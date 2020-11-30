<template>
	<div class="user_conernt_user">
		<el-card class="box-card">
			<div class="user_content">
				<div class="user_conernt_user_l">
					<img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3220314562,1203413086&fm=26&gp=0.jpg" alt="">
				</div>
				<div class="user_conernt_user_r">
					<div>
						<strong>zhang</strong>
						<span v-if="0==0">
							初级
						</span>
						<span v-if="30==0">
							高级
						</span>
						<span v-if="100==0">
							大师
						</span>
					</div>
					<div>
						邮箱
					</div>
				</div>
				
				<div class="user_conernt_user_g">
					<div @click="conerntt">
						<span v-if="conernt" style="font-size: small;color: orange;border: 1px solid ;padding: 5px;border-radius:10px ;">关注+</span>
						<span v-else style="font-size: small;border: 1px solid ;padding: 5px;border-radius:10px ;">取关+</span>
					</div>
				</div>
				
			</div>
		</el-card>
	</div>
</template>

<script>
	export default{
		name:"userconernt",
		data(){
			return{
				conernt:false
			}
		},
		methods:{
			conerntt(){
				this.conernt=!this.conernt;
			}
		}
	}
</script>

<style lang="less">
	.user_content{
		width: 100%;
		display: flex;
		.user_conernt_user_l{
			flex: 1;
			justify-content: center;
			align-items: center;
			&>img{
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
		}
		.user_conernt_user_r{
			flex: 7;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-left: 10px;
		}
		.user_conernt_user_g{
			flex: 2;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
