import { CHANGE_LOGIN,CHANGE_USERINFO,CHANGE_LOGUT } from './constants';
import { getRedirectPath } from '../../../server/util'

const defaultState = {
    isLogin: false,
    userInfo:null,
    redirectTo:''
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case CHANGE_LOGIN:
            return {
                ...state,
                isLogin: action.payload ? true : false
            }
        case CHANGE_USERINFO:
            return {
                userInfo:action.payload,
                redirectTo: getRedirectPath('home')
            }    
        case CHANGE_LOGUT:
            return {
                userInfo:action.payload ? action.payload :null
            }
        default:
            return state
    }
}