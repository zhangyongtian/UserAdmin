import axios from 'axios'
export const  request=axios.create({
	timeout:20000,
	baseURL:"http://localhost:8089/",
	headers:{'Content-Type':'application/json'}
});
request.interceptors.request.use(
  config => {
    let token=window.localStorage.getItem("usertoken");
    if (token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = token  //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })