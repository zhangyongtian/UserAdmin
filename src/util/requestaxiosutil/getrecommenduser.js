import {request} from '@/util/requestaxiosutil/requestaxios'
export const getrecommenduser = data=>{
	return request({
		method:"POST",
		url:"/rememberme/getrecommenduser",
		data
	})
}