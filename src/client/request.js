import axios from 'axios';
import config from '@/config'
import cookies from 'jscookie'
const instance = axios.create({
	baseURL: '/',
	params: {
	}
});


instance.interceptors.request.use(config => {
	let token = cookies.get('authorization') ? cookies.get('authorization') : ''
	// config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	if (token){
		config.headers.Authorization = `Bearer ${token}`
	}
	return config;
}, error => {  //请求错误处理
	Promise.reject(error)
})


instance.interceptors.response.use(
	response => {  //成功请求到数据
		//这里根据后端提供的数据进行对应的处理
		return response

	},
	error => {  //响应错误处理
		return Promise.reject(error)
	}
)
export default instance;