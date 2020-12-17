<template>
	<div>
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
			<div v-html="item.soncomment.comment">
		<!-- 		{{item.soncomment.comment}} -->
			</div>
			<div>
				<el-link :underline="false">
					<span @click="thumbsup">
						<span v-if="thumbsUp"style="color: red;" class="icon iconfont icon-iconfontzhizuobiaozhun023148-copy"></span>
						<span v-else  class="icon iconfont icon-iconfontzhizuobiaozhun023148"></span>
					</span>
					{{item.soncomment.zangcount}}</el-link>
				<el-link :underline="false" style="margin-left: 6px;" @click="replay(item.useryonghu.username)">回复</el-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"soncomment",
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			thumbsup(){
				
			}
		},
		data(){
			return{
				thumbsUp:false
			}
		},
		filters:{
			dateFilter(item){
				let pointFlag=item.indexOf(".");
				return item.substring(0,pointFlag).replace("T","  ");
			}
		}
	}
</script>

<style>
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
