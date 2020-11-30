import {request} from '@/util/requestaxiosutil/requestaxios'
export const deleteuserlikeblog = data=>{
	return request({
		method:"POST",
		url:"/rememberme/deleteuserlikeblog",
		data
	})
}