import {request} from '@/util/requestaxiosutil/requestaxios'
 const getuserlikesandcontent=data=>{
	return request({
		method:"POST",
		url:"/rememberme/getuserlikesandcontent",
		data
	})
}

// 下面的是用户关注的请求
const savexinxin=data=>{
	return request({
		method:"POST",
		url:"/rememberme/savexinxin",
		data
	})
}

// 下面的是用户关注的请求
const deletexinxin=data=>{
	return request({
		method:"POST",
		url:"/rememberme/deletexinxin",
		data
	})
}

// 查询所有用户关注的用户id
const getAllXinXin=data=>{
	return request({
		method:"POST",
		url:"/rememberme/getAllXinXin",
		data
	})
}

// 查询所有用户关注的用户
const getAllXinXinContent=data=>{
	return request({
		method:"POST",
		url:"/rememberme/getAllXinXinContent",
		data
	})
}
export {getuserlikesandcontent,savexinxin,deletexinxin,getAllXinXin,getAllXinXinContent}