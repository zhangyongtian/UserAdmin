import {request} from '@/util/requestaxiosutil/requestaxios'
export const getAllUserLikeBlog=data=>{
	return request({
		method:"POST",
		url:"/rememberme/getAllUserLikeBlog",
		data
	})
}
