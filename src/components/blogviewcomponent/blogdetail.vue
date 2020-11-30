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
							<div style="display: flex;justify-content: flex-start;align-items: center;">
								<span>{{blog.useryonghu.username}}</span>
									<div style="margin: 6px;color: orange;">
										<span v-if="0==blog.useryonghu.userlevel">
											<h6>初级</h6>
										</span>
										<span v-if="30==blog.useryonghu.userlevel">
											<h6>高级</h6>
										</span>
										<span v-if="100==blog.useryonghu.userlevel">
											<h6>大师</h6>
										</span>
									</div>
								<el-button type="warning" size="mini" style="margin-left: 5px;">关注</el-button>
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
					<!-- 赞赏 -->
					<div style="text-align: center;">
						<el-button type="warning" round>打赏</el-button>
					</div>
					<!-- 分类 -->
					<div style="text-align: right;">
						<el-tag
								v-for="item in blog.blogclassfiys"
								:key="item.classfiyid"
								:type="item.type"
								effect="dark" style="margin: 5px;">
							{{ item.classfiyname }}
						</el-tag>
					</div>
					<!-- 标签 -->
					<div style="text-align: right;">
						<el-tag
								v-for="item in blog.blogtags"
								:key="item.tagid"
								:type="item.type"
								effect="dark" style="margin: 5px;">
							{{ item.tagname }}
						</el-tag>
					</div>
					<div style="text-align: left;display: flex;">
						<div style="flex: 1;">
							<img :src="blog.useryonghu.userimage" alt="" style="width: 50px;height: 50px;border-radius:50% ;">
						</div>
						<div style="flex: 9;">
							<el-input
							type="textarea"
							:rows="2"
							placeholder="请输入内容"
							v-model="textarea"
							maxlength="250">
							</el-input>
							<div style="margin-top: 10px;display: flex;justify-content: flex-end;">
								<el-button type="danger" @click="savecomment(nowuserid,blog.id)" :loading="loading">发布</el-button>
								<el-button type="primary" style="margin-left: 10px;" @click="reset">取消</el-button>
							</div>
						</div>
					</div>
					<div style="border-left:10px orange solid ;text-align: left;">
						<h3>全部的评论</h3>
					</div>
					<!-- 评论 -->
					<blogcomment :userAndParenetComent="item" v-for="item in comments"></blogcomment>
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
	import blogcomment from '@/components/blogviewcomponent/blogcomment'
	import {savecomment} from '@/util/requestaxiosutil/savecomment'
	import {showParentComment} from '@/util/requestaxiosutil/showParentComment'
	export default{
		name:"blogDetail",
		created() {
			if(this.$route.params.bloginstoreitem!=-1){
				this.blog=this.$store.state.blogs[this.$route.params.bloginstoreitem];
			}else{
				this.blog=this.$store.state.userlikeblogtemp;
			}
			console.log(this.blog)
			let parentComent={};
			parentComent.blogid=this.$route.params.blogid;
			let rparentComent=JSON.stringify(parentComent);
			
			// 开始加载的时候就是查询评论一次
			showParentComment(rparentComent).then(res=>{
				this.comments=res.data.data;
				console.log(this.comments)
			}).catch(error=>{
				
			})
			
		},
		data(){
			return {
				blog:{},
				textarea:"",
				loading:false,
				comments:[],
				nowuserid:this.$store.state.user.id
			}
		},
		components:{
			blogcomment
		},
		methods:{
			savecomment(userid,blogid){
				let parentComent={};
				parentComent.userid=userid;
				parentComent.blogid=blogid;
				parentComent.comment=this.textarea;
				this.loading=true;
				savecomment(JSON.stringify(parentComent)).then(res=>{
					this.$message({
						message: '恭喜你，发布评论成功',
						type: 'success'
					});
					this.loading=false;
					//发布评论以后就是查找评论并且显示出来
					showParentComment(JSON.stringify(parentComent)).then(res=>{
						this.comments=res.data.data;
					}).catch(error=>{
						
					})
				}).catch(error=>{
					console.log(error)
					this.loading=false;
				})
			},
			reset(){
				this.textarea="";
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
