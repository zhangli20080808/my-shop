import { REGISTER_SUCCESS, ERROR_MSG } from './constants';
const errorMsg = (data) => ({
	type: ERROR_MSG,
	payload: data
})

const registerSuccess = (data) => ({
	type: REGISTER_SUCCESS,
	payload: data
})
// export function registerSuccess(data) {
//     return { type: REGISTER_SUCCESS, payload: data }
// }
export const register = (body) => {
	const params = {
		phone: body.phone,
		fullName: body.fullName,
		password: body.password,
		loginName: body.phone,
		countrys: body.countryCode,
		// shopId:'100169'
	};
	return (dispatch, getState, axiosInstance) => {
		return axiosInstance.post('/c/customers/register', params)
			.then((res) => {
				if (res.data.data) {
					dispatch(registerSuccess(res.data.data))
				} else {
					dispatch(errorMsg(res.data))
				}
			}).catch((err) => {

				let data = { code: 1 }

				// dispatch(errorMsg(data))
			})
	}
} 