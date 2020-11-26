<template>
	<div class="blogintroduce_content">
		<el-row :gutter="10">
			<el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
				<div class="blogintroduce_content_l">
					<div class="blogintroduce_content_l_t">
						<img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1606393262&di=79ffbb0e9d9d48cb0e6d363f95c1b12a&src=http://img.kttpdq.com/pic/7/4226/599f58390d0e7355.jpg" alt="">
					</div>
					<div class="blogintroduce_content_l_b">
						<span>
							作者
						</span>
						<span>
							点赞
						</span>
						<span>
							喜欢
						</span>
					</div>
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
				<div class="blogintroduce_content_r">
					<div class="blogintroduce_content_r_t">
						<div class="blogintroduce_content_r_t_l">
							<h2 style="text-align: left;">
								文章的标题
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
							2020年9月30日 美桌网为您提供海贼王图片,海贼王图片大全,精心为您挑选最新海贼王图片、最全海贼王图片,欢迎来到美桌网图片库。
							2020年9月30日 美桌网为您提供海贼王图片,海贼王图片大全,精心为您挑选最新海贼王图片、最全海贼王图片,欢迎来到美桌网图片库。
						</p>
					</div>
					<div class="blogintroduce_content_r_b" style="text-align: right;">
						<span style="width: 30px; height: 10px;border:1px solid orange;
						padding: 5px;color: orange;border-radius:10%;margin: 6px;">前端开发</span>
						<span style="width: 30px; height: 10px;border:1px solid orange;
						padding: 5px;color: orange;border-radius:10%;margin: 6px;">前端开发</span>
						<span style="width: 30px; height: 10px;border:1px solid orange;
						padding: 5px;color: orange;border-radius:10%;margin: 6px;">前端开发</span>
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
		name:"blogintroduce"
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
</style>
