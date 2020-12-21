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
						
					</div>
					<!-- 标签的部分 -->
					<div class="blogview_content_h_r">
						
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
					
					<!-- 这里是图表，由于服务器的原因以后做 -->
<!-- 					图表部分
					<div class="blogview_content_h_r">
						<el-card class="box-card"  style="text-align: left;margin-top: 30px;">
							<piechart></piechart>
						</el-card>
					</div> -->
				</el-col>
				<el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15">
					<!-- 这里是搜索框 -->
					<el-input placeholder="请输入内容" v-model="search" class="input-with-select" style="margin-bottom: 20px;">
						<el-button slot="append" icon="el-icon-search" @click="searchblog"></el-button>
					</el-input>
					
					
					<div class="blogview_content_h_l">
						<el-carousel :interval="4000" type="card" height="200px">
							<el-carousel-item v-for="item in photos">
								<img :src="item.imgurl" alt="">
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
	
	// 下面是在es上面进行查询
	import {esclientrequest} from '@/util/requestaxiosutil/esclientrequest.js'
	


	export default{
		name:"blogview",
		data() {
			return {
				haveMove:true,
				recommenduser:[],
				photos:[],
				
				// 下面是推荐用户的分页
				userpageNum:1,
				userpageSize:6,
				usertotalpages:-1,
				showmore:true,
				search:"",
				espageNum:1,
				espageSize:6,
				esusertotalpages:-1
				
      }
    },
		components: {
			blogintroduce,
			piechart,
			userconerntuser
		},
		created() {
			this.$store.state.blogs=[];
			let loadingInstance=this.$loading({})
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
					 console.log(res)
					this.$store.dispatch("saveNowPage",res.data.pageNum);
					this.$store.dispatch("saveTotalPage",res.data.totalPages);
					this.$store.dispatch("addBlog",res.data.content);
					loadingInstance.close();
					
				}).catch(error=>{
					
				})
			}

			
			//这里获得推荐的作者
			let userRequest={};
			userRequest.pageNum=this.userpageNum;
			userRequest.pageSize=this.userpageSize;
			getrecommenduser(JSON.stringify(userRequest)).then(res=>{
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
				
				if(this.search==""){
					// 现在要加入分类的id还有标签的id
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
					// 这里加入条件
					pageRequest.nowclassfiy=this.nowclassfiy;
					pageRequest.nowtag=this.nowtag;
					
					let data=JSON.stringify(pageRequest);
					// console.log(data)
					getBlogPageHelper(data).then(res=>{
						// 下面就是保存得到的数据
						this.$store.dispatch("saveNowPage",res.data.pageNum);
						this.$store.dispatch("saveTotalPage",res.data.totalPages);
						this.$store.dispatch("addBlog",res.data.content);
						
					}).catch(error=>{
						
					})
				}else{
					console.log("加载更多")
					//当查找的文字不为空的时候
					if(this.haveMove==true){
						this.espageNum+=this.espageSize;
						let data={};
						data.pageNum=this.espageNum;
						data.pageSize=this.espageSize;
						data.esString=this.search;
						esclientrequest(JSON.stringify(data)).then(res=>{
							
							this.$store.dispatch("saveNowPage",this.espageNum);
							//this.$store.dispatch("saveTotalPage",res.data.totalPages);
							this.$store.dispatch("addBlog",res.data.data);
							if(res.data.data.length==0){
								this.haveMove=false;
							}
						})
					}
					
				}
			},
			getnext(){
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
			},
			searchblog(){
				let data={};
				this.$store.state.blogs=[];
				this.haveMove=true;
				this.espageNum=1;
				this.espageSize=6;
				data.pageNum=this.espageNum;
				data.pageSize=this.espageSize;
				data.esString=this.search;
				esclientrequest(JSON.stringify(data)).then(res=>{
					if(res.data.data.length==0){
						this.haveMove=false;
						return;
					}
					for(let i=0;i<res.data.data.length;i++){
						res.data.data[i].createtime=(new Date(res.data.data[0].createtime)+"").substr(11,20);
					}
					this.$store.dispatch("saveNowPage",this.espageNum);
					//this.$store.dispatch("saveTotalPage",res.data.totalPages);
					this.$store.dispatch("addBlog",res.data.data);
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
