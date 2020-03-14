// 纯函数 完全根据你传递的信息跳转地址
export function getRedirectPath(type) {
    // 根据用户信息 返回跳转地址
    let url = ''
    if (type.fullName) {
        url += 'login'
    }else if(type == 'home'){
        url = '/'
    }
    return url
}
exports.isTimeoutErr = err => {
    const {code, message} = err;
    return code === 'ETIMEDOUT' || code === 'EHOSTUNREACH' || message.indexOf('timeout') > -1;
  };