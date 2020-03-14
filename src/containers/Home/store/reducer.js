import { CHANGE_LIST } from './constants';

const defaultState = {
	newsList: [],
	bannerList:[]
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_LIST:
			return {
				...state,
				bannerList: action.list
			}
		default:
			return state;
	}
}