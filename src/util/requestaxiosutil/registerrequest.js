import {request} from '@/util/requestaxiosutil/requestaxios'
export const registerrequest =data=>{
	return request({
		method:"POST",
		url:"/rememberme/userrigister",
		data
	})
}