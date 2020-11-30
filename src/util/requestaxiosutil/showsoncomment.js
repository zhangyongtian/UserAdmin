import {request} from '@/util/requestaxiosutil/requestaxios'
export const showsoncomment=data=>{
	return request({
		method:"POST",
		url:"/rememberme/showsoncomment",
		data
	})
}
