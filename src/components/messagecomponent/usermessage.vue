<template>
	<div class="usermessage_content">
		<el-card>
		  <div class="message_content">
			  <div class="usermessage_content_t">
				  <div style="flex: 1;">
					  <img style="
					  width: 50px;
					  height: 50px;
					  border-radius:50%;" src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3314057510,1219156463&fm=26&gp=0.jpg" alt="">    
				  </div>
					<span style="flex: 1;">zhang</span>
					<span style="flex: 1;">2010/09</span>
			  </div>
			  <div class="usermessage_content_c">
			  		<p>fhksdlkf
					fjksdflkjasdlf
					flkaldjfajdlfjasdf
					fjkajsfjlsdjfljalsfjdl</p>	  
			  </div>
			  <div class="usermessage_content_b">
			  		<span>zhangyong@qq.com</span>	  
			  </div>
		  </div>
		</el-card>
	</div>
</template>

<script>
	export default{
		name:"usermessage"
	}
</script>

<style lang="less">
	.usermessage_content{
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
