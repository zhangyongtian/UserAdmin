<template>
	<div class="uselikes_content" @click="toblogdetail(blog.id,-1)">
	<el-card :body-style="{ padding: '0px' }">
		<div class="uselikes_content_head">
			<div class="uselikes_content_head_l">
				<img :src="blog.useryonghu.userimage" alt="">
				<span>{{blog.useryonghu.username}}</span>
			</div>
			<div class="uselikes_content_head_r">
				<span>{{blog.createtime}}</span>
				<span @click.stop="thumbsup" style="float: right;">
					<span v-if="thumbsUp"style="color: red;" class="icon iconfont icon-iconfontzhizuobiaozhun023148-copy"></span>
					<span v-else  class="icon iconfont icon-iconfontzhizuobiaozhun023148"></span>
				{{blog.zangcount}}
				</span>
			</div>
		</div>
      <div class="uselikes_content_top">
		  <div class="uselikes_content_top_l">
			  <img :src="blog.headpic" class="image">
		  </div>
		  <div class="uselikes_content_top_r">
			  <!-- 这里是内容的部分 -->
			  <div class="uselikes_content_top_r_top">
				  <h3 style="text-align: center;">{{blog.title}}</h3>
				  <p v-text="blog.introduce"></p>
			  </div>
			  <!-- 这里是描述 -->
			  <div class="uselikes_content_top_r_buttom">
				  
			  </div>
		  </div>
	  </div>
      <div  class="uselikes_content_buttom">
        <div class="uselikes_content_buttom_t">
			<span style="border: 1px solid orange;padding: 5px;border-radius: 10px;" v-for="(item,index) in blog.blogclassfiys" :key="index">{{item.classfiyname}}</span>
		</div>
		<div class="uselikes_content_buttom_b">
			<span style="border: 1px solid orange;padding: 5px;border-radius: 10px;" v-for="(item,index) in blog.blogtags" :key="index">{{item.tagname}}</span>
		</div>
	  </div>
		</el-card>
	</div>
</template>

<script>
	import {userlikeblog} from "@/util/requestaxiosutil/userlikeblog"
	import {deleteuserlikeblog} from "@/util/requestaxiosutil/deleteuserlikeblog"
	export default{
		name:"uselikes",
		methods:{
			thumbsup(){
				this.thumbsUp=!this.thumbsUp;
				if(this.thumbsUp){
					this.blog.zangcount++;
					let userlikeblogg={};
					userlikeblogg.userid=this.blog.useryonghu.id;
					userlikeblogg.blogid=this.blog.id;
					userlikeblog(JSON.stringify(userlikeblogg)).then(res=>{
						console.log(res)
						console.log("成功")
					}).catch(error=>{
						console.log("失败了")
					})
				}else{
					this.blog.zangcount--;
					let userlikeblogg={};
					userlikeblogg.userid=this.blog.useryonghu.id;
					userlikeblogg.blogid=this.blog.id;
					deleteuserlikeblog(JSON.stringify(userlikeblogg))
					.then(res=>{
						console.log("成功")
					}).catch(error=>{
						console.log("失败了")
					})
				}
			},
			toblogdetail(blogid,item){
				this.$store.dispatch("saveuserlikeblogtemp",this.blog);
				console.log("==================")
				console.log(this.$store.state.userlikeblogtemp)
				this.$router.push({ path: `/blogdetail/${blogid}/${item}` })
			}
		},
		data(){
			return{
				thumbsUp:false
			}
		},
		props:{
			blog:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		created() {
			this.thumbsUp=this.$store.state.userlikes.indexOf(this.blog.id)>=0;
		}
	}
</script>

<style lang="less">
	.uselikes_content{
		margin-top: 10px;
		.uselikes_content_head{
			display: flex;
			margin: 5px;
			.uselikes_content_head_l{
				flex: 1;
				display: flex;
				justify-content: flex-start;
				&>img{
					width: 20px;
					height: 20px;
					border-radius: 50%;
					margin-left: 5px;
					margin-right: 5px;
				}
			}
			.uselikes_content_head_r{
				flex: 1px;
				text-align: left;
			}
		}
		.uselikes_content_top{
			display: flex;
			.uselikes_content_top_l{
				flex: 3;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 6px;
				&>img{
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
			.uselikes_content_top_r{
				flex: 7;
				.uselikes_content_top_r_top{
					text-align: left;
					text-indent: 2em;
				}
				.uselikes_content_top_r_buttom{
					
				}
			}
		}
		
		.uselikes_content_buttom{
			.uselikes_content_buttom_t{
				text-align: right;
				margin: 15px;
				&>span{
					margin: 5px;
				}
			}
			.uselikes_content_buttom_b{
				margin: 15px;
				text-align: right;
				&>span{
					margin: 5px;
				}
			}
		}
	}
</style>
