import {request} from '@/util/requestaxiosutil/requestaxios'
const userlikeblog = data=>{
	return request({
		method:"POST",
		url:"/rememberme/userlikeblog",
		data
	})
}

const getBlogByIdAndUser = data=>{
	return request({
		method:"POST",
		url:"/rememberme/getBlogByIdAndUser",
		data
	})
}
export {userlikeblog,getBlogByIdAndUser}