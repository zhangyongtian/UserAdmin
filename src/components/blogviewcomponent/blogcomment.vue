<template>
	<div class="blog_comment">
		<div class="blog_comment_content">
			<div class="blog_comment_content_img">
				<img :src="userAndParenetComent.useryonghu.userimage" alt="">
			</div>
			<div class="blog_comment_content_c">
				<span>{{userAndParenetComent.useryonghu.username}} 
				</span>
				<div style="margin:0px;color:orange;display: inline-block;">
					
					<span v-if="0==userAndParenetComent.useryonghu.userlevel">
						等级 初级
					</span>
					<span v-if="30==userAndParenetComent.useryonghu.userlevel">
						等级 高级
					</span>
					<span v-if="100==userAndParenetComent.useryonghu.userlevel">
						等级 大师
					</span>
				</div>
				<span>{{userAndParenetComent.parnetcomment.createtime|dateFilter}}</span>
			</div>
		</div>
		<div class="blog_comment_comment">
			<div class="blog_comment_comment_l">
				
			</div>
			<div class="blog_comment_comment_r">
				<div>
					{{userAndParenetComent.parnetcomment.comment}}
				</div>
				<div>
					<el-link :underline="false">
	<!-- 				<span @click="thumbsup">
						<span v-if="thumbsUp"style="color: red;" class="icon iconfont icon-iconfontzhizuobiaozhun023148-copy"></span>
						<span v-else  class="icon iconfont icon-iconfontzhizuobiaozhun023148"></span>
					</span>	 -->
					<!-- {{userAndParenetComent.parnetcomment.zangcount}} -->
					</el-link>
					<el-link :underline="false" style="margin-left: 6px;" @click="replay(userAndParenetComent.useryonghu.username)">回复</el-link>
				</div>
				<!-- 下面是子评论 -->
				
				<el-timeline>
					<el-timeline-item
						v-for="(item, index) in soncomment"
						:key="index"
						>
						<div class="blog_comment_content" style="margin-top: 10px;">
							<div class="blog_comment_content_img" style="justify-content: flex-start;">
								<img :src="item.useryonghu.userimage" alt="">
							</div>
							<div class="blog_comment_content_c">
								<span>{{item.useryonghu.username}}</span>
								<div style="margin:0px;color:orange;display: inline-block;">
									
									<span v-if="0==item.useryonghu.userlevel">
										等级 初级
									</span>
									<span v-if="30==item.useryonghu.userlevel">
										等级 高级
									</span>
									<span v-if="100==item.useryonghu.userlevel">
										等级 大师
									</span>
								</div>
								<span>{{item.soncomment.createtime|dateFilter}}</span>
							</div>
						</div>
						
						
						<div class="blog_comment_comment_r">
							<div style="display: flex;">
								<div style="flex: 1;">
									
								</div>
								<div style="flex: 9;">
									<div v-html="item.soncomment.comment">
									<!-- 		{{item.soncomment.comment}} -->
										</div>
										<div>
											<el-link :underline="false" style="margin-left: 6px;" @click="replay(item.useryonghu.username)">回复</el-link>
										</div>
								</div>
		
							</div>
						</div>
					</el-timeline-item>
				</el-timeline>
<!-- 				<div v-for="item in soncomment">
					<div class="blog_comment_content" style="margin-top: 10px;">
						<div class="blog_comment_content_img" style="justify-content: flex-start;">
							<img :src="item.useryonghu.userimage" alt="">
						</div>
						<div class="blog_comment_content_c">
							<span>{{item.useryonghu.username}}</span>
							<div style="margin:0px;color:orange;display: inline-block;">
								
								<span v-if="0==item.useryonghu.userlevel">
									等级 初级
								</span>
								<span v-if="30==item.useryonghu.userlevel">
									等级 高级
								</span>
								<span v-if="100==item.useryonghu.userlevel">
									等级 大师
								</span>
							</div>
							<span>{{item.soncomment.createtime}}</span>
						</div>
					</div>
					
					
					<div class="blog_comment_comment_r">
						<div>
							{{item.soncomment.comment}}
						</div>
						<div>
							<el-link :underline="false">赞{{item.soncomment.likes}}</el-link>
							<el-link :underline="false" style="margin-left: 6px;" @click="replay(item.useryonghu.username)">回复</el-link>
						</div>
					</div>
				</div> -->
				
				
				<el-input
				type="textarea"
				:rows="2"
				placeholder="请输入内容"
				v-model="textarea"
				style="margin-top: 10px;"
				maxlength="250"
				>
				
				</el-input>
				<div style="margin-top: 10px;display: flex;justify-content: flex-end;">
					<!-- 提取当前用户的id还有parentblogid -->
					<el-button type="danger" @click="commit(nowuserid,userAndParenetComent.parnetcomment.id)" :loading="loading">发布</el-button>
					<el-button type="primary" style="margin-left: 10px;" @click="reset">取消</el-button>
				</div>
				
				<el-divider></el-divider>
			</div>
		</div>
	</div>
</template>

<script>
	import {savesoncomment} from '@/util/requestaxiosutil/savesoncomment'
	import {showsoncomment} from '@/util/requestaxiosutil/showsoncomment'
	export default{
		name:"blogcomment",
		data(){
			return {
				textarea:"",
				nowuserid:this.$store.state.user.id,
				loading:false,
				soncomment:[],
				textareatemp:"",
				thumbsUp:false
			}
		},
		props:{
			userAndParenetComent:{
				type:Object,
				default(){
					return {
						
					};
				}
			}
		},
		methods:{
			replay(username){
				this.textarea+="#@"+username+"&";
			},
			commit(userid,parentcommentid){
				this.loading=true;
				let comment={};
				comment.parentid=parentcommentid;
				comment.userid=userid;
				this.textareatemp=this.textarea.replace(/#/g,"<span style='color: skyblue;'>");
				this.textareatemp=this.textareatemp.replace(/&/g,"</span>");
				console.log(this.textareatemp)
				comment.comment=this.textareatemp;
				savesoncomment(JSON.stringify(comment)).then(res=>{
					this.loading=false;
					this.$message({
					message: '恭喜你，评论成功',
						type: 'success'
					});
					showsoncomment(JSON.stringify(comment)).then(res=>{
						this.soncomment=res.data.data
					}).catch(error=>{
						console.log("显示子评论错误")
					})
				}).catch(error=>{
					console.log(error)
				})
				
			},
			reset(){
				this.textarea=""
			},
			thumbsup(){
				this.thumbsUp=!this.thumbsUp;
				if(this.thumbsUp){
					this.userAndParenetComent.parnetcomment.zangcount++;
				}else{
					this.userAndParenetComent.parnetcomment.zangcount--;
				}
			}
		},
		created() {
			let comment={};
			comment.parentid=this.userAndParenetComent.parnetcomment.id;
			showsoncomment(JSON.stringify(comment)).then(res=>{
				this.soncomment=res.data.data
			}).catch(error=>{
				console.log("显示子评论错误")
			})
		},
		filters:{
			dateFilter(item){
				let pointFlag=item.indexOf(".");
				return item.substring(0,pointFlag).replace("T","  ");
			}
		}
	}
</script>

<style lang="less">
	.blog_comment{
		.blog_comment_content{
			display: flex;
			justify-content: flex-start;
			.blog_comment_content_img{
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				&>img{
					width: 50px;
					height: 50px;
					border-radius: 50%;
				}
			}
			.blog_comment_content_c{
				flex: 9;
				text-align: left;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
			}
		}
		
		.blog_comment_comment{
			display: flex;
			.blog_comment_comment_l{
				flex: 1;
				
			}
			.blog_comment_comment_r{
				flex: 9;
				text-align: left;
			}
		}
	}
	
</style>
