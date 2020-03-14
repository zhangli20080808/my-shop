import { REGISTER_SUCCESS, ERROR_MSG } from './constants';
import { getRedirectPath } from '../../../server/util'
const defaultState = {
	isAuth: false,
	fullName: 'zl',
	phone: '',
	code: '',
	password: '',
	againPassword: '',
	// 成功后的跳转地址
	redirectTo: '',
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuth: true,
				message: '',
				redirectTo: getRedirectPath(action.payload)
			}
		case ERROR_MSG:
		console.log('2')
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}