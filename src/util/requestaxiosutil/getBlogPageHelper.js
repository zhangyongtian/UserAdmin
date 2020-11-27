import {request} from '@/util/requestaxiosutil/requestaxios'
// 提供现在的页码,还有每一页的内容数就可以得到分页的数据
export const getBlogPageHelper=data=>{
	return request({
		method:"POST",
		url:"/rememberme/getBlogPageHelper",
		data
	})
}
