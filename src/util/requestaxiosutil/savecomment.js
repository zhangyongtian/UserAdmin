import {request} from '@/util/requestaxiosutil/requestaxios'
export const savecomment =data=>{
	return request({
		method:"POST",
		url:"/rememberme/savecomment",
		data
	})
}