<template>
	<div class="blogview_content">
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
									effect="dark" style="margin: 5px;">
								{{ item.classfiyname }}
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
									effect="dark" style="margin: 5px;">
								{{ item.tagname }}
							</el-tag>
						</el-card>
					</div>
					<!-- 文章的排行 -->
					<div class="blogview_content_h_r">
						<el-card class="box-card"  style="text-align: left;margin-top: 30px;">
							<div slot="header" class="clearfix">
								<span>推荐作者</span>
							</div>
							<div>
								<div style="display: flex;">
									<div style="flex: 3;display: flex;justify-content: center;align-items: center;">
										<img style=" width: 50px;height: 50px;border-radius: 50%;" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606393262&di=79ffbb0e9d9d48cb0e6d363f95c1b12a&src=http://img.kttpdq.com/pic/7/4226/599f58390d0e7355.jpg" alt="">
									</div>
									<div style="flex: 7;">
										<div>
											<h3>发哦的身份罚款<span style="float: right;font-size: 15px;color: orange;">关注+</span></h3>
										</div>
										<div>
											<span>文章78</span>
											<span>文章78</span>
										</div>
									</div>
								</div>
							</div>
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
							<el-carousel-item v-for="item in 6" :key="item">
								<img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606393262&di=79ffbb0e9d9d48cb0e6d363f95c1b12a&src=http://img.kttpdq.com/pic/7/4226/599f58390d0e7355.jpg" alt="">
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

	export default{
		name:"blogview",
		data() {
			return {
				BlogClassfiy: [],
				haveMove:true,
				BlogTags:[]
      }
    },
		components: {
			blogintroduce,
			piechart
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
			}
		}
	}
</script>

<style lang="less">
	.blogview_content{
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
