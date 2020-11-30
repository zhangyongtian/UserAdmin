import {request} from '@/util/requestaxiosutil/requestaxios'
export const showParentComment=data=>{
	return request({
		method:"POST",
		url:"/rememberme/showParentComment",
		data
	})
}
