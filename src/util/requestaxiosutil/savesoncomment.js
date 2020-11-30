import {request} from '@/util/requestaxiosutil/requestaxios'
export const savesoncomment =data=>{
	return request({
		method:"POST",
		url:"/rememberme/savesoncomment",
		data
	})
}