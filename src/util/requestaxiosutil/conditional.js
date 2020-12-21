import {request} from '@/util/requestaxiosutil/requestaxios'
const selectPageForClassfiy = data=>{
	return request({
		method:"POST",
		url:"/rememberme/selectPageForClassfiy",
		data
	})
}

const selectPageForTag = data=>{
	return request({
		method:"POST",
		url:"/rememberme/selectPageForTag",
		data
	})
}
export {selectPageForClassfiy,selectPageForTag}