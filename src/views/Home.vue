<template>
  <div class="home">
    <div class="bolg_logo">
			<img alt="Vue logo" src="@/assets/Homeimgs/homearg.jpg">
		</div>
		<div class="dinamic_world">
			<h2>{{dynimicworldtemp}}</h2>
		</div>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
	data(){
		return {
			dynimicworld:"  不要给自己划界限",
			dynimicworldtemp:"不",
			useryongInof:{}
		}
	},
	created(){
		this.dynamicworldmethod()
	},
	methods:{
		dynamicworldmethod(){
			let flag=0;
			let firstshow=setInterval(()=>{
				flag++;
				this.dynimicworldtemp=this.dynimicworld.substr(1,flag)+"|";
				self=this;
				if(flag==this.dynimicworld.length){
					clearInterval(firstshow)
					//这里是文字打完了
					let secondshow=setInterval(()=>{
						flag--;
						this.dynimicworldtemp=this.dynimicworld.substr(1,flag)+"|";
						if(flag==0){
							clearInterval(secondshow);
							this.dynamicworldmethod();
						}
					},200)
				}
			},200);
		}
	},
	// beforeRouteEnter:(to,from,next)=>{
	//     next(vm=>{
	// 		vm.useryongInof=vm.$store.state.user;
	// 	});
	// }
}
</script>
<style lang="less">
	.home{
		.dinamic_world{
			margin-top: 10px;
		}
		.bolg_logo{
			&>img{
				width: 50%;
				margin: auto;
			}
		}
	}
</style>
