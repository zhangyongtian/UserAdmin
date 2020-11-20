<template>
	<div class="login_and_sigin">
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:"login",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.login_and_sigin{
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
