<template>
	<div class="usermessage_content">
		<el-card>
		  <div class="message_content">
			  <div class="usermessage_content_t">
				  <div style="flex: 1;">
					  <img style="
					  width: 50px;
					  height: 50px;
					  border-radius:50%;" 
					  :src="messageanduser.useryonghu.userimage" alt="">    
				  </div>
					<span style="flex: 1;">{{messageanduser.useryonghu.username}}</span>
					<span style="flex: 1;">{{messageanduser.useryonghu.createtime|dateFilter}}</span>
			  </div>
			  <div class="usermessage_content_c">
			  		<p>{{messageanduser.message}}</p>	  
			  </div>
			  <div class="usermessage_content_b">
			  		<span>{{messageanduser.useryonghu.useremail}}</span>	  
			  </div>
		  </div>
		</el-card>
	</div>
</template>

<script>
	export default{
		name:"messageanduser",
		props:{
			messageanduser:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		filters:{
			dateFilter(item){
				let pointFlag=item.indexOf(".");
				return item.substring(0,pointFlag).replace("T","  ");
			}
		}
	}
</script>

<style lang="less">
	.usermessage_content{
		margin-top: 10px;
		width: 100%;
		.message_content{
			.usermessage_content_t{
				display: flex;
				justify-content: start;
				align-items: center;	
			}
			.usermessage_content_c{
				
			}
			
			.usermessage_content_b{
				
			}
		}
	}
</style>
