<template>
	<div class="blogintroduce_content" v-on:click="showDetail(blog.id,item)">
		<span>{{blog.id}}</span>
		<span>{{item}}</span>
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
						<span>
							{{blog.zangcount}}
						</span>
						<span>
							{{blog.likes}}
						</span>
					</div>
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
				<div class="blogintroduce_content_r">
					<div class="blogintroduce_content_r_t">
						<div class="blogintroduce_content_r_t_l">
							<h2 style="text-align: left;">
								{{blog.title}}
								<span style="line-height:30px;
								 float: right;background: orange;height: 30px;width: 60px;border-radius: 20%;
								 text-align: center;font-size: 15px;">关注+</span>
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
			}
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
