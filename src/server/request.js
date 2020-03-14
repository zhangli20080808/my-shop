import axios from 'axios';
import config from '../../config'

// axios.interceptors.request.use(function(config){
//    console.log('1')
//     return config
// })

// axios.interceptors.response.use(function(config){
//     console.log('2')
//     return config
// })

const createInstance = req => {
	let simpleInstant = axios.create({
		baseURL: 'http://212.64.7.78:9091/api',
		// baseURL: 'http://13.210.45.74:9091/api',

		headers: {
			cookie: req.get('cookie') || '',
		},
		params: {
			shopId: req.cookies.shopId
		}
	});
	simpleInstant.interceptors.request.use(config => {
		let token = req.cookies.authorization ? req.cookies.authorization: ''
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config;
	}, error => {  //请求错误处理
		Promise.reject(error)
	})

	simpleInstant.interceptors.response.use(
		response => {  //成功请求到数据
			//这里根据后端提供的数据进行对应的处理
			return response
		},
		error => {  //响应错误处理
			console.log('error');
			console.log(error);
			return Promise.reject(error)
		}
	)
	return simpleInstant
}

export default createInstance;