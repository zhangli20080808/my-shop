import { CHANGE_LOGIN } from './constants';
import cookies from 'jscookie'

const changeLogin = (value) => ({
	type: CHANGE_LOGIN,
	value
});


export const login = () => {
	return (dispatch, getState, axiosInstance) => {
		return axiosInstance.get('/api/login.json')
			.then((res) => {
				dispatch(changeLogin(true))
			});
	}
}

export const getHeaderInfo = () => {
	return (dispatch, getState, axiosInstance) => {
		let shopId = axiosInstance.defaults.params.shopId
		return axiosInstance.get(`/c/shops/${shopId}`)
			.then((res) => {
				dispatch(changeLogin(res.data.data))
			});
	}
} 