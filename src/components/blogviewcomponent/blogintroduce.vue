<template>
	<div class="blogintroduce_content" v-on:click="showDetail(blog.id,item)">
		<!-- 博客的id还有存储在store里面的index -->
<!-- 		<span>{{blog.id}}</span>
		<span>{{item}}</span> -->
		<el-row :gutter="10">
			<div>
				<div style="display: flex;">
					<div style="flex: 1;display: flex;justify-content: flex-start;align-items: center;">
						<img style="width: 35px;height: 35px;border-radius:50% ;float: left;" :src="blog.useryonghu.userimage" alt="">
						<h3 style="margin-left: 10px;">{{blog.useryonghu.username}}</h3>
					</div>
					<div style="flex: 1;">
						<h6>{{blog.createtime}}</h6>
					</div>
				</div>
			</div>
			<el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
				<div class="blogintroduce_content_l">
					<div class="blogintroduce_content_l_t">
						<img :src="blog.headpic" alt="">
					</div>
					<div class="blogintroduce_content_l_b">
						<span @click.stop="zang">
							<span v-if="thumbsUp"style="color: red;" class="icon iconfont icon-iconfontzhizuobiaozhun023148-copy"></span>
							<span v-else  class="icon iconfont icon-iconfontzhizuobiaozhun023148"></span>  {{blog.zangcount}}
							
							</span>
							<!-- 这里显示的是喜欢，感觉有点多余 -->
<!-- 						<span @click.stop="like">
							<span v-if="likes" style="color: red;" class="icon iconfont icon-zan"></span> 
							<span v-else  class="icon iconfont icon-zan"></span>   {{blog.likes}}
							
						</span> -->
					</div>
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
				<div class="blogintroduce_content_r">
					<div class="blogintroduce_content_r_t">
						<div class="blogintroduce_content_r_t_l">
							<h2 style="text-align: left;">
								{{blog.title}}
							</h2>
						</div>
						<div class="blogintroduce_content_r_t_r">
							
						</div>
					</div>
					<div class="blogintroduce_content_r_c">
						<p style="text-align: left;text-indent: 2em;">
							{{blog.introduce}}
						</p>
					</div>
					<div class="blogintroduce_content_r_b" style="text-align: right;">
						<span style="width: 30px; height: 10px;border:1px solid orange;
						padding: 5px;color: orange;border-radius:10%;margin: 6px;" v-for="item in blog.blogtags">{{item.tagname}}</span>
					</div>
					<div class="blogintroduce_content_r_b" style="text-align: right;">
						<span style="width: 30px; height: 10px;border:1px solid orange;
						padding: 5px;color: orange;border-radius:10%;margin: 6px;" v-for="item in blog.blogclassfiys">{{item.classfiyname}}</span>
					</div>
				</div>
			</el-col>
		</el-row>
		<div class="blogintroduce_content_b">
			
		</div>
	</div>
</template>

<script>
	import {userlikeblog} from "@/util/requestaxiosutil/userlikeblog"
	import {deleteuserlikeblog} from "@/util/requestaxiosutil/deleteuserlikeblog"
	export default{
		name:"blogintroduce",
		props:{
			blog:{
				type:Object,
				default(){
					return {}
				}
			},
			item:{
				type:Number,
				default:0
				
			}
		},
		methods:{
			showDetail(blogid,item){
				this.$router.push({ path: `/blogdetail/${blogid}/${item}` })
			},
			zang(){
				this.thumbsUp=!this.thumbsUp;
				
				if(this.thumbsUp){
					this.blog.zangcount++;
					console.log("喜欢")
					console.log(this.userid);
					console.log(this.blog.id);
					let userlikeblogg={};
					userlikeblogg.userid=this.userid;
					userlikeblogg.blogid=this.blog.id;
					userlikeblog(JSON.stringify(userlikeblogg)).then(res=>{
						console.log(res)
						console.log("成功")
					}).catch(error=>{
						console.log("失败了")
					})
				}else{
					this.blog.zangcount--;
					console.log("不喜欢")
					let userlikeblogg={};
					userlikeblogg.userid=this.userid;
					userlikeblogg.blogid=this.blog.id;
					deleteuserlikeblog(JSON.stringify(userlikeblogg))
					.then(res=>{
						console.log("成功")
					}).catch(error=>{
						console.log("失败了")
					})
				}
				
			}
		},
		data(){
			return {
				thumbsUp:false,
				likes:false,
				userid:this.$store.state.user.id
			}
		},
		created() {
			this.thumbsUp=false;
			this.thumbsUp=this.$store.state.userlikes.indexOf(this.blog.id)>=0;
			console.log(this.$store.state.userlikes.indexOf(this.blog.id)>=0)
		}
	}
</script>

<style lang="less">
	.blogintroduce_content{
		.blogintroduce_content_l{
			height: 100%;
			.blogintroduce_content_l_t{
				
				&>img{
					margin-top: 35px;
					width: 80%;
					height: 100px;
					border-radius: 20%;
				}
			}
			.blogintroduce_content_l_b{
				&>span{
					display: block;
					flex: 1;
				}
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 20px;
			}
		}
		.blogintroduce_content_r{
			.blogintroduce_content_r_t{
				.blogintroduce_content_r_t_l{
				}
			}
		}
		.blogintroduce_content_b{
			border-bottom: 1px solid slategrey;
			margin-top: 10px;
			text-align: right;
		}
		
	}
	.blogintroduce_content_r_b{
		margin-top: 20px;
	}
</style>
