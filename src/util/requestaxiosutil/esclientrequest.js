import {request} from '@/util/requestaxiosutil/requestaxios'
export const esclientrequest=data=>{
	return request({
		method:"POST",
		url:"/rememberme/blogfromes",
		data
	})
}
