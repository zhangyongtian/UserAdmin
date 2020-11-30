import {request} from '@/util/requestaxiosutil/requestaxios'
export const userlikeblog = data=>{
	return request({
		method:"POST",
		url:"/rememberme/userlikeblog",
		data
	})
}