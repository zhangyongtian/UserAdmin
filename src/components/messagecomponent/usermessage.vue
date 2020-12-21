<template>
	<div class="usermessageadmin_content">
		<el-row :gutter="10">
			<el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
				<div>
					.
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
				<template v-for="item in messageAndUser">
					<messageitem :messageanduser="item"></messageitem>
				</template>
				<div style="margin-top: 10px;">
					<el-pagination
				  @size-change="handleSizeChange"
				  @current-change="handleCurrentChange"
				  :current-page="currentPage4"
				  :page-sizes="pageSizes"
				  :page-size="pageSize"
				  layout="total, sizes, prev, pager, next, jumper"
				  :total="total">
				</el-pagination>
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
				<div>
					.
				</div>
			</el-col>
		</el-row>
		
		
		
		
	</div>
</template>

<script>
	import messageitem from "@/components/messagecomponent/messageitem"
	import {selectMessageanduserPage} from "@/util/requestaxiosutil/messagerequest"
	export default{
		name:"usermessage",
		components:{
			messageitem
		},
		methods: {
      handleSizeChange(val) {
        this.pageSize=val;
		this.getAllMessageAndUser(this.currentPage4,this.pageSize);
		
      },
      handleCurrentChange(val) {
        this.currentPage4=val;
		this.getAllMessageAndUser(this.currentPage4,this.pageSize);
      },
	  getAllMessageAndUser(pageNum,pageSize){
		  let loadingInstance=this.$loading({})
		  let pageRequest={};
		  pageRequest.pageNum=pageNum;
		  pageRequest.pageSize=pageSize;
		  selectMessageanduserPage(JSON.stringify(pageRequest)).then(res=>{
		  	let data=res.data.data;
		  	this.currentPage4=data.pageNum;
		  	this.pageSize=data.pageSize;
		  	this.total=data.totalSize;
			this.messageAndUser=data.content;
			loadingInstance.close();
		  }).catch(error=>{
		  	
		  })
	  }
    },
    data() {
      return {
        currentPage4: 1,
		pageSizes:[10, 20, 30, 100],
		pageSize:10,
		total:400,
		messageAndUser:[]
      };
    },
	created(){
		
		this.getAllMessageAndUser(this.currentPage4,this.pageSize);
		
	}
	}
</script>

<style lang="less">
	
</style>
