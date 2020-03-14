import { CHANGE_LOGIN, CHANGE_LOGUT } from './constants';

const defaultState = {
	shopInfo: {}
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_LOGIN:
			return {
				...state,
				shopInfo: action.value
			}
	
		default:
			return state;
	}
}