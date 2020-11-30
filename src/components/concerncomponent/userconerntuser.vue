<template>
	<div class="user_conernt_user" @click="toconerntdetail">
		<el-card class="box-card">
			<div class="user_content">
				<div class="user_conernt_user_l">
					<img :src="user.userimage" alt="">
				</div>
				<div class="user_conernt_user_r">
					<div>
						<strong>{{user.username}}</strong>
						<span style="color: orange;" v-if="0==user.userlevel">
							初级
						</span>
						<span style="color: orange;" v-if="30==user.userlevel">
							高级
						</span>
						<span style="color: orange;" v-if="100==user.userlevel">
							大师
						</span>
					</div>
					<div>
						{{user.useremail}}
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
	// 下面都是操作关注的
	import {savexinxin} from '@/util/requestaxiosutil/userconernt'
	import {deletexinxin} from '@/util/requestaxiosutil/userconernt'
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
				if(!this.conernt){
					console.log("关注");
					let user=JSON.parse(window.localStorage.getItem("remembermeUser"))||{};
					let userandxinxin={};
					userandxinxin.userid=user.id;
					userandxinxin.xinxinid=this.user.id;
					
					console.log(JSON.stringify(userandxinxin))
					savexinxin(JSON.stringify(userandxinxin)).then(res=>{
						console.log(res)
					}).catch(error=>{
						
					})
				}else{
					console.log("取消关注");
					let user=JSON.parse(window.localStorage.getItem("remembermeUser"))||{};
					let userandxinxin={};
					userandxinxin.userid=user.id;
					userandxinxin.xinxinid=this.user.id;
					deletexinxin(JSON.stringify(userandxinxin)).then(res=>{
						console.log(res)
					}).catch(error=>{
						
					})
					console.log("取注")
				}
			},
			toconerntdetail(){
				// this.$router.push({ path: `/blogdetail/${blogid}/${item}` })
				this.$router.push({path:`/Userdetail/${this.user.id}`})
			}
		},
		props:{
			user:{
				type:Object,
				default(){
					return{}
				}
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
