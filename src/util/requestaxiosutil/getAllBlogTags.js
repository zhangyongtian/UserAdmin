import {request} from '@/util/requestaxiosutil/requestaxios'
export const getAllBlogTags=data=>{
	return request({
		method:"POST",
		url:"/rememberme/getAllBlogTags",
		data
	})
}
