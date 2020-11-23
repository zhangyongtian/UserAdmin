import {request} from '@/util/requestaxiosutil/requestaxios'
export const updatapasswordreq=data=>{
	return request({
		method:"POST",
		url:"/rememberme/updatepassword",
		data
	})
}