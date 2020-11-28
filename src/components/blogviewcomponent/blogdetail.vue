<template>
	<div class="blogDetail">
		<el-row :gutter="10">
			<el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
				<div>
					.
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
				<div class="blogDetail_cotent">
					<!-- 标题的部分 -->
					<div class="blogDetail_cotent_title">
						<h2>{{blog.title}}</h2>
					</div>
					
					<!-- 显示作者还有就是日期的部分 -->
					<div class="blogDetail_cotent_head">
						<div class="blogDetail_cotent_head_l">
							<img :src="blog.useryonghu.userimage" alt="">
						</div>
						<div class="blogDetail_cotent_head_r">
							<div>
								<span>{{blog.useryonghu.username}}</span>
							</div>
							<div style="display: flex;align-items: flex-end;">
								<span>{{blog.createtime}}</span>
								<span>喜欢{{blog.likes}}</span>
								<span>点赞{{blog.zangcount}}</span>
							</div>
						</div>
					</div>
					<!-- 博客的内容的部分 -->
					<div class="blogDetail_cotent_c typo typo-selection">
						<div v-html="blog.content">
							
						</div>
					</div>
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
				<div>
					.
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script> 
	export default{
		name:"blogDetail",
		created() {
			this.blog=this.$store.state.blogs[this.$route.params.bloginstoreitem]
		},
		data(){
			return {
				blog:{}
			}
		}
	}
</script>

<style lang="less">
	.blogDetail{
		.blogDetail_cotent{
			.blogDetail_cotent_head{
				display: flex;
				.blogDetail_cotent_head_l{
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					&> img{
						width: 50px;
						height: 50px;
						border-radius: 50%;
					}
				}
				
				.blogDetail_cotent_head_r{
					flex: 9;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: center;
				}
			}
		}
	}
</style>
