import {request} from '@/util/requestaxiosutil/requestaxios'
export const getblogbyid=data=>{
	return request({
		method:"POST",
		url:"/rememberme/getblogbyid",
		data
	})
}
