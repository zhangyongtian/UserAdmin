import {request} from '@/util/requestaxiosutil/requestaxios'
export const getAllBlogClassfiy=data=>{
	return request({
		method:"POST",
		url:"/rememberme/getAllBlogClassfiy",
		data
	})
}
