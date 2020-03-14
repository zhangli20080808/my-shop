const config = require('../config/feConfig');
const companyName = config.companyName;
const l2Warehouse = config.l2Warehouse;

const add0 = (m) => {
	return m < 10 ? '0' + m : m
}

/**
 * 日期时间格式化
 * use: formatDate(value * 1000)
 */
exports.formatDate = (timestamp, flag) => {
	if (timestamp) {
		const date = new Date(timestamp);
		const y = date.getFullYear();
		const m = date.getMonth() + 1;
		const d = date.getDate();
		const h = date.getHours();
		const i = date.getMinutes();
		const s = date.getSeconds();
		if (flag) {
			if (flag === 'orderDetail') {
				return y + '-' + add0(m) + '-' + add0(d) + '' + ' ' + add0(h) + ':' + add0(i) + ':' + add0(s);
			}
			return y + '.' + add0(m) + '.' + add0(d) + '' + ' ' + add0(h) + ':' + add0(i) + ':' + add0(s);
		} else {
			return y + '年' + add0(m) + '月' + add0(d) + '日' + ' ' + add0(h) + ':' + add0(i) + ':' + add0(s);
		}
	} else {
		return '';
	}
};


/**
 * 日期时间格式化  CST 转化为标准时间
 * use： formatDateCst(value,'YY-MM-DD hh:mm:ss')
 */
exports.formatDateCst = (stamp, formatString) => {
	var date = new Date(stamp);
	var o = {
		'M+': date.getMonth() + 1,
		'D+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
		'S': date.getMilliseconds()
	};
	if (/(Y+)/.test(formatString)) {
		formatString = formatString.replace(RegExp.$1, (date.getFullYear() + "").substr(2 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(formatString)) {
			formatString = formatString.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
		}
	}
	return formatString;
};

/**
 * 显示和隐藏loading
 */
const showLoading = () => {
	$(".loading-box").show();
}
const hideLoading = () => {
	$(".loading-box").hide();
}

/**
 * 发送ajax请求
 */
exports.sendRequest = (type, data, url, suc, errFunc) => {
	return $.ajax({
		type,
		dataType: "json",
		data,
		url,
		beforeSend: function (XMLHttpRequest) {
			if (type == 'post') showLoading();
		},
		success: function (response) {
			if ($.isFunction(suc)) {
				suc(response);
			}
		},
		error: function (xhr, statusText, err) {
			const json = xhr.responseJSON;
			if (json) {
				const code = json.code;
				if (code && code !== 0) {
					const message = json.message;
					if ($.isFunction(errFunc)) {
						errFunc(message);
					} else {
						alert(message);
					}
				}
			} else {
				console.error('err: ' + err);
				if (err !== 'abort') {
					const msg = '网络异常, 请稍后再试';
					const e = new Error(msg);
					if (errFunc) {
						errFunc(e);
					} else {
						console.log(msg);
					}
				}
			}
		},
		complete: function (XMLHttpRequest, textStatus) {
			hideLoading();
		},
	});
};


/**
 * 手机号码校验
 */
exports.isValidPhone = (phone) => {
	// const myreg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
	// return myreg.test(phone);
	let rule = phone.length === 11 ? true : false;
	return rule;
};

/**
 * 数字
 */
exports.isNumber = (num) => {
	const myreg = /^[0-9]*$/;
	return myreg.test(num);
}

/**
 * 邮箱校验
 */
exports.isValidEmail = (email) => {
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	return myreg.test(email);
};

/**
 * 身份证校验
 */
exports.isValidCard = (idCard) => {

	//15位和18位身份证号码的正则表达式
	var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

	// if (regIdCard.test(idCard)) {//如果通过该验证，说明身份证格式正确，但准确性还需计算
	//   if (idCard.length === 18) {
	//     var idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //前17位加权因子
	//     var idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; //除以11后，可能产生的11位余数 为验证码
	//     var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
	//     for (var i = 0; i < 17; i++) {
	//       idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
	//     }
	//     var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置
	//     var idCardLast = idCard.substring(17).toLowerCase();//得到最后一位身份证号码

	//     if (idCardMod == 2) {//如果等于2，则说明校验码是10，身份证号码最后一位应该是X
	//       return idCardLast == "x";
	//     } else {
	//       return idCardLast == idCardY[idCardMod];//用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
	//     }
	//   }
	// } else {
	//   return false;
	// }

	return regIdCard.test($.trim(idCard));
};

/**
 * 判断用户是否在微信中打开
 */
exports.isWechat = () => /MicroMessenger/i.test(navigator.userAgent);

exports.isEmptyObject = o => {
	if (o === null) return true;
	return Object.keys(o).length === 0;
};

/**
 * 价格处理
 * 俫兔家只展示人民币金额
 */
exports.handdlePrice = (otherPrice, rmbPrice, otherName, rmbName) => {
	if (otherPrice && companyName == l2Warehouse) {
		return '¥ ' + rmbPrice;
	} else if (otherPrice && companyName != l2Warehouse) {
		return otherName + otherPrice + '/' + rmbName + rmbPrice;
	} else {
		return 0;
	}
}

exports.handlePrices = (showCurrencyId,price) =>{
	if(showCurrencyId == 1){
		return 'NZD $ ' + price
	}else if (showCurrencyId == 2){
      return 'RMB ¥ ' + price
    } else {
      return 'AUD $ ' + price
    }
}
exports.getScrollTop = () => {
	let scrollPos;
	if (window.pageYOffset) {
		scrollPos = window.pageYOffset;
	} else if (document.compatMode && document.compatMode != 'BackCompat') {
		scrollPos = document.documentElement.scrollTop;
	} else if (document.body) {
		scrollPos = document.body.scrollTop;
	}
	return scrollPos;
}

/**
 * 获取URL参数
 */
exports.getRequestParams = () => {
	const url = location.search; //获取url中"?"符后的字串
	const theRequest = new Object();
	let str, strs, i;
	if (url.indexOf("?") != -1) {
		str = url.substr(1);
		strs = str.split("&");
		for (i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

/**
 * 只展示前四位和后四位，中间用*号代替
 */
exports.handdleInfo = (val) => {
	const reg = /^(\d{4})(\d*)(\d{4})$/;
	if (val) {
		val = val.replace(reg, function (a, b, c, d) {
			return b + c.replace(/\d/g, "*") + d;
		});
	}
	return val
}


/**
 * 时间转换
 */
const calcTime2End = (sec, flag) => {
	const d = Math.floor(sec / 86400);
	const h = Math.floor(sec % 86400 / 3600);
	const m = Math.floor(sec % 3600 / 60);
	const s = sec % 60;
	if (sec >= 86400 && !flag) {
		return d + '天' + h + '小时' + m + '分' + s + '秒'
	} else if (sec >= 86400 && flag) {
		return d + '天';
	} else if (sec >= 3600) {
		return h + '小时' + m + '分' + s + '秒'
	} else if (sec >= 60) {
		return m + '分' + s + '秒'
	} else {
		return sec + '秒'
	}
}

exports.handdleTimer = (endTime) => {
	let nowTime = Math.round(new Date().getTime() / 1000),
		diffTime = endTime - nowTime;

	if (diffTime > 0) {
		return calcTime2End(diffTime)
	} else {
		return ''
	}
}


exports.getPrimeEndTime = (endTime) => {
	let nowTime = Math.round(Date.now() / 1000),
		diffTime = endTime - nowTime,
		d;

	if (diffTime >= 0) {
		return calcTime2End(diffTime, 'prime');
	} else {
		return '';
	}
}

/**
 * 找出数组中出现次数最多的元素
 */
exports.showMoreData = (arr) => {
	var temp = [];//对象数组
	var i;
	temp[0] = {value: arr[0], index: 1};//保存数组元素出现的次数和值
	arr.sort();
	for (i = 1; i < arr.length; i++) {
		if (arr[i] == arr[i - 1]) {
			temp[temp.length - 1].index++;
		} else {//不相同则新增一个对象元素
			temp.push({index: 1, value: arr[i]});
		}
	}
	temp.sort(function (a, b) {//按照出现次数从大到小排列
		return a.index < b.index;
	})
	var maxV = temp[0].value;

	return maxV;
}


/**
 * 特殊字符转译
 */
exports.escapeJquery = (srcString) => {

	if (!srcString) return;

	// 转义之后的结果
	var escapseResult = srcString;

	// javascript正则表达式中的特殊字符
	var jsSpecialChars = ["\\", " ", "^", "$", "*", "?", ".", "+", "(", ")", "[", "]", "|", "{", "}"];

	// jquery中的特殊字符,不是正则表达式中的特殊字符
	var jquerySpecialChars = ["~", "`", "@", "#", "%", "&", "=", "'", "\"", ":", ";", "<", ">", ",", "/"];

	for (var i = 0; i < jsSpecialChars.length; i++) {
		escapseResult = escapseResult.replace(new RegExp("\\" + jsSpecialChars[i], "g"), "\\" + jsSpecialChars[i]);
	}

	for (var i = 0; i < jquerySpecialChars.length; i++) {
		escapseResult = escapseResult.replace(new RegExp(jquerySpecialChars[i], "g"), "\\" + jquerySpecialChars[i]);
	}

	return escapseResult;
}



/**
 * 汉字
 */
exports.isChineseCharacter = (data) => {
	const myreg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
	return myreg.test(data);
};
