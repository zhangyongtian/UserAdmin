<template>
	<div class="concern_content">
		<el-tabs type="border-card"  :stretch="true">			
			<el-tab-pane label="赞过的文章">
				<!-- 这里用布局的主要的原因就是把喜欢的博客固定在中间的位置 -->
				<el-row :gutter="10">
					<el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
						<div class="grid-content bg-purple-light">
							.
						</div>
					</el-col>
					<el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
						<div class="grid-content bg-purple">
							<template v-for="item in blogs">
								<userlikes :blog="item"></userlikes>
							</template>
						</div>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4">
						<div class="grid-content bg-purple-light">
							.
						</div>
					</el-col>
				</el-row>

			</el-tab-pane>
			<el-tab-pane label="关注的作者">
				<el-row :gutter="10">
					<el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
						<div class="grid-content bg-purple-light">
							.
						</div>
					</el-col>
					<el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
						<div class="grid-content bg-purple">
							<template v-for="item in xinxin">
								<userconerntuser :user="item"></userconerntuser>
							</template>
						</div>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4">
						<div class="grid-content bg-purple-light">
							.
						</div>
					</el-col>
				</el-row>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	// 获取用户点过赞的博客信息还有相关用户还有分类标签信息
	import {getuserlikesandcontent} from '@/util/requestaxiosutil/userconernt.js'
	import {getAllUserLikeBlog} from '@/util/requestaxiosutil/getAllUserLikeBlog.js'
	import userlikes from '@/components/concerncomponent/userlikes'
	import userconerntuser from '@/components/concerncomponent/userconerntuser'
	
	// 这里就是过得所有的关注的id
	import {getAllXinXin} from '@/util/requestaxiosutil/userconernt'
	// 这里根据关注的id查询所有的用户
	import {getAllXinXinContent} from '@/util/requestaxiosutil/userconernt'
	export default{
		name:"concern",
		components:{
			userlikes,
			userconerntuser
		},
		created() {
			// 由于刷新不知道怎么数据就没有了做一个保险吧
			// 这里是获取用户喜欢的blogid
			let user=JSON.parse(window.localStorage.getItem("remembermeUser"))||{};
			this.$store.dispatch("saveUserInfoAction",user);
			console.log(user);
			// 下面是获取用户所有喜欢的blogid(就是点过赞的)
			// let user=JSON.parse(window.localStorage.getItem("remembermeUser"))||{};
			let usertemp={};
			usertemp.userid=user.id;
			// 这里由于axios是异步的所以这里获取信息的时候要注意
			getAllUserLikeBlog(JSON.stringify(usertemp)).then(res=>{
				console.log(res)
				let userlikeblog=[];
				let temp=res.data.data;
				temp.forEach(function(item){
					userlikeblog.push(item.blogid);
				})
				this.$store.dispatch("saveUserLikes",userlikeblog);
				// 创建的时候加载用户喜欢的博客文章
				this.userlikeblogid=this.$store.state.userlikes;
				// 得到用户喜欢的博客以后进行博客还有用户还有分类标签的整理查询
				let userlikescontent={};
				userlikescontent.userlikesblogid=this.userlikeblogid;
				getuserlikesandcontent(JSON.stringify(userlikescontent)).then(res=>{
					this.blogs=res.data.data;
				}).catch(error=>{
					
				})
				
			}).catch(error=>{
				
			})
			
			
			//这里获取所有关注的作者
			let useryonghu=JSON.parse(window.localStorage.getItem("remembermeUser"))||{};
			let userandxinxin={};
			userandxinxin.userid=useryonghu.id;
			getAllXinXin(JSON.stringify(userandxinxin)).then(res=>{
				let xinxin={};
				xinxin.xinxinids=res.data.data;
				getAllXinXinContent(JSON.stringify(xinxin)).then(res=>{
					// 这里根据关注的id获取到关注的用户
					this.xinxin=res.data.data;
				}).catch(error=>{
					
				})
			}).catch(error=>{
				
			})

			
		},
		data(){
			return{
				userlikeblogid:[],
				blogs:[],
				xinxin:[]
			}
		}
	}
</script>

<style lang="less">
	.concern_content{
	}
</style>
