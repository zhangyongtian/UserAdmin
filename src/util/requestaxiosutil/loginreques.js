import {request} from '@/util/requestaxiosutil/requestaxios'
export const loginrequest=data => {
	return request({
		method:"POST",
		url:"/rememberme/getVerificationToEmail",
		data
	})
};
