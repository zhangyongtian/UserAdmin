import {request} from '@/util/requestaxiosutil/requestaxios'

const selectPagePhoto=data=>{
	return request({
		method:"POST",
		url:"/rememberme/selectPagePhoto",
		data
	})
}

const selectAllPhoto=data=>{
	return request({
		method:"POST",
		url:"/rememberme/selectAllPhoto",
		data
	})
}


export {selectPagePhoto,selectAllPhoto}