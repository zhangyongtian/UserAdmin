import axios from 'axios'
export const  request=axios.create({
	timeout: 1000,
	baseURL:"http://localhost:8089/",
	headers:{'Content-Type':'application/json'}
});