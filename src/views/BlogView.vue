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
									v-for="item in items"
									:key="item.label"
									:type="item.type"
									effect="dark" style="margin: 5px;">
								{{ item.label }}
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
									v-for="item in items"
									:key="item.label"
									:type="item.type"
									effect="dark" style="margin: 5px;">
								{{ item.label }}
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
						<blogintroduce></blogintroduce>
						<blogintroduce></blogintroduce>
						<blogintroduce></blogintroduce>
						<blogintroduce></blogintroduce>
						<blogintroduce></blogintroduce>
						<blogintroduce></blogintroduce>
						<blogintroduce></blogintroduce>
						<blogintroduce></blogintroduce>
					</div>
				</el-col>
				<el-col :xs="24" :sm="24" :md="24" :lg="3" :xl="3">
					.
				</el-col>
			</el-row>
		</div>
		
		<!-- 这里是内容的部分 -->
		<div class="blogview_content_c">
				<el-row :gutter="30">
					<el-col :xs="24" :sm="24" :md="24" :lg="3" :xl="3">
						.
						<div class="blogview_content_temp">
							.
						</div>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15">
						
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
						.
					</el-col>
				</el-row>
		</div>
	</div>
</template>

<script>
	import blogintroduce from "@/components/blogviewcomponent/blogintroduce"
	export default{
		name:"blogview",
		data() {
			return {
				items: [
					{ type: '', label: '标签一' },
					{ type: 'success', label: '标签二' },
					{ type: 'info', label: '标签三' },
					{ type: 'danger', label: '标签四' },
					{ type: 'warning', label: '标签五' },
					{ type: 'success', label: '标签二' },
					{ type: 'info', label: '标签三' },
					{ type: 'danger', label: '标签四' },
					{ type: 'warning', label: '标签五' },
					{ type: 'success', label: '标签二' },
					{ type: 'info', label: '标签三' },
					{ type: 'danger', label: '标签四' },
					{ type: 'warning', label: '标签五' }
			]
      }
    },
		components: {
			blogintroduce
		},
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
