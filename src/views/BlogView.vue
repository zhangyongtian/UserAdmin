<template>
	<div class="blogview_content">
		<el-backtop :bottom="100" :visibility-height="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
		}"
		>
		<i class="el-icon-arrow-up"></i>
		</div>
		</el-backtop>
		<!-- 上部分包括轮播 -->
		<div class="blogview_content_h">
			<el-row :gutter="60">
				<el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
					<!-- 分类的部分 -->
					<div class="blogview_content_h_r">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>分类</span>
							</div>
							<el-tag
									v-for="item in BlogClassfiy"
									:key="item.classfiyid"
									effect="dark" style="margin: 5px;" @click="goclassfiy(item.classfiyid)">
								
								<template>
									<span v-if="nowclassfiy==item.classfiyid" style="color: orange;">{{ item.classfiyname }}</span>
									<span v-else>{{ item.classfiyname }}</span>
								</template>
							</el-tag>
						</el-card>
					</div>
					<!-- 标签的部分 -->
					<div class="blogview_content_h_r">
						<el-card class="box-card"  style="text-align: left;margin-top: 30px;">
							<div slot="header" class="clearfix">
								<span>标签</span>
							</div>
							<el-tag
									v-for="item in BlogTags"
									:key="item.tagid"
									:type="item.type"
									effect="dark" style="margin: 5px;" @click="gotag(item.tagid)">
								<template>
									<span v-if="nowtag==item.tagid" style="color: orange;">{{ item.tagname }}</span>
									<span v-else>{{ item.tagname }}</span>
								</template>	
								
							</el-tag>
						</el-card>
					</div>
					<!-- 文章的排行 -->
					<div class="blogview_content_h_r">
						<el-card class="box-card" style="margin-top: 10px;">
						<div slot="header" class="clearfix">
							<span>推荐的作者</span>
							<span style="margin-left: 2px;">{{userpageNum}}/{{usertotalpages}}</span>
							<template>
								<el-button style="float: right; padding: 3px 0" type="text" @click="getnext">下一页>>></el-button>
								<el-button  style="float: right; padding: 3px 0" type="text" @click="getbefault"><<<上一页</el-button>
							</template>
						</div>
						<template v-for="item in recommenduser">
							<userconerntuser :user="item"></userconerntuser>
						</template>
						</el-card>
					</div>
					
					<!-- 图表部分 -->
					<div class="blogview_content_h_r">
						<el-card class="box-card"  style="text-align: left;margin-top: 30px;">
							<piechart></piechart>
						</el-card>
					</div>
				</el-col>
				<el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15">
					
					<div class="blogview_content_h_l">
						<el-carousel :interval="4000" type="card" height="200px">
							<el-carousel-item v-for="item in photos">
								<img :src="item.imgurl" alt=""  :key="item">
							</el-carousel-item>
						</el-carousel>
					</div>
					
					<div class="blogview_content_h_l">
						<template v-for="(blog,item) in blogs">
							<blogintroduce :blog="blog" :item="item" :key="item"></blogintroduce>
						</template>
					</div>
					
					<div>
						<el-button v-if="haveMove" round style="width: 100%;margin-top: 10px;" v-on:click="getmore">加载更多</el-button>
						<h4 v-else>没有更多了</h4>
					</div>
				</el-col>
				<el-col :xs="24" :sm="24" :md="24" :lg="3" :xl="3">
					.
				</el-col>
			</el-row>
		</div>
		
	</div>
</template>

<script>
	import blogintroduce from "@/components/blogviewcomponent/blogintroduce"
	import {getBlogPageHelper} from '@/util/requestaxiosutil/getBlogPageHelper.js'
	import {getAllBlogClassfiy} from '@/util/requestaxiosutil/getAllBlogClassfiy.js'
	import {getAllBlogTags} from '@/util/requestaxiosutil/getAllBlogTags.js'
	import piechart from '@/components/echarts/piechart'
	import {getrecommenduser} from '@/util/requestaxiosutil/getrecommenduser'
	import userconerntuser from '@/components/concerncomponent/userconerntuser'
	
	import {selectPagePhoto} from '@/util/requestaxiosutil/getphoto.js'

	export default{
		name:"blogview",
		data() {
			return {
				BlogClassfiy: [],
				haveMove:true,
				BlogTags:[],
				recommenduser:[],
				photos:[],
				
				// 下面是推荐用户的分页
				userpageNum:1,
				userpageSize:6,
				usertotalpages:-1,
				showmore:true,
				
				
				// 下面是选中的tag还有classfiyid
				nowtag:-1,
				nowclassfiy:-1
				
      }
    },
		components: {
			blogintroduce,
			piechart,
			userconerntuser
		},
		created() {
			if(this.$store.state.blogs.length<1){
				//获得初始的blog数据
				let pageNum=1;
				let pageSize=6;
				let pageRequest={};
				pageRequest.pageNum=pageNum;
				pageRequest.pageSize=pageSize;
				let data=JSON.stringify(pageRequest);
				getBlogPageHelper(data).then(res=>{
					// 下面就是保存得到的数据
					// console.log(res)
					this.$store.dispatch("saveNowPage",res.data.pageNum);
					this.$store.dispatch("saveTotalPage",res.data.totalPages);
					this.$store.dispatch("addBlog",res.data.content);
					
				}).catch(error=>{
					
				})
			}
			// 下面是获得初始的分类
			getAllBlogClassfiy().then(res=>{
				
				this.BlogClassfiy=res.data.data;
			}).catch(error=>{
				console.log("获取blog的分类有错误")
			})
			
			// 下面是获得标签
			getAllBlogTags().then(res=>{
				this.BlogTags=res.data.data;
			}).catch(error=>{
				console.log("获得便签错误")
			})
			
			//这里获得推荐的作者
			let userRequest={};
			userRequest.pageNum=this.userpageNum;
			userRequest.pageSize=this.userpageSize;
			getrecommenduser(JSON.stringify(userRequest)).then(res=>{
				console.log(res)
				this.recommenduser=res.data.data.content;
				this.usertotalpages=res.data.data.totalPages;
			}).catch(error=>{
				
			})
			
			//这里是获取轮播图
			let pageRequest={};
			pageRequest.pageNum=1;
			pageRequest.pageSize=6;
			selectPagePhoto(JSON.stringify(pageRequest)).then(res=>{
				this.photos=res.data.data.content;
			}).catch(error=>{
				
			})
			
		},
		computed:{
			blogs(){
				return this.$store.state.blogs;
			}
		},
		methods:{
			getmore(){
				let pageNum=this.$store.state.nowpage;
				let pageSize=6;
				let pageTotal=this.$store.state.totalpage;
				if(pageNum>pageTotal){
					pageNum-=1;
					this.haveMove=false;
					return;
				}
				let pageRequest={};
				pageRequest.pageNum=pageNum;
				pageRequest.pageSize=pageSize;
				let data=JSON.stringify(pageRequest);
				// console.log(data)
				getBlogPageHelper(data).then(res=>{
					// 下面就是保存得到的数据
					this.$store.dispatch("saveNowPage",res.data.pageNum);
					this.$store.dispatch("saveTotalPage",res.data.totalPages);
					this.$store.dispatch("addBlog",res.data.content);
					
				}).catch(error=>{
					
				})
			},
			goclassfiy(classfiyid){
				console.log("现在的分类的id是"+classfiyid);
				this.nowclassfiy=classfiyid;
			},
			gotag(tagid){
				console.log("现在点击的tagid"+tagid)
				this.nowtag=tagid;
			},
			getnext(){
				console.log("获取更多")
				console.log(this.usertotalpages)
				console.log(this.userpageNum)
				
				if(this.userpageNum==this.usertotalpages){
					return;
				}
				//这里获得推荐的作者
				this.userpageNum++;
				let userRequest={};
				userRequest.pageNum=this.userpageNum;
				userRequest.pageSize=this.userpageSize;
				getrecommenduser(JSON.stringify(userRequest)).then(res=>{
					console.log(res)
					this.recommenduser=res.data.data.content;
				}).catch(error=>{
					
				})
			},
			getbefault(){
				console.log("上一页")
				console.log(this.usertotalpages)
				console.log(this.userpageNum)
				
				if(this.userpageNum==1){
					return;
				}
				//这里获得推荐的作者
				this.userpageNum--;
				let userRequest={};
				userRequest.pageNum=this.userpageNum;
				userRequest.pageSize=this.userpageSize;
				getrecommenduser(JSON.stringify(userRequest)).then(res=>{
					console.log(res)
					this.recommenduser=res.data.data.content;
				}).catch(error=>{
					
				})
			}
		}
	}
</script>

<style lang="less">
	.blogview_content{
		.page-component__scroll{
			width: 100px;
			height: 100px;
		}
		.blogview_content_h{
			margin-top: 3%;
			
			.blogview_content_h_r{
				text-align:left;
			}
		}
		
		.blogview_content_c{
			margin-top: 10px;
		}
	}
</style>
