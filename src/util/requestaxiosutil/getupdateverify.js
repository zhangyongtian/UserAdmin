import {request} from '@/util/requestaxiosutil/requestaxios'
export const getupdateverify=data=>{
	return request({
		method:"POST",
		url:"/rememberme/getupdateverify",
		data
	})
}