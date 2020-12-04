import {request} from '@/util/requestaxiosutil/requestaxios'
const selectMessageanduserPage = data=>{
	return request({
		method:"POST",
		url:"/rememberme/selectMessageanduserPage",
		data
	})
}
export {selectMessageanduserPage}