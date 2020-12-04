<template>
	<div>
		<el-row :gutter="10">
					<el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
						<div class="grid-content bg-purple-light">
							.
						</div>
					</el-col>
					<el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
						<div class="grid-content bg-purple">
						<el-card>		
							<el-timeline>
							  <el-timeline-item timestamp="留言板" placement="top">
							    <usermessage></usermessage>
							  </el-timeline-item>
							</el-timeline>
						</el-card>
						</div>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4">
						<div class="grid-content bg-purple-light">
							.
						</div>
					</el-col>
				</el-row>
	</div>
</template>

<script>
	import usermessage from '@/components/messagecomponent/usermessage'
	export default{
		name:"message",
		components:{
			usermessage
		}
	}
</script>

<style>
</style>
