import {request} from '@/util/requestaxiosutil/requestaxios'
export const siginInrequest = data=>{
	return request({
		method:"POST",
		url:"/rememberme/userSinIn",
		data
	})
}