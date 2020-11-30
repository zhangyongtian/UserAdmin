import {request} from '@/util/requestaxiosutil/requestaxios'
export const getuserlikesandcontent=data=>{
	return request({
		method:"POST",
		url:"/rememberme/getuserlikesandcontent",
		data
	})
}