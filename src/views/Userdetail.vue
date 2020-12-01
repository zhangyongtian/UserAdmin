<template>
	<div class="user_detail">
		<el-row :gutter="10">
			<el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
				<div class="grid-content bg-purple-light">
					.
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
				<div class="grid-content bg-purple">
					<el-card class="box-card">
						<div>
							文章数{{totalSize}}:页{{pageNum}}/{{totalPage}}
						</div>
					</el-card>
					<el-card class="box-card">
						
						<div slot="header" class="clearfix">
							<userconerntuser :user="user"></userconerntuser>
						</div>
						<div  class="text item">
							<template v-for="item in blogs">
								<userlikes :blog="item"></userlikes>
							</template>
						</div>
						<div>
							<el-button v-if="canloadmore" round style="margin-top: 10px;width: 100%;" @click="getMoreBlog">加载更多</el-button>
							<span v-else>没有更多了</span>
						</div>
					</el-card>
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4">
				<div class="grid-content bg-purple-light">
					.
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import userlikes from '@/components/concerncomponent/userlikes'
	import {getXinXinById} from '@/util/requestaxiosutil/userconernt'
	import userconerntuser from '@/components/concerncomponent/userconerntuser'
	import {getBlogsByUserId} from '@/util/requestaxiosutil/userconernt'
	
	export default{
		name:"userdetails",
		created() {
			let user={};
			user.id=this.$route.params.userid;
			getXinXinById(JSON.stringify(user)).then(res=>{
				this.user=res.data.data;
				let usertemp={};
				usertemp.pageSize=this.pageSize;
				usertemp.pageNum=this.pageNum;
				// 这里的userid是用户的自增加的id
				usertemp.userid=this.user.id;
				getBlogsByUserId(JSON.stringify(usertemp)).then(res=>{
					this.totalPage=res.data.data.totalPages;
					this.totalSize=res.data.data.totalSize;
					let content=res.data.data.content;
					console.log(res)
					console.log("下面是我的博客的内容")
					for(let index in content){
						this.blogs.push(content[index]);
					}
					console.log("下面是我的博客的内容")
					console.log(this.blog)
				}).catch(error=>{
					
				})
			})
		},
		data(){
			return{
				userid:-1,
				user:{},
				// 下面是请求到的所有的额blog
				blogs:[],
				pageNum:1,
				pageSize:6,
				totalPage:-1,
				totalSize:-1,
				canloadmore:true
			}
		},
		components:{
			userconerntuser,
			userlikes
		},
		methods:{
			getMoreBlog(){
				this.pageNum++;
				let usertemp={};
				usertemp.pageSize=this.pageSize;
				usertemp.pageNum=this.pageNum;
				// 这里的userid是用户的自增加的id
				usertemp.userid=this.user.id;
				getBlogsByUserId(JSON.stringify(usertemp)).then(res=>{
					// 这里判断一下是否还可以加载
					if(this.pageNum>this.totalPage){
						
						this.pageNum--;
						this.canloadmore=false;
						return;
					}
					let content=res.data.data.content;
					console.log(content)
					console.log("下面是我的博客的内容")
					for(let index in content){
						this.blogs.push(content[index]);
					}
					console.log("下面是我的博客的内容")
					console.log(this.blog)
				}).catch(error=>{
					
				})
			}
		}
	}
</script>

<style>
</style>
