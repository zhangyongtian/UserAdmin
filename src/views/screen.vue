<template>
	<div>
		<el-row :gutter="60">
			<el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="3">
				.
			</el-col>
			<el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="18">
				<el-card class="box-card"  style="text-align: left;margin-top: 30px;">
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
				
				<!-- 下面是显示的blog -->
				<template v-for="(blog,item) in blogs">
					<blogintroduce :blog="blog" :item="item" :key="item"></blogintroduce>
				</template>
				
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
</template>

<script>
	import blogintroduce from "@/components/blogviewcomponent/blogintroduce"
	import {getAllBlogClassfiy} from '@/util/requestaxiosutil/getAllBlogClassfiy.js'
	import {getAllBlogTags} from '@/util/requestaxiosutil/getAllBlogTags.js'
	
		// 导入条件查询的模块
	import {selectPageForClassfiy,selectPageForTag} from '@/util/requestaxiosutil/conditional.js'
	export default{
		name:"screen",
		data(){
			return {
				BlogClassfiy:[],
				BlogTags:[],
				nowclassfiy:3,
				nowtag:-1,
				blogs:[],
				pageNum:1,
				pageSize:6,
				pageTotal:-1,
				haveMove:true
			}
			
		},
		created(){
			let loadingInstance=this.$loading({})
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
				//下面是获取信息
				let data={};
				data.pageNum=this.pageNum;
				data.pageSize=this.pageSize;
				data.nowclassfiy=this.nowclassfiy;
				selectPageForClassfiy(JSON.stringify(data)).then(res=>{
					let data=res.data.data;
					console.log(data)
					this.pageTotal=data.totalPages;
					this.blogs=data.content;
					loadingInstance.close();
				})
		},
		methods:{
			goclassfiy(classfiyid){
				let loadingInstance=this.$loading({})
				//这里要处理他们选中的classfiy每点击下就是重新加载新的数据
				// 先删除所有的数据
				// 然后用getBlogPageHelper按条件查找一次
				this.nowclassfiy=classfiyid;
				this.nowtag=-1;	
				this.initblogs();
				//下面是获取信息
				let data={};
				data.pageNum=this.pageNum;
				data.pageSize=this.pageSize;
				data.nowclassfiy=this.nowclassfiy;
				selectPageForClassfiy(JSON.stringify(data)).then(res=>{
					let data=res.data.data;
					console.log(data)
					this.pageTotal=data.totalPages;
					this.blogs=data.content;
					loadingInstance.close();
				})
			},
			gotag(tagid){
				let loadingInstance=this.$loading({})
				//这里是要使用tagid每点击下就是重新加载新的数据
				this.nowtag=tagid;
				this.nowclassfiy=-1;
				
				this.initblogs();
				// 获取信息
				//下面是获取信息
				let data={};
				data.pageNum=this.pageNum;
				data.pageSize=this.pageSize;
				data.nowtag=this.nowtag;
				selectPageForTag(JSON.stringify(data)).then(res=>{
					let data=res.data.data;
					console.log(data)
					this.pageTotal=data.totalPages;
					this.blogs=data.content;
					loadingInstance.close();
				})
				
				
			},
			initblogs(){
				this.pageNum=1;
				this.pageSize=6;
				this.pageTotal=-1;
				this.blogs=[],
				this.haveMove=true;
			},
			getmore(){
				let loadingInstance=this.$loading({})
				if(this.nowclassfiy!=-1){
					loadingInstance.close();
					this.pageNum++;
					if(this.pageNum>this.pageTotal){
						this.pageNum--;
						this.haveMove=false;
						return;
					}
					
					//下面是获取信息
					let data={};
					data.pageNum=this.pageNum;
					data.pageSize=this.pageSize;
					data.nowclassfiy=this.nowclassfiy;
					selectPageForClassfiy(JSON.stringify(data)).then(res=>{
						let data=res.data.data;
						console.log(data)
						this.pageTotal=data.totalPages;
						for(let i=0;i<data.content.length;i++){
							this.blogs.push(data.content[i]);
						}
						loadingInstance.close();
					})
					
				}else{
					this.pageNum++;
					if(this.pageNum>this.pageTotal){
						loadingInstance.close();
						this.pageNum--;
						this.haveMove=false;
						return;
					}
					
					//下面是获取信息
					let data={};
					data.pageNum=this.pageNum;
					data.pageSize=this.pageSize;
					data.nowtag=this.nowtag;
					selectPageForTag(JSON.stringify(data)).then(res=>{
						let data=res.data.data;
						console.log(data)
						this.pageTotal=data.totalPages;
						for(let i=0;i<data.content.length;i++){
							this.blogs.push(data.content[i]);
						}
						loadingInstance.close();
					})
				}
			}
		},
		components:{
			blogintroduce
		}
		
	}
</script>

<style>
</style>
