/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/Alert.js":
/*!*************************!*\
  !*** ./common/Alert.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Alert = function (_React$Component) {\n\t_inherits(Alert, _React$Component);\n\n\tfunction Alert() {\n\t\t_classCallCheck(this, Alert);\n\n\t\treturn _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));\n\t}\n\n\t_createClass(Alert, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\treturn _jsx(\"div\", {\n\t\t\t\tclassName: \"alert-section\"\n\t\t\t}, void 0, _jsx(\"p\", {}, void 0, this.props.msg));\n\t\t}\n\t}]);\n\n\treturn Alert;\n}(_react2.default.Component);\n\nexports.default = Alert;\n\n//# sourceURL=webpack:///./common/Alert.js?");

/***/ }),

/***/ "./common/common.js":
/*!**************************!*\
  !*** ./common/common.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar config = __webpack_require__(/*! ../config/feConfig */ \"./config/feConfig.js\");\nvar companyName = config.companyName;\nvar l2Warehouse = config.l2Warehouse;\n\nvar add0 = function add0(m) {\n\treturn m < 10 ? '0' + m : m;\n};\n\n/**\n * 日期时间格式化\n * use: formatDate(value * 1000)\n */\nexports.formatDate = function (timestamp, flag) {\n\tif (timestamp) {\n\t\tvar date = new Date(timestamp);\n\t\tvar y = date.getFullYear();\n\t\tvar m = date.getMonth() + 1;\n\t\tvar d = date.getDate();\n\t\tvar h = date.getHours();\n\t\tvar i = date.getMinutes();\n\t\tvar s = date.getSeconds();\n\t\tif (flag) {\n\t\t\tif (flag === 'orderDetail') {\n\t\t\t\treturn y + '-' + add0(m) + '-' + add0(d) + '' + ' ' + add0(h) + ':' + add0(i) + ':' + add0(s);\n\t\t\t}\n\t\t\treturn y + '.' + add0(m) + '.' + add0(d) + '' + ' ' + add0(h) + ':' + add0(i) + ':' + add0(s);\n\t\t} else {\n\t\t\treturn y + '年' + add0(m) + '月' + add0(d) + '日' + ' ' + add0(h) + ':' + add0(i) + ':' + add0(s);\n\t\t}\n\t} else {\n\t\treturn '';\n\t}\n};\n\n/**\n * 日期时间格式化  CST 转化为标准时间\n * use： formatDateCst(value,'YY-MM-DD hh:mm:ss')\n */\nexports.formatDateCst = function (stamp, formatString) {\n\tvar date = new Date(stamp);\n\tvar o = {\n\t\t'M+': date.getMonth() + 1,\n\t\t'D+': date.getDate(),\n\t\t'h+': date.getHours(),\n\t\t'm+': date.getMinutes(),\n\t\t's+': date.getSeconds(),\n\t\t'S': date.getMilliseconds()\n\t};\n\tif (/(Y+)/.test(formatString)) {\n\t\tformatString = formatString.replace(RegExp.$1, (date.getFullYear() + \"\").substr(2 - RegExp.$1.length));\n\t}\n\tfor (var k in o) {\n\t\tif (new RegExp('(' + k + ')').test(formatString)) {\n\t\t\tformatString = formatString.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));\n\t\t}\n\t}\n\treturn formatString;\n};\n\n/**\n * 显示和隐藏loading\n */\nvar showLoading = function showLoading() {\n\t$(\".loading-box\").show();\n};\nvar hideLoading = function hideLoading() {\n\t$(\".loading-box\").hide();\n};\n\n/**\n * 发送ajax请求\n */\nexports.sendRequest = function (type, data, url, suc, errFunc) {\n\treturn $.ajax({\n\t\ttype: type,\n\t\tdataType: \"json\",\n\t\tdata: data,\n\t\turl: url,\n\t\tbeforeSend: function beforeSend(XMLHttpRequest) {\n\t\t\tif (type == 'post') showLoading();\n\t\t},\n\t\tsuccess: function success(response) {\n\t\t\tif ($.isFunction(suc)) {\n\t\t\t\tsuc(response);\n\t\t\t}\n\t\t},\n\t\terror: function error(xhr, statusText, err) {\n\t\t\tvar json = xhr.responseJSON;\n\t\t\tif (json) {\n\t\t\t\tvar code = json.code;\n\t\t\t\tif (code && code !== 0) {\n\t\t\t\t\tvar message = json.message;\n\t\t\t\t\tif ($.isFunction(errFunc)) {\n\t\t\t\t\t\terrFunc(message);\n\t\t\t\t\t} else {\n\t\t\t\t\t\talert(message);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tconsole.error('err: ' + err);\n\t\t\t\tif (err !== 'abort') {\n\t\t\t\t\tvar msg = '网络异常, 请稍后再试';\n\t\t\t\t\tvar e = new Error(msg);\n\t\t\t\t\tif (errFunc) {\n\t\t\t\t\t\terrFunc(e);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tconsole.log(msg);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\tcomplete: function complete(XMLHttpRequest, textStatus) {\n\t\t\thideLoading();\n\t\t}\n\t});\n};\n\n/**\n * 手机号码校验\n */\nexports.isValidPhone = function (phone) {\n\t// const myreg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;\n\t// return myreg.test(phone);\n\tvar rule = phone.length === 11 ? true : false;\n\treturn rule;\n};\n\n/**\n * 数字\n */\nexports.isNumber = function (num) {\n\tvar myreg = /^[0-9]*$/;\n\treturn myreg.test(num);\n};\n\n/**\n * 邮箱校验\n */\nexports.isValidEmail = function (email) {\n\tvar myreg = /^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}$/;\n\treturn myreg.test(email);\n};\n\n/**\n * 身份证校验\n */\nexports.isValidCard = function (idCard) {\n\n\t//15位和18位身份证号码的正则表达式\n\tvar regIdCard = /^(^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[Xx])$)$/;\n\n\t// if (regIdCard.test(idCard)) {//如果通过该验证，说明身份证格式正确，但准确性还需计算\n\t//   if (idCard.length === 18) {\n\t//     var idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //前17位加权因子\n\t//     var idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; //除以11后，可能产生的11位余数 为验证码\n\t//     var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和\n\t//     for (var i = 0; i < 17; i++) {\n\t//       idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];\n\t//     }\n\t//     var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置\n\t//     var idCardLast = idCard.substring(17).toLowerCase();//得到最后一位身份证号码\n\n\t//     if (idCardMod == 2) {//如果等于2，则说明校验码是10，身份证号码最后一位应该是X\n\t//       return idCardLast == \"x\";\n\t//     } else {\n\t//       return idCardLast == idCardY[idCardMod];//用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码\n\t//     }\n\t//   }\n\t// } else {\n\t//   return false;\n\t// }\n\n\treturn regIdCard.test($.trim(idCard));\n};\n\n/**\n * 判断用户是否在微信中打开\n */\nexports.isWechat = function () {\n\treturn (/MicroMessenger/i.test(navigator.userAgent)\n\t);\n};\n\nexports.isEmptyObject = function (o) {\n\tif (o === null) return true;\n\treturn Object.keys(o).length === 0;\n};\n\n/**\n * 价格处理\n * 俫兔家只展示人民币金额\n */\nexports.handdlePrice = function (otherPrice, rmbPrice, otherName, rmbName) {\n\tif (otherPrice && companyName == l2Warehouse) {\n\t\treturn '¥ ' + rmbPrice;\n\t} else if (otherPrice && companyName != l2Warehouse) {\n\t\treturn otherName + otherPrice + '/' + rmbName + rmbPrice;\n\t} else {\n\t\treturn 0;\n\t}\n};\n\nexports.handlePrices = function (showCurrencyId, price) {\n\tif (showCurrencyId == 1) {\n\t\treturn 'NZD $ ' + price;\n\t} else if (showCurrencyId == 2) {\n\t\treturn 'RMB ¥ ' + price;\n\t} else {\n\t\treturn 'AUD $ ' + price;\n\t}\n};\nexports.getScrollTop = function () {\n\tvar scrollPos = void 0;\n\tif (window.pageYOffset) {\n\t\tscrollPos = window.pageYOffset;\n\t} else if (document.compatMode && document.compatMode != 'BackCompat') {\n\t\tscrollPos = document.documentElement.scrollTop;\n\t} else if (document.body) {\n\t\tscrollPos = document.body.scrollTop;\n\t}\n\treturn scrollPos;\n};\n\n/**\n * 获取URL参数\n */\nexports.getRequestParams = function () {\n\tvar url = location.search; //获取url中\"?\"符后的字串\n\tvar theRequest = new Object();\n\tvar str = void 0,\n\t    strs = void 0,\n\t    i = void 0;\n\tif (url.indexOf(\"?\") != -1) {\n\t\tstr = url.substr(1);\n\t\tstrs = str.split(\"&\");\n\t\tfor (i = 0; i < strs.length; i++) {\n\t\t\ttheRequest[strs[i].split(\"=\")[0]] = unescape(strs[i].split(\"=\")[1]);\n\t\t}\n\t}\n\treturn theRequest;\n};\n\n/**\n * 只展示前四位和后四位，中间用*号代替\n */\nexports.handdleInfo = function (val) {\n\tvar reg = /^(\\d{4})(\\d*)(\\d{4})$/;\n\tif (val) {\n\t\tval = val.replace(reg, function (a, b, c, d) {\n\t\t\treturn b + c.replace(/\\d/g, \"*\") + d;\n\t\t});\n\t}\n\treturn val;\n};\n\n/**\n * 时间转换\n */\nvar calcTime2End = function calcTime2End(sec, flag) {\n\tvar d = Math.floor(sec / 86400);\n\tvar h = Math.floor(sec % 86400 / 3600);\n\tvar m = Math.floor(sec % 3600 / 60);\n\tvar s = sec % 60;\n\tif (sec >= 86400 && !flag) {\n\t\treturn d + '天' + h + '小时' + m + '分' + s + '秒';\n\t} else if (sec >= 86400 && flag) {\n\t\treturn d + '天';\n\t} else if (sec >= 3600) {\n\t\treturn h + '小时' + m + '分' + s + '秒';\n\t} else if (sec >= 60) {\n\t\treturn m + '分' + s + '秒';\n\t} else {\n\t\treturn sec + '秒';\n\t}\n};\n\nexports.handdleTimer = function (endTime) {\n\tvar nowTime = Math.round(new Date().getTime() / 1000),\n\t    diffTime = endTime - nowTime;\n\n\tif (diffTime > 0) {\n\t\treturn calcTime2End(diffTime);\n\t} else {\n\t\treturn '';\n\t}\n};\n\nexports.getPrimeEndTime = function (endTime) {\n\tvar nowTime = Math.round(Date.now() / 1000),\n\t    diffTime = endTime - nowTime,\n\t    d = void 0;\n\n\tif (diffTime >= 0) {\n\t\treturn calcTime2End(diffTime, 'prime');\n\t} else {\n\t\treturn '';\n\t}\n};\n\n/**\n * 找出数组中出现次数最多的元素\n */\nexports.showMoreData = function (arr) {\n\tvar temp = []; //对象数组\n\tvar i;\n\ttemp[0] = { value: arr[0], index: 1 }; //保存数组元素出现的次数和值\n\tarr.sort();\n\tfor (i = 1; i < arr.length; i++) {\n\t\tif (arr[i] == arr[i - 1]) {\n\t\t\ttemp[temp.length - 1].index++;\n\t\t} else {\n\t\t\t//不相同则新增一个对象元素\n\t\t\ttemp.push({ index: 1, value: arr[i] });\n\t\t}\n\t}\n\ttemp.sort(function (a, b) {\n\t\t//按照出现次数从大到小排列\n\t\treturn a.index < b.index;\n\t});\n\tvar maxV = temp[0].value;\n\n\treturn maxV;\n};\n\n/**\n * 特殊字符转译\n */\nexports.escapeJquery = function (srcString) {\n\n\tif (!srcString) return;\n\n\t// 转义之后的结果\n\tvar escapseResult = srcString;\n\n\t// javascript正则表达式中的特殊字符\n\tvar jsSpecialChars = [\"\\\\\", \" \", \"^\", \"$\", \"*\", \"?\", \".\", \"+\", \"(\", \")\", \"[\", \"]\", \"|\", \"{\", \"}\"];\n\n\t// jquery中的特殊字符,不是正则表达式中的特殊字符\n\tvar jquerySpecialChars = [\"~\", \"`\", \"@\", \"#\", \"%\", \"&\", \"=\", \"'\", \"\\\"\", \":\", \";\", \"<\", \">\", \",\", \"/\"];\n\n\tfor (var i = 0; i < jsSpecialChars.length; i++) {\n\t\tescapseResult = escapseResult.replace(new RegExp(\"\\\\\" + jsSpecialChars[i], \"g\"), \"\\\\\" + jsSpecialChars[i]);\n\t}\n\n\tfor (var i = 0; i < jquerySpecialChars.length; i++) {\n\t\tescapseResult = escapseResult.replace(new RegExp(jquerySpecialChars[i], \"g\"), \"\\\\\" + jquerySpecialChars[i]);\n\t}\n\n\treturn escapseResult;\n};\n\n/**\n * 汉字\n */\nexports.isChineseCharacter = function (data) {\n\tvar myreg = /^[a-zA-Z\\u4e00-\\u9fa5]+$/;\n\treturn myreg.test(data);\n};\n\n//# sourceURL=webpack:///./common/common.js?");

/***/ }),

/***/ "./config/feConfig.js":
/*!****************************!*\
  !*** ./config/feConfig.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  enableSwitch: true,\n  companyName: 'NZH',\n  warehouseName: {\n    'NZH新西兰保健品直邮': '新西兰直邮仓',\n    'NZH快快仓': '快快仓',\n    'NZH新西兰奶粉直邮': '新西兰直邮RMP奶粉仓',\n    '全球精选仓': '生鲜直邮仓',\n    'NZH澳大利亚直邮': '澳洲直邮仓',\n    1: '新西兰仓',\n    2: '澳洲仓',\n    3: '奶粉仓',\n    1000000: '全球精选仓',\n    1000001: '澳洲直邮仓'\n  },\n  l2Warehouse: 'L2',\n  title: {\n    'NZH': 'NZH - 新西兰最好的代购商服务平台',\n    'L2': '徕兔家 - 把全世界最好的产品带给中国'\n  },\n  keywords: {\n    'NZH': 'NZH、NZHG、新西兰康尔佳、康尔佳、澳新供应链、新西兰NZH、新西兰NZHG、新西兰最好的代购商服务平台',\n    'L2': '徕兔家、徕兔、人人来、bestl2、l2、澳新供应链、把全世界最好的产品带给中国'\n  },\n  description: {\n    'NZH': '无论您身处新西兰还是中国， 不论您喜欢亲自到NZH的门店，还是爱在NZH网站或公众号下单 --- 我们都致力于为您提供同样贴心的购物体验。',\n    'L2': '无论您身处新西兰还是中国， 不论您喜欢亲自到徕兔家的门店，还是爱在徕兔家网站或公众号下单 --- 我们都致力于为您提供同样贴心的购物体验。'\n  },\n  helpMenu: [{ title: '购物条款', subTitle: [{ id: 1, name: '会员注册协议' }, { id: 3, name: '隐私条款' }] }, { title: '购物指南', subTitle: [{ id: 4, name: '身份证上传' }, { id: 5, name: '售后细则' }, { id: 6, name: '线上线下实拍快照' }] }, { title: '新手上路', subTitle: [{ id: 7, name: '客服服务' }, { id: 8, name: '顾客导读' }, { id: 13, name: '新手专区' }] }, { title: '支付配送方式', subTitle: [{ id: 9, name: '关于送货和验货' }, { id: 10, name: '网上支付小贴士' }, { id: 14, name: '配送方式及要求' }] }]\n};\n\n//# sourceURL=webpack:///./config/feConfig.js?");

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  port: 3092,\n  // apiBasePath: '192.168.1.110:9091/api/c/',\n  // apiBasePath: '13.55.124.158:9091/api/c/',\n  apiBasePath: '120.24.4.23:9091/api/c/',\n  appName: 'abillion_c_website',\n  redis: {\n    host: 'localhost',\n    port: 6379,\n    logErrors: true\n  },\n  session_secret: 'AUH'\n};\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./middlewares/remoteData.js":
/*!***********************************!*\
  !*** ./middlewares/remoteData.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\nvar _urllib = __webpack_require__(/*! urllib */ \"urllib\");\n\nvar _urllib2 = _interopRequireDefault(_urllib);\n\nvar _util = __webpack_require__(/*! ../src/server/util */ \"./src/server/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.req2 = function (key, method, params, callback) {\n  params = params || {};\n  var url = _config.apiBasePath + key;\n  _urllib2.default.request(url, {\n    timeout: 60000,\n    method: method || 'get',\n    dataType: 'json',\n    data: params,\n    contentType: 'json'\n  }, function (err, result) {\n    if (err) {\n      if ((0, _util.isTimeoutErr)(err)) {\n        return req(key, method, params, callback);\n      }\n      return callback(err);\n    }\n    if (!result) {\n      return callback(error());\n    }\n    return callback(null, result);\n  });\n};\n\nexports.req = function (key, method, params, callback) {\n  params = params || {};\n  var authorization = params.token;\n  var Headers = {\n    'Content-Type': 'application/json'\n  };\n  if (authorization) {\n    Headers['Authorization'] = 'Bearer ' + authorization;\n  }\n  if (params.token) {\n    delete params.token;\n  }\n  var url = _config.apiBasePath + key;\n  _urllib2.default.request(url, {\n    timeout: 60000,\n    method: method || 'get',\n    dataType: 'json',\n    data: params,\n    headers: Headers\n  }, function (err, result) {\n    if (err) {\n      if ((0, _util.isTimeoutErr)(err)) {\n        return req(key, method, params, callback);\n      }\n      return callback(err);\n    }\n    if (!result) {\n      return callback(error());\n    }\n    var code = result.code,\n        message = result.message;\n\n    var paramsStr = JSON.stringify(params);\n    switch (code) {\n      case 0:\n        return callback(null, result);\n      case 500:\n        //接口系统错误\n        console.error('req ' + url + ' error [' + paramsStr + '] : ' + message);\n        return callback(error(message, code));\n      default:\n        //其他错误，比如下单库存不足\n        console.error('req ' + url + ' error [' + paramsStr + '] : ' + message);\n        return callback(error(message, code));\n    }\n  });\n};\n\n//# sourceURL=webpack:///./middlewares/remoteData.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/components/Header/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/Header/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".style_container_31n_O {\\n\\tbox-sizing: border-box;\\n\\theight: 40px;\\n\\tpadding-top: 9px;\\n\\tborder: 1px solid #ccc;\\n}\\n\\n.style_item_1gapL {\\n\\tdisplay: inline-block;\\n\\tline-height: 22px;\\n\\tcolor: #333;\\n\\ttext-decoration: none;\\n\\tmargin-left: 20px;\\n\\tfont-size: 16px;\\n\\tcursor: pointer;\\t\\n}\\n\\n.style_item_1gapL:hover {\\n\\tcolor: #999;\\n}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"container\": \"style_container_31n_O\",\n\t\"item\": \"style_item_1gapL\"\n};\n\n//# sourceURL=webpack:///./src/components/Header/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/containers/Home/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/containers/Home/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".style_container_1n3kz {\\n\\tmargin-top: 20px;\\n\\tmargin-left: 20px;\\n}\\n\\n.style_item_1Fqg- {\\n\\tline-height: 34px;\\n\\tfont-size: 16px;\\n\\tcolor: #666;\\n}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"container\": \"style_container_1n3kz\",\n\t\"item\": \"style_item_1Fqg-\"\n};\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/containers/Register/style.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/containers/Register/style.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".style_register_1DMco {\\n    margin: 0 20px; }\\n    .style_register_1DMco h2 {\\n      padding-top: 30px; }\\n    .style_register_1DMco .style_login-form_2QQcS {\\n      padding: 30px 40px 10px; }\\n  \\n  .style_registerpage_2BYG_ {\\n    background: #fff;\\n    height: 100%;\\n    position: absolute;\\n    width: 100%; }\\n    .style_registerpageregisterpage_2iBMc .style_get-code_19Xrz {\\n      position: absolute;\\n      z-index: 9;\\n      top: 0;\\n      right: 0;\\n      height: 38px;\\n      line-height: 38px;\\n      min-width: 100px;\\n      text-align: center;\\n      color: #fe5e7a;\\n      font-weight: bold; }\\n    .style_registerpage_2BYG_ .style_get-code-false_2jmzf {\\n      color: #ccc;\\n      cursor: not-allowed; }\\n    .style_registerpage_2BYG_ .style_error5_1QePW {\\n      top: 35px;\\n      left: 0;\\n      width: 100%;\\n      border: 0;\\n      background-color: transparent;\\n      text-align: left; }\\n    .style_registerpage_2BYG_ .style_login-sec2_3LXm1 .style_phone-col_3ykxc {\\n      width: 190px !important;\\n      margin-left: 110px !important; }\\n    .style_registerpage_2BYG_.style_login-sec2_3LXm1 .style_register-style_2t5hc input {\\n      padding-left: 10px !important; }\\n    .style_registerpage_2BYG_ .style_login-sec2_3LXm1 .style_register-btn_279Zp {\\n      display: block;\\n      width: 300px;\\n      height: 38px;\\n      line-height: 38px;\\n      border-radius: 4px;\\n      -moz-border-radius: 4px;\\n      -webkit-border-radius: 4px;\\n      margin: 0 auto 10px !important; }\\n    .style_registerpage_2BYG_ .style_login-sec2_3LXm1 .style_to-login_96ub5 {\\n      text-align: right;\\n      display: block;\\n      text-decoration: underline;\\n      color: #333;\\n      padding-right: 37px;\\n      padding-bottom: 15px; }\\n    .style_registerpage_2BYG_ .style_login_2NnK9 {\\n      margin-top: 0; }\\n  \\n      \", \"\"]);\n\n// exports\nexports.locals = {\n\t\"register\": \"style_register_1DMco\",\n\t\"login-form\": \"style_login-form_2QQcS\",\n\t\"registerpage\": \"style_registerpage_2BYG_\",\n\t\"registerpageregisterpage\": \"style_registerpageregisterpage_2iBMc\",\n\t\"get-code\": \"style_get-code_19Xrz\",\n\t\"get-code-false\": \"style_get-code-false_2jmzf\",\n\t\"error5\": \"style_error5_1QePW\",\n\t\"login-sec2\": \"style_login-sec2_3LXm1\",\n\t\"phone-col\": \"style_phone-col_3ykxc\",\n\t\"register-style\": \"style_register-style_2t5hc\",\n\t\"register-btn\": \"style_register-btn_279Zp\",\n\t\"to-login\": \"style_to-login_96ub5\",\n\t\"login\": \"style_login_2NnK9\"\n};\n\n//# sourceURL=webpack:///./src/containers/Register/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/containers/Translation/style.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/containers/Translation/style.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".style_container_1scoG {\\n\\tmargin-top: 20px;\\n\\tmargin-left: 20px;\\n}\\n\\n.style_item_3L-Ur {\\n\\tline-height: 34px;\\n\\tfont-size: 16px;\\n\\tcolor: #666;\\n}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"container\": \"style_container_1scoG\",\n\t\"item\": \"style_item_3L-Ur\"\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/lib/insertCss.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"babel-runtime/helpers/slicedToArray\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Isomorphic CSS style loader for Webpack\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nvar prefix = 's';\nvar inserted = {};\n\n// Base64 encoding and decoding - The \"Unicode Problem\"\n// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode('0x' + p1);\n  }));\n}\n\n/**\n * Remove style/link elements for specified node IDs\n * if they are no longer referenced by UI components.\n */\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(prefix + id);\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\n/**\n * Example:\n *   // Insert CSS styles object generated by `css-loader` into DOM\n *   var removeCss = insertCss([[1, 'body { color: red; }']]);\n *\n *   // Remove it from the DOM\n *   removeCss();\n */\nfunction insertCss(styles) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === undefined ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === undefined ? false : _ref$prepend;\n\n  var ids = [];\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n\n    var id = moduleId + '-' + i;\n\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n\n    var elem = document.getElementById(prefix + id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = prefix + id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n    if (sourceMap && typeof btoa === 'function') {\n      // skip IE9 and below, see http://caniuse.com/atob-btoa\n      cssText += '\\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';\n      cssText += '\\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/lib/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./components/Header/ */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _store = __webpack_require__(/*! ./components/Header/store/ */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n\treturn _jsx('div', {}, void 0, _jsx(_Header2.default, {\n\t\tstaticContext: props.staticContext\n\t}), (0, _reactRouterConfig.renderRoutes)(props.route.routes));\n};\n\nApp.loadData = function (store) {\n\treturn store.dispatch(_store.actions.getHeaderInfo());\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Translation = __webpack_require__(/*! ./containers/Translation */ \"./src/containers/Translation/index.js\");\n\nvar _Translation2 = _interopRequireDefault(_Translation);\n\nvar _Register = __webpack_require__(/*! ./containers/Register */ \"./src/containers/Register/index.js\");\n\nvar _Register2 = _interopRequireDefault(_Register);\n\nvar _Login = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _NotFound = __webpack_require__(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// 当我加载显示HOME组件之前，我希望调用Home.loadData方法，提前获取到必要的异步数据\n// 然后再做服务器端渲染，把页面返回给用户\nexports.default = [{\n  path: '/',\n  component: _App2.default,\n  loadData: _App2.default.loadData,\n  routes: [{\n    path: '/',\n    component: _Home2.default,\n    exact: true,\n    loadData: _Home2.default.loadData,\n    key: 'home'\n  },\n  //  { \n  //   path: '/translation',\n  //   component: Translation,\n  //   loadData: Translation.loadData,\n  //   exact: true,\n  //   key: 'translation'\n  // },\n  {\n    path: '/register',\n    component: _Register2.default,\n    exact: true,\n    key: 'register'\n  }, {\n    path: '/login',\n    component: _Login2.default,\n    exact: true,\n    key: 'login'\n  }, {\n    component: _NotFound2.default\n  }]\n}];\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _jscookie = __webpack_require__(/*! jscookie */ \"jscookie\");\n\nvar _jscookie2 = _interopRequireDefault(_jscookie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n\tbaseURL: '/',\n\tparams: {}\n});\n\ninstance.interceptors.request.use(function (config) {\n\tvar token = _jscookie2.default.get('authorization') ? _jscookie2.default.get('authorization') : '';\n\t// config.headers['Content-Type'] = 'application/x-www-form-urlencoded';\n\tif (token) {\n\t\tconfig.headers.Authorization = 'Bearer ' + token;\n\t}\n\treturn config;\n}, function (error) {\n\t//请求错误处理\n\tPromise.reject(error);\n});\n\ninstance.interceptors.response.use(function (response) {\n\t//成功请求到数据\n\t//这里根据后端提供的数据进行对应的处理\n\treturn response;\n}, function (error) {\n\t//响应错误处理\n\tconsole.log('error');\n\tconsole.log(error);\n\treturn Promise.reject(error);\n});\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../../containers/Login/store/actions */ \"./src/containers/Login/store/actions.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/components/Header/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nvar _jscookie = __webpack_require__(/*! jscookie */ \"jscookie\");\n\nvar _jscookie2 = _interopRequireDefault(_jscookie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n\t_inherits(Header, _Component);\n\n\tfunction Header() {\n\t\t_classCallCheck(this, Header);\n\n\t\treturn _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n\t}\n\n\t_createClass(Header, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tvar _props = this.props,\n\t\t\t    isLogin = _props.isLogin,\n\t\t\t    userInfo = _props.userInfo,\n\t\t\t    getUserInfo = _props.getUserInfo;\n\n\t\t\tconsole.log(this.props);\n\t\t\tvar token = _jscookie2.default.get('authorization');\n\t\t\tif (isLogin) {\n\t\t\t\tif (!userInfo) {\n\t\t\t\t\tgetUserInfo();\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif (token) {\n\t\t\t\t\tgetUserInfo();\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props2 = this.props,\n\t\t\t    userInfo = _props2.userInfo,\n\t\t\t    shopInfo = _props2.shopInfo,\n\t\t\t    handleLogout = _props2.handleLogout;\n\n\t\t\treturn _jsx('div', {\n\t\t\t\tclassName: _style2.default.container\n\t\t\t}, void 0, _jsx(_reactRouterDom.Link, {\n\t\t\t\tto: '/',\n\t\t\t\tclassName: _style2.default.item\n\t\t\t}, void 0, '\\u9996\\u9875'), shopInfo ? _jsx(_react.Fragment, {}, void 0, _jsx('div', {}, void 0, shopInfo.phone), _jsx('div', {}, void 0, shopInfo.email), _jsx(_reactRouterDom.Link, {\n\t\t\t\tto: '/translation',\n\t\t\t\tclassName: _style2.default.item\n\t\t\t}, void 0, '\\u7FFB\\u8BD1\\u5217\\u8868')) : '', userInfo ? _jsx('span', {}, void 0, userInfo.loginName, _jsx('span', {\n\t\t\t\tonClick: handleLogout,\n\t\t\t\tclassName: _style2.default.item\n\t\t\t}, void 0, '\\u9000\\u51FA')) : _jsx('span', {}, void 0, _jsx(_reactRouterDom.Link, {\n\t\t\t\tto: '/register',\n\t\t\t\tclassName: _style2.default.item\n\t\t\t}, void 0, '\\u6CE8\\u518C'), _jsx(_reactRouterDom.Link, {\n\t\t\t\tto: '/login',\n\t\t\t\tclassName: _style2.default.item\n\t\t\t}, void 0, '\\u767B\\u5F55')));\n\t\t}\n\t}]);\n\n\treturn Header;\n}(_react.Component);\n\nvar mapState = function mapState(state) {\n\treturn {\n\t\tshopInfo: state.header.shopInfo,\n\t\tuserInfo: state.login.userInfo,\n\t\tisLogin: state.login.isLogin\n\t};\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n\treturn {\n\t\thandleLogout: function handleLogout() {\n\t\t\tdispatch((0, _actions.logout)());\n\t\t},\n\t\tgetUserInfo: function getUserInfo() {\n\t\t\tdispatch((0, _actions.getUserInfo)());\n\t\t}\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _withStyle2.default)(Header, _style2.default));\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getHeaderInfo = exports.login = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar _jscookie = __webpack_require__(/*! jscookie */ \"jscookie\");\n\nvar _jscookie2 = _interopRequireDefault(_jscookie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar changeLogin = function changeLogin(value) {\n\treturn {\n\t\ttype: _constants.CHANGE_LOGIN,\n\t\tvalue: value\n\t};\n};\n\nvar login = exports.login = function login() {\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.get('/api/login.json').then(function (res) {\n\t\t\tdispatch(changeLogin(true));\n\t\t});\n\t};\n};\n\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n\treturn function (dispatch, getState, axiosInstance) {\n\t\tvar shopId = axiosInstance.defaults.params.shopId;\n\t\treturn axiosInstance.get('/c/shops/' + shopId).then(function (res) {\n\t\t\tdispatch(changeLogin(res.data.data));\n\t\t});\n\t};\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/Header/store/constants.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = 'HEADER/CHANGER_LOGIN';\n\n//# sourceURL=webpack:///./src/components/Header/store/constants.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.actions = exports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\nexports.actions = actions;\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar defaultState = {\n\tshopInfo: {}\n};\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _constants.CHANGE_LOGIN:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tshopInfo: action.value\n\t\t\t});\n\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/components/Header/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/style.css?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/containers/Home/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _ref = _jsx(_reactHelmet.Helmet, {}, void 0, _jsx('title', {}, void 0, '\\u8FD9\\u662FDellLee\\u7684SSR\\u65B0\\u95FB\\u9875\\u9762 - \\u4E30\\u5BCC\\u591A\\u5F69\\u7684\\u8D44\\u8BAF'), _jsx('meta', {\n\tname: 'description',\n\tcontent: '\\u8FD9\\u662FDellLee\\u7684SSR\\u65B0\\u95FB\\u9875\\u9762 - \\u4E30\\u5BCC\\u591A\\u5F69\\u7684\\u8D44\\u8BAF'\n}));\n\nvar Home = function (_Component) {\n\t_inherits(Home, _Component);\n\n\tfunction Home() {\n\t\t_classCallCheck(this, Home);\n\n\t\treturn _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n\t}\n\n\t_createClass(Home, [{\n\t\tkey: 'getList',\n\t\tvalue: function getList() {\n\t\t\tvar list = this.props.list;\n\n\t\t\treturn list.map(function (item) {\n\t\t\t\treturn _jsx('div', {\n\t\t\t\t\tclassName: _style2.default.item\n\t\t\t\t}, item.id, item.imageUrl);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _jsx(_react.Fragment, {}, void 0, _ref, _jsx('div', {\n\t\t\t\tclassName: _style2.default.container\n\t\t\t}, void 0, this.getList()));\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tif (!this.props.list.length) {\n\t\t\t\tthis.props.getHomeList();\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tlist: state.home.bannerList\n\t};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tgetHomeList: function getHomeList() {\n\t\t\tdispatch((0, _actions.getHomeList)());\n\t\t}\n\t};\n};\n\nvar ExportHome = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Home, _style2.default));\n\nExportHome.loadData = function (store) {\n\treturn store.dispatch((0, _actions.getHomeList)());\n};\n\nexports.default = ExportHome;\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getHomeList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar changeList = function changeList(list) {\n\treturn {\n\t\ttype: _constants.CHANGE_LIST,\n\t\tlist: list\n\t};\n};\n\nvar getHomeList = exports.getHomeList = function getHomeList() {\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.get('/c/banners/get/all').then(function (res) {\n\t\t\tvar list = res.data.data;\n\t\t\tdispatch(changeList(list));\n\t\t}).catch(function (err) {\n\t\t\tconsole.log(err);\n\t\t});\n\t};\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/constants.js":
/*!************************************************!*\
  !*** ./src/containers/Home/store/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = 'HOME/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Home/store/constants.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar defaultState = {\n\tnewsList: [],\n\tbannerList: []\n};\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _constants.CHANGE_LIST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tbannerList: action.list\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/containers/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Home/style.css?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _common = __webpack_require__(/*! ../../../common/common */ \"./common/common.js\");\n\nvar _common2 = _interopRequireDefault(_common);\n\nvar _Alert = __webpack_require__(/*! ../../../common/Alert */ \"./common/Alert.js\");\n\nvar _Alert2 = _interopRequireDefault(_Alert);\n\nvar _feConfig = __webpack_require__(/*! ../../../config/feConfig */ \"./config/feConfig.js\");\n\nvar _feConfig2 = _interopRequireDefault(_feConfig);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Login/store/actions.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar companyName = _feConfig2.default.companyName;\nvar l2Warehouse = _feConfig2.default.l2Warehouse;\n\nvar _ref = _jsx('option', {\n    value: '86'\n}, void 0, '\\u4E2D\\u56FD+86');\n\nvar _ref2 = _jsx('option', {\n    value: '86'\n}, void 0, '\\u4E2D\\u56FD+86');\n\nvar _ref3 = _jsx('option', {\n    value: '61'\n}, void 0, '\\u6FB3\\u5927\\u5229\\u4E9A+61');\n\nvar _ref4 = _jsx('option', {\n    value: '64'\n}, void 0, '\\u65B0\\u897F\\u5170+64');\n\nvar _ref5 = _jsx('option', {\n    value: '86'\n}, void 0, '\\u4E2D\\u56FD+86');\n\nvar _ref6 = _jsx('option', {\n    value: '61'\n}, void 0, '\\u6FB3\\u5927\\u5229\\u4E9A+61');\n\nvar _ref7 = _jsx('input', {\n    className: 'login-btn',\n    type: 'submit',\n    value: '\\u767B\\u5F55'\n});\n\nvar _ref8 = _jsx('input', {\n    className: 'login-btn',\n    type: 'submit',\n    value: '\\u767B\\u5F55'\n});\n\nvar _ref9 = _jsx('a', {\n    href: '/user/findpwd'\n}, void 0, '\\u5FD8\\u8BB0\\u8D26\\u53F7/\\u5BC6\\u7801\\uFF1F');\n\nvar _ref10 = _jsx('img', {\n    src: '/images/wechat.png'\n});\n\nvar Login = function (_Component) {\n    _inherits(Login, _Component);\n\n    function Login(props) {\n        _classCallCheck(this, Login);\n\n        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n        _this.state = {\n            ref: props.originRef,\n            pwdForm: {\n                account: {\n                    valid: false,\n                    value: '',\n                    error: ''\n                },\n                password: {\n                    valid: false,\n                    value: 0,\n                    error: ''\n                }\n            },\n            phoneForm: {\n                phone: {\n                    valid: false,\n                    value: '',\n                    error: ''\n                },\n                code: {\n                    valid: false,\n                    value: '',\n                    error: ''\n                }\n            },\n            count: 60,\n            flag: false,\n            codeFlag: true,\n            selectValue: companyName === 'NZH' ? 64 : 86\n        };\n        return _this;\n    }\n\n    _createClass(Login, [{\n        key: 'showMsg',\n        value: function showMsg(msg) {\n            var _this2 = this;\n\n            this.setState({\n                msgFlag: true,\n                msg: msg\n            });\n            setTimeout(function () {\n                _this2.setState({\n                    msgFlag: false\n                });\n            }, 2000);\n        }\n    }, {\n        key: 'changeLoginType',\n        value: function changeLoginType() {\n            var flag = this.state.flag;\n\n            this.setState({\n                flag: !flag\n            });\n        }\n    }, {\n        key: 'getCountryValue',\n        value: function getCountryValue(value) {\n            var phoneForm = this.state.phoneForm;\n\n\n            this.setState({\n                selectValue: value,\n                phoneForm: _extends({}, phoneForm, {\n                    phone: {\n                        valid: false,\n                        value: '',\n                        error: ''\n                    }\n                })\n            });\n        }\n    }, {\n        key: 'handleValueChange',\n\n        /**\n        * 数据校验 - 密码登录\n        */\n        value: function handleValueChange(field, value) {\n            console.log(field, value);\n\n            var pwdForm = this.state.pwdForm,\n                newFieldObj = {\n                value: value,\n                valid: false,\n                error: ''\n            };\n\n\n            switch (field) {\n                case 'account':\n                    if (!value) {\n                        newFieldObj.error = '请输入账号';\n                        newFieldObj.valid = true;\n                    }\n                    break;\n                case 'password':\n                    if (!value) {\n                        newFieldObj.error = '请输入密码';\n                        newFieldObj.valid = true;\n                    }\n                    break;\n            }\n\n            this.setState({\n                pwdForm: _extends({}, pwdForm, _defineProperty({}, field, newFieldObj))\n            });\n        }\n    }, {\n        key: 'handlephoneCodeChange',\n\n        /**\n        * 数据校验 - 手机验证码登录\n        */\n        value: function handlephoneCodeChange(field, value) {\n            var _state = this.state,\n                phoneForm = _state.phoneForm,\n                selectValue = _state.selectValue,\n                newFieldObj = {\n                value: value,\n                valid: false,\n                error: ''\n            };\n\n\n            switch (field) {\n                case 'phone':\n                    if (!value) {\n                        newFieldObj.error = '请输入手机号';\n                        newFieldObj.valid = true;\n                    } else {\n                        if (!_common2.default.isValidPhone(value) && selectValue == 86) {\n                            newFieldObj.error = '请确保手机号码无误';\n                            newFieldObj.valid = true;\n                        } else if (value.substr(0, 2) !== '02' && selectValue == 64) {\n                            newFieldObj.error = '请输入以02开头的完整号码';\n                            newFieldObj.valid = true;\n                        } else if (value.substr(0, 2) !== '04' && selectValue == 61) {\n                            newFieldObj.error = '请输入以04开头的完整号码';\n                            newFieldObj.valid = true;\n                        }\n                    }\n                    break;\n                case 'code':\n                    if (!value) {\n                        newFieldObj.error = '请输入验证码';\n                        newFieldObj.valid = true;\n                    }\n                    break;\n            }\n\n            this.setState({\n                phoneForm: _extends({}, phoneForm, _defineProperty({}, field, newFieldObj))\n            });\n            console.log(this.state);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            var companyInfo = this.props.companyInfo,\n                _state2 = this.state,\n                ref = _state2.ref,\n                msg = _state2.msg,\n                flag = _state2.flag,\n                count = _state2.count,\n                msgFlag = _state2.msgFlag,\n                _state2$pwdForm = _state2.pwdForm,\n                account = _state2$pwdForm.account,\n                password = _state2$pwdForm.password,\n                _state2$phoneForm = _state2.phoneForm,\n                code = _state2$phoneForm.code,\n                phone = _state2$phoneForm.phone,\n                codeFlag = _state2.codeFlag,\n                selectValue = _state2.selectValue;\n\n\n            return _jsx('div', {\n                className: 'login-page'\n            }, void 0, _jsx('div', {\n                className: 'login-sec1'\n            }, void 0, _jsx('div', {\n                className: 'logo inner'\n            }, void 0, _jsx('a', {\n                href: '/'\n            }, void 0))), this.props.isLogin ? this.props.getUserInfos() : null, this.props.redirectTo ? _jsx(_reactRouterDom.Redirect, {\n                to: this.props.redirectTo\n            }) : null, _jsx('div', {\n                className: 'login-sec2'\n            }, void 0, _jsx('div', {\n                className: 'inner'\n            }, void 0, _jsx('div', {\n                className: 'login clear-float'\n            }, void 0, _jsx('h2', {\n                className: 'login-n-tit clear-float'\n            }, void 0, _jsx('span', {\n                className: !flag ? 'login-n-current' : ''\n            }, void 0, '\\u5BC6\\u7801\\u767B\\u5F55')), _jsx('div', {\n                className: 'login-form'\n            }, void 0, account.valid ? _jsx('p', {\n                className: 'error'\n            }, void 0, account.error) : '', password.valid ? _jsx('p', {\n                className: 'error'\n            }, void 0, password.error) : '', phone.valid ? _jsx('p', {\n                className: 'error'\n            }, void 0, phone.error) : '', code.valid ? _jsx('p', {\n                className: 'error'\n            }, void 0, code.error) : '', flag ? _jsx('form', {\n                onSubmit: function onSubmit(e) {\n                    return _this3.handleSubmitByPhone(e);\n                }\n            }, void 0, _jsx('label', {}, void 0, companyName === l2Warehouse ? _jsx('select', {\n                className: 'country',\n                value: selectValue,\n                onChange: function onChange(e) {\n                    return _this3.getCountryValue(e.target.value);\n                }\n            }, void 0, _ref) : companyName === 'LINKC' ? _jsx('select', {\n                className: 'country',\n                value: selectValue,\n                onChange: function onChange(e) {\n                    return _this3.getCountryValue(e.target.value);\n                }\n            }, void 0, _ref2, _ref3) : _jsx('select', {\n                className: 'country',\n                value: selectValue,\n                onChange: function onChange(e) {\n                    return _this3.getCountryValue(e.target.value);\n                }\n            }, void 0, _ref4, _ref5, _ref6), _jsx('input', {\n                className: 'login-n-r user',\n                type: 'number',\n                placeholder: '\\u624B\\u673A\\u53F7',\n                value: phone.value,\n                onChange: function onChange(e) {\n                    return _this3.handlephoneCodeChange('phone', e.target.value);\n                }\n            })), _jsx('label', {}, void 0, codeFlag ? _jsx('a', {\n                className: phone.value && !phone.valid ? 'get-code-true login-n-l' : 'get-code-true login-n-l login-n-disable',\n                onClick: this.sendSignInCode\n            }, void 0, '\\u83B7\\u53D6\\u9A8C\\u8BC1\\u7801') : _jsx('a', {\n                className: 'get-code login-n-l'\n            }, void 0, count, '\\u79D2\\u540E\\u91CD\\u65B0\\u83B7\\u53D6'), _jsx('input', {\n                className: 'login-n-r password',\n                type: 'text',\n                placeholder: '\\u9A8C\\u8BC1\\u7801',\n                onChange: function onChange(e) {\n                    return _this3.handlephoneCodeChange('code', e.target.value);\n                }\n            }))) : _jsx('form', {}, void 0, _jsx('input', {\n                className: 'user',\n                type: 'text',\n                placeholder: '\\u624B\\u673A\\u53F7',\n                onChange: function onChange(e) {\n                    return _this3.handleValueChange('account', e.target.value);\n                }\n            }), _jsx('input', {\n                className: 'password',\n                type: 'password',\n                placeholder: '\\u5BC6\\u7801',\n                onChange: function onChange(e) {\n                    return _this3.handleValueChange('password', e.target.value);\n                }\n            })), flag ? phone.value && code.value ? _jsx('input', {\n                className: 'login-btn',\n                type: 'submit',\n                onClick: this.handleSubmitByPhone,\n                value: '\\u767B\\u5F55'\n            }) : _ref7 : account.value && password.value ? _jsx('input', {\n                className: 'login-btn',\n                type: 'submit',\n                onClick: function onClick(e) {\n                    return _this3.props.handleSubmitByPwd(e, _this3.state);\n                },\n                value: '\\u767B\\u5F55'\n            }) : _ref8, _jsx('p', {\n                className: 'clear-float'\n            }, void 0, _ref9, _jsx('a', {\n                className: 'go-register-btn',\n                href: encodeURIComponent(ref) !== 'undefined' ? '/user/register?ref=' + encodeURIComponent(ref) : '/user/register'\n            }, void 0, '\\u514D\\u8D39\\u6CE8\\u518C')), _feConfig2.default.enableWechatLogin ? _jsx('div', {\n                className: 'wechat-login',\n                onClick: this.handleLoginByWechat\n            }, void 0, '\\u5176\\u4ED6\\u65B9\\u5F0F\\u767B\\u5F55\\uFF1A', _ref10) : '')))), msgFlag ? _jsx(_Alert2.default, {\n                msg: msg\n            }) : '');\n        }\n    }]);\n\n    return Login;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        isLogin: state.login.isLogin,\n        userInfo: state.login.userInfo,\n        redirectTo: state.login.redirectTo\n    };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        handleSubmitByPwd: function handleSubmitByPwd(e, state) {\n            e.preventDefault();\n            var _state$pwdForm = state.pwdForm,\n                account = _state$pwdForm.account,\n                password = _state$pwdForm.password;\n\n\n            if (account.valid || password.valid) return;\n            var params = {\n                username: account.value,\n                password: password.value\n            };\n            dispatch((0, _actions.toLogin)(params));\n        },\n        getUserInfos: function getUserInfos() {\n            dispatch((0, _actions.getUserInfo)());\n        }\n    };\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/containers/Login/store/actions.js":
/*!***********************************************!*\
  !*** ./src/containers/Login/store/actions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.logout = exports.getUserInfo = exports.toLogin = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Login/store/constants.js\");\n\nvar _jscookie = __webpack_require__(/*! jscookie */ \"jscookie\");\n\nvar _jscookie2 = _interopRequireDefault(_jscookie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar changeLogin = function changeLogin(payload) {\n\treturn {\n\t\ttype: _constants.CHANGE_LOGIN,\n\t\tpayload: payload\n\t};\n};\n\nvar changeUserInfo = function changeUserInfo(payload) {\n\treturn {\n\t\ttype: _constants.CHANGE_USERINFO,\n\t\tpayload: payload\n\t};\n};\n\nvar changeLogut = function changeLogut(payload) {\n\treturn {\n\t\ttype: _constants.CHANGE_LOGUT,\n\t\tpayload: payload\n\t};\n};\n\nvar toLogin = exports.toLogin = function toLogin(data) {\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.post('/c/authenticate', data).then(function (res) {\n\t\t\tvar authorization = res.data.idToken;\n\t\t\t_jscookie2.default.set({\n\t\t\t\tname: 'authorization',\n\t\t\t\tvalue: authorization\n\t\t\t});\n\t\t\t// const list = res.data.data;\n\t\t\tdispatch(changeLogin(authorization));\n\t\t}).catch(function (err) {\n\t\t\tconsole.log(err);\n\t\t});\n\t};\n};\nvar getUserInfo = exports.getUserInfo = function getUserInfo() {\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.get('/c/me').then(function (res) {\n\t\t\tconsole.log(res.data, 'userinfo');\n\t\t\tdispatch(changeUserInfo(res.data.data));\n\t\t}).catch(function (err) {\n\t\t\tconsole.log(err);\n\t\t});\n\t};\n};\n\nvar logout = exports.logout = function logout() {\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.get('/c/me').then(function (res) {\n\t\t\tconsole.log(res.data, 'userinfo');\n\t\t\tvar data = res.data.data ? null : '';\n\t\t\t_jscookie2.default.del('authorization');\n\t\t\tdispatch(changeLogut(data));\n\t\t}).catch(function (err) {\n\t\t\tconsole.log(err);\n\t\t});\n\t};\n};\n\n//# sourceURL=webpack:///./src/containers/Login/store/actions.js?");

/***/ }),

/***/ "./src/containers/Login/store/constants.js":
/*!*************************************************!*\
  !*** ./src/containers/Login/store/constants.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = 'CHANGE_LOGIN';\nvar CHANGE_USERINFO = exports.CHANGE_USERINFO = 'CHANGE_USERINFO';\nvar CHANGE_LOGUT = exports.CHANGE_LOGUT = 'CHANGE_LOGUT';\n\n//# sourceURL=webpack:///./src/containers/Login/store/constants.js?");

/***/ }),

/***/ "./src/containers/Login/store/index.js":
/*!*********************************************!*\
  !*** ./src/containers/Login/store/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Login/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Login/store/index.js?");

/***/ }),

/***/ "./src/containers/Login/store/reducer.js":
/*!***********************************************!*\
  !*** ./src/containers/Login/store/reducer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Login/store/constants.js\");\n\nvar _util = __webpack_require__(/*! ../../../server/util */ \"./src/server/util.js\");\n\nvar defaultState = {\n    isLogin: false,\n    userInfo: null,\n    redirectTo: ''\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n    var action = arguments[1];\n\n\n    console.log(action.payload);\n    switch (action.type) {\n        case _constants.CHANGE_LOGIN:\n            return _extends({}, state, {\n                isLogin: action.payload ? true : false\n            });\n        case _constants.CHANGE_USERINFO:\n            return {\n                userInfo: action.payload,\n                redirectTo: (0, _util.getRedirectPath)('home')\n            };\n        case _constants.CHANGE_LOGUT:\n            return {\n                userInfo: action.payload ? action.payload : null\n            };\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/containers/Login/store/reducer.js?");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _ref = _jsx('div', {}, void 0, '404, sorry, page not found');\n\nvar NotFound = function (_Component) {\n\t_inherits(NotFound, _Component);\n\n\tfunction NotFound() {\n\t\t_classCallCheck(this, NotFound);\n\n\t\treturn _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));\n\t}\n\n\t_createClass(NotFound, [{\n\t\tkey: 'componentWillMount',\n\t\tvalue: function componentWillMount() {\n\t\t\tvar staticContext = this.props.staticContext;\n\n\t\t\tstaticContext && (staticContext.NOT_FOUND = true);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _ref;\n\t\t}\n\t}]);\n\n\treturn NotFound;\n}(_react.Component);\n\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.js?");

/***/ }),

/***/ "./src/containers/Register/index.js":
/*!******************************************!*\
  !*** ./src/containers/Register/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _common = __webpack_require__(/*! ../../../common/common */ \"./common/common.js\");\n\nvar _common2 = _interopRequireDefault(_common);\n\nvar _feConfig = __webpack_require__(/*! ../../../config/feConfig */ \"./config/feConfig.js\");\n\nvar _feConfig2 = _interopRequireDefault(_feConfig);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../Register/store/actions */ \"./src/containers/Register/store/actions.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/containers/Register/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import Alert from '../../../common/Alert.jsx';\n// import Footer from '../../../common/Footer.jsx';\n\n\nvar companyName = _feConfig2.default.companyName;\nvar l2Warehouse = _feConfig2.default.l2Warehouse;\n\nvar _ref = _jsx('div', {}, void 0, '\\u8D26\\u53F7\\u5BC6\\u7801\\u9519\\u8BEF');\n\nvar _ref2 = _jsx('h2', {}, void 0, '\\u7528\\u6237\\u6CE8\\u518C');\n\nvar _ref3 = _jsx('option', {\n    value: '86'\n}, void 0, '\\u4E2D\\u56FD+86');\n\nvar _ref4 = _jsx('option', {\n    value: '86'\n}, void 0, '\\u4E2D\\u56FD+86');\n\nvar _ref5 = _jsx('option', {\n    value: '61'\n}, void 0, '\\u6FB3\\u5927\\u5229\\u4E9A+61');\n\nvar _ref6 = _jsx('option', {\n    value: '64'\n}, void 0, '\\u65B0\\u897F\\u5170+64');\n\nvar _ref7 = _jsx('option', {\n    value: '86'\n}, void 0, '\\u4E2D\\u56FD+86');\n\nvar _ref8 = _jsx('option', {\n    value: '61'\n}, void 0, '\\u6FB3\\u5927\\u5229\\u4E9A+61');\n\nvar _ref9 = _jsx(_reactRouterDom.Link, {\n    className: 'tologin',\n    to: '/login?ref=\" + originUrl'\n}, void 0, '\\u5DF2\\u6709\\u8D26\\u53F7\\uFF1F\\u53BB\\u767B\\u5F55');\n\nvar Register = function (_Component) {\n    _inherits(Register, _Component);\n\n    function Register(props) {\n        _classCallCheck(this, Register);\n\n        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));\n\n        _this.state = {\n            selectValue: companyName === 'NZH' ? 64 : 86,\n            count: 60,\n            flag: true,\n            getCodeFlag: true,\n            originUrl: encodeURIComponent(props.originUrl) || '',\n            form: {\n                phone: {\n                    value: '',\n                    valid: false,\n                    error: ''\n                },\n                code: {\n                    value: '',\n                    valid: false,\n                    error: ''\n                },\n                fullName: {\n                    value: '',\n                    valid: false,\n                    error: ''\n                },\n                password: {\n                    value: '',\n                    valid: false,\n                    error: ''\n                },\n                againPassword: {\n                    value: '',\n                    valid: false,\n                    error: ''\n                }\n            }\n        };\n        return _this;\n    }\n\n    _createClass(Register, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {}\n    }, {\n        key: 'getCountryValue',\n        value: function getCountryValue(value) {\n            var form = this.state.form;\n\n\n            this.setState({\n                selectValue: value,\n                form: _extends({}, form, {\n                    phone: {\n                        valid: false,\n                        value: '',\n                        error: ''\n                    }\n                })\n            });\n        }\n    }, {\n        key: 'handleValueChange',\n        value: function handleValueChange(field, value) {\n            var _state = this.state,\n                form = _state.form,\n                password = _state.form.password,\n                selectValue = _state.selectValue,\n                newFieldObj = {\n                value: value,\n                error: '',\n                valid: false\n            };\n\n\n            switch (field) {\n                case 'phone':\n                    if (!value) {\n                        newFieldObj.error = '请输入手机号';\n                        newFieldObj.valid = true;\n                    } else {\n                        if (!_common2.default.isValidPhone(value) && selectValue == 86) {\n                            newFieldObj.error = '请确保手机号码无误';\n                            newFieldObj.valid = true;\n                        } else if (value.substr(0, 2) !== '02' && selectValue == 64) {\n                            newFieldObj.error = '请输入以02开头的完整号码';\n                            newFieldObj.valid = true;\n                        } else if (value.substr(0, 2) !== '04' && selectValue == 61) {\n                            newFieldObj.error = '请输入以04开头的完整号码';\n                            newFieldObj.valid = true;\n                        }\n                    }\n                    break;\n                case 'picCode':\n                    if (!value) {\n                        newFieldObj.error = '请输入图片验证码';\n                        newFieldObj.valid = true;\n                    }\n                    break;\n                case 'code':\n                    if (!value) {\n                        newFieldObj.error = '请输入短信验证码';\n                        newFieldObj.valid = true;\n                    }\n                    break;\n                case 'fullName':\n                    if (!value) {\n                        newFieldObj.error = '请输入昵称';\n                        newFieldObj.valid = true;\n                    }\n                    break;\n                case 'password':\n                    if (!value) {\n                        newFieldObj.error = '请输入密码';\n                        newFieldObj.valid = true;\n                    } else if (value.length < 6) {\n                        newFieldObj.error = '密码长度不能少于6位';\n                        newFieldObj.valid = true;\n                    }\n                    break;\n                case 'againPassword':\n                    if (!value || password.value !== value) {\n                        newFieldObj.error = '两次输入的密码不匹配，请检查';\n                        newFieldObj.valid = true;\n                    }\n                    break;\n            }\n\n            this.setState({\n                form: _extends({}, form, _defineProperty({}, field, newFieldObj))\n            });\n        }\n    }, {\n        key: 'showMmCoupon',\n        value: function showMmCoupon() {\n            this.setState({\n                mmFlag: true\n            });\n        }\n    }, {\n        key: 'handdleBack',\n        value: function handdleBack() {\n            this.setState({\n                confirmFlag: true\n            });\n        }\n    }, {\n        key: 'render',\n\n        /**\n        * 注册\n        */\n\n        value: function render() {\n            var _this2 = this;\n\n            var _state2 = this.state,\n                _state2$form = _state2.form,\n                phone = _state2$form.phone,\n                picCode = _state2$form.picCode,\n                code = _state2$form.code,\n                fullName = _state2$form.fullName,\n                password = _state2$form.password,\n                againPassword = _state2$form.againPassword,\n                originUrl = _state2.originUrl,\n                selectValue = _state2.selectValue,\n                flag = _state2.flag,\n                count = _state2.count,\n                msg = _state2.msg,\n                msgFlag = _state2.msgFlag,\n                confirmFlag = _state2.confirmFlag,\n                codePic = _state2.codePic,\n                mmFlag = _state2.mmFlag;\n            var handleRegister = this.props.handleRegister;\n\n            return _jsx('div', {\n                className: _style2.default.registerpage\n            }, void 0, this.props.redirectTo ? _jsx(_reactRouterDom.Redirect, {\n                to: this.props.redirectTo\n            }) : null, this.props.code == 1 ? _ref : null, _jsx('div', {}, void 0, this.props.fullName), _jsx('div', {\n                className: 'loginsec1'\n            }, void 0, _jsx('div', {\n                className: 'logoinner'\n            }, void 0, _jsx('a', {\n                onClick: this.handdleBack\n            }, void 0))), _jsx('div', {\n                className: 'loginsec2'\n            }, void 0, _jsx('div', {\n                className: 'inner'\n            }, void 0, _jsx('div', {\n                className: 'usermain'\n            }, void 0, _jsx('div', {\n                className: 'register'\n            }, void 0, _ref2, _jsx('form', {}, void 0, _jsx('div', {\n                className: 'loginform registerstyle'\n            }, void 0, _jsx('label', {}, void 0, companyName === l2Warehouse ? _jsx('select', {\n                className: 'country',\n                value: selectValue,\n                onChange: function onChange(e) {\n                    return _this2.getCountryValue(e.target.value);\n                }\n            }, void 0, _ref3) : companyName === 'LINKC' ? _jsx('select', {\n                className: 'country',\n                value: selectValue,\n                onChange: function onChange(e) {\n                    return _this2.getCountryValue(e.target.value);\n                }\n            }, void 0, _ref4, _ref5) : _jsx('select', {\n                className: 'country',\n                value: selectValue,\n                onChange: function onChange(e) {\n                    return _this2.getCountryValue(e.target.value);\n                }\n            }, void 0, _ref6, _ref7, _ref8), _jsx('input', {\n                className: 'phonecol',\n                type: 'text',\n                placeholder: '\\u624B\\u673A\\u53F7\\u7801\\u662F\\u60A8\\u7684\\u767B\\u5F55\\u8D26\\u53F7',\n                maxLength: '11',\n                value: phone.value,\n                onChange: function onChange(e) {\n                    return _this2.handleValueChange('phone', e.target.value);\n                }\n            }), phone.valid ? _jsx('p', {\n                className: 'error error5'\n            }, void 0, phone.error) : ''), _jsx('label', {}, void 0, _jsx('input', {\n                type: 'text',\n                placeholder: '\\u6635\\u79F0\\uFF08\\u957F\\u5EA6\\u4E0D\\u8D85\\u8FC720\\uFF09',\n                onChange: function onChange(e) {\n                    return _this2.handleValueChange('fullName', e.target.value);\n                }\n            }), fullName.valid ? _jsx('p', {\n                className: 'error error5'\n            }, void 0, fullName.error) : ''), _jsx('label', {}, void 0, _jsx('input', {\n                type: 'password',\n                placeholder: '\\u5BC6\\u7801\\uFF086-16\\u4F4D\\u5BC6\\u7801\\uFF0C\\u533A\\u5206\\u5927\\u5C0F\\u5199\\uFF09',\n                onChange: function onChange(e) {\n                    return _this2.handleValueChange('password', e.target.value);\n                }\n            }), password.valid ? _jsx('p', {\n                className: 'error error5'\n            }, void 0, password.error) : ''), _jsx('label', {}, void 0, _react2.default.createElement('input', {\n                type: 'password',\n                placeholder: '\\u786E\\u8BA4\\u5BC6\\u7801',\n                ref: 'rePassword',\n                onChange: function onChange(e) {\n                    return _this2.handleValueChange('againPassword', e.target.value);\n                }\n            }), againPassword.valid ? _jsx('p', {\n                className: 'error error5'\n            }, void 0, againPassword.error) : '')), _jsx('a', {\n                className: 'loginbtn registerbtn',\n                onClick: function onClick() {\n                    return handleRegister(_this2.state);\n                }\n            }, void 0, '\\u6CE8\\u518C'), _ref9))))));\n        }\n    }]);\n\n    return Register;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        redirectTo: state.register.redirectTo,\n        fullName: state.register.fullName,\n        code: state.register.code\n    };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        handleRegister: function handleRegister(state) {\n            var _state$form = state.form,\n                code = _state$form.code,\n                phone = _state$form.phone,\n                fullName = _state$form.fullName,\n                password = _state$form.password,\n                againPassword = _state$form.againPassword,\n                selectValue = state.selectValue;\n\n\n            if (!phone.value || phone.valid ||\n            // !code.value || code.valid ||\n            !password.value || password.valid || !againPassword.value || againPassword.valid) return;\n            var params = {\n                phone: phone.value,\n                fullName: fullName.value,\n                rePassword: againPassword.value,\n                password: password.value,\n                countryCode: selectValue\n                // shopId: '100169'\n            };\n            dispatch((0, _actions.register)(params));\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Register);\n\n//# sourceURL=webpack:///./src/containers/Register/index.js?");

/***/ }),

/***/ "./src/containers/Register/store/actions.js":
/*!**************************************************!*\
  !*** ./src/containers/Register/store/actions.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.register = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Register/store/constants.js\");\n\nvar errorMsg = function errorMsg(data) {\n\treturn {\n\t\ttype: _constants.ERROR_MSG,\n\t\tpayload: data\n\t};\n};\n\nvar registerSuccess = function registerSuccess(data) {\n\treturn {\n\t\ttype: _constants.REGISTER_SUCCESS,\n\t\tpayload: data\n\t};\n};\n// export function registerSuccess(data) {\n//     return { type: REGISTER_SUCCESS, payload: data }\n// }\nvar register = exports.register = function register(body) {\n\tvar params = {\n\t\tphone: body.phone,\n\t\tfullName: body.fullName,\n\t\tpassword: body.password,\n\t\tloginName: body.phone,\n\t\tcountrys: body.countryCode\n\t\t// shopId:'100169'\n\t};\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.post('/c/customers/register', params).then(function (res) {\n\t\t\tconsole.log(res);\n\t\t\tif (res.data.data) {\n\t\t\t\tdispatch(registerSuccess(res.data.data));\n\t\t\t} else {\n\t\t\t\tdispatch(errorMsg(res.data));\n\t\t\t}\n\t\t}).catch(function (err) {\n\n\t\t\tvar data = { code: 1\n\n\t\t\t\t// dispatch(errorMsg(data))\n\t\t\t};\n\t\t});\n\t};\n};\n\n//# sourceURL=webpack:///./src/containers/Register/store/actions.js?");

/***/ }),

/***/ "./src/containers/Register/store/constants.js":
/*!****************************************************!*\
  !*** ./src/containers/Register/store/constants.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar REGISTER_SUCCESS = exports.REGISTER_SUCCESS = 'REGISTER_SUCCESS';\nvar ERROR_MSG = exports.ERROR_MSG = 'ERROR_MSG';\n\n//# sourceURL=webpack:///./src/containers/Register/store/constants.js?");

/***/ }),

/***/ "./src/containers/Register/store/index.js":
/*!************************************************!*\
  !*** ./src/containers/Register/store/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Register/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import * as actions from './actions';\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Register/store/index.js?");

/***/ }),

/***/ "./src/containers/Register/store/reducer.js":
/*!**************************************************!*\
  !*** ./src/containers/Register/store/reducer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Register/store/constants.js\");\n\nvar _util = __webpack_require__(/*! ../../../server/util */ \"./src/server/util.js\");\n\nvar defaultState = {\n\tisAuth: false,\n\tfullName: 'zl',\n\tphone: '',\n\tcode: '',\n\tpassword: '',\n\tagainPassword: '',\n\t// 成功后的跳转地址\n\tredirectTo: ''\n};\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _constants.REGISTER_SUCCESS:\n\t\t\treturn _extends({}, state, action.payload, {\n\t\t\t\tisAuth: true,\n\t\t\t\tmessage: '',\n\t\t\t\tredirectTo: (0, _util.getRedirectPath)(action.payload)\n\t\t\t});\n\t\tcase _constants.ERROR_MSG:\n\t\t\tconsole.log('2');\n\t\t\treturn _extends({}, state, action.payload);\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/containers/Register/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Register/style.css":
/*!*******************************************!*\
  !*** ./src/containers/Register/style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/containers/Register/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Register/style.css?");

/***/ }),

/***/ "./src/containers/Translation/index.js":
/*!*********************************************!*\
  !*** ./src/containers/Translation/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Translation/store/actions.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/containers/Translation/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _ref = _jsx(_reactHelmet.Helmet, {}, void 0, _jsx('title', {}, void 0, '\\u8FD9\\u662FDellLee\\u7684SSR\\u7FFB\\u8BD1\\u9875\\u9762 - \\u4E30\\u5BCC\\u591A\\u5F69\\u7684\\u7FFB\\u8BD1\\u5185\\u5BB9'), _jsx('meta', {\n\tname: 'description',\n\tcontent: '\\u8FD9\\u662FDellLee\\u7684SSR\\u7FFB\\u8BD1\\u9875\\u9762 - \\u4E30\\u5BCC\\u591A\\u5F69\\u7684\\u7FFB\\u8BD1\\u5185\\u5BB9'\n}));\n\nvar _ref2 = _jsx(_reactRouterDom.Redirect, {\n\tto: '/'\n});\n\nvar Translation = function (_Component) {\n\t_inherits(Translation, _Component);\n\n\tfunction Translation() {\n\t\t_classCallCheck(this, Translation);\n\n\t\treturn _possibleConstructorReturn(this, (Translation.__proto__ || Object.getPrototypeOf(Translation)).apply(this, arguments));\n\t}\n\n\t_createClass(Translation, [{\n\t\tkey: 'getList',\n\t\tvalue: function getList() {\n\t\t\tvar list = this.props.list;\n\n\t\t\treturn list.map(function (item) {\n\t\t\t\treturn _jsx('div', {\n\t\t\t\t\tclassName: _style2.default.item\n\t\t\t\t}, item.id, item.title);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn this.props.login ? _jsx(_react.Fragment, {}, void 0, _ref, _jsx('div', {\n\t\t\t\tclassName: _style2.default.container\n\t\t\t}, void 0, this.getList())) : _ref2;\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tif (!this.props.list.length) {\n\t\t\t\tthis.props.getTranslationList();\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn Translation;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tlist: state.translation.translationList,\n\t\tlogin: state.header.login\n\t};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tgetTranslationList: function getTranslationList() {\n\t\t\tdispatch((0, _actions.getTranslationList)());\n\t\t}\n\t};\n};\n\nvar ExportTranslation = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Translation, _style2.default));\n\nExportTranslation.loadData = function (store) {\n\treturn store.dispatch((0, _actions.getTranslationList)());\n};\n\nexports.default = ExportTranslation;\n\n//# sourceURL=webpack:///./src/containers/Translation/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/actions.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/actions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getTranslationList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\n\nvar changeList = function changeList(list) {\n\treturn {\n\t\ttype: _constants.CHANGE_LIST,\n\t\tlist: list\n\t};\n};\n\nvar getTranslationList = exports.getTranslationList = function getTranslationList() {\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.get('/api/translations.json').then(function (res) {\n\t\t\tif (res.data.success) {\n\t\t\t\tvar list = res.data.data;\n\t\t\t\tdispatch(changeList(list));\n\t\t\t} else {\n\t\t\t\tvar _list = [];\n\t\t\t\tdispatch(changeList(_list));\n\t\t\t}\n\t\t});\n\t};\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/actions.js?");

/***/ }),

/***/ "./src/containers/Translation/store/constants.js":
/*!*******************************************************!*\
  !*** ./src/containers/Translation/store/constants.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = 'TRANSLATION/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Translation/store/constants.js?");

/***/ }),

/***/ "./src/containers/Translation/store/index.js":
/*!***************************************************!*\
  !*** ./src/containers/Translation/store/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Translation/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Translation/store/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/reducer.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/reducer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\n\nvar defaultState = {\n\ttranslationList: []\n};\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _constants.CHANGE_LIST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\ttranslationList: action.list\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Translation/style.css":
/*!**********************************************!*\
  !*** ./src/containers/Translation/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/containers/Translation/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Translation/style.css?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _remoteData = __webpack_require__(/*! ../../middlewares/remoteData */ \"./middlewares/remoteData.js\");\n\nvar _remoteData2 = _interopRequireDefault(_remoteData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\n\n// http://120.24.4.23:9091/api/c/banners/get/all\napp.use('/c', (0, _expressHttpProxy2.default)('http://120.24.4.23:9091', {\n\tproxyReqPathResolver: function proxyReqPathResolver(req) {\n\t\tconsole.log(req.url);\n\t\treturn '/api/c' + req.url;\n\t}\n}));\n\napp.use((0, _cookieParser2.default)());\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: false }));\n\napp.get('*', function (req, res, next) {\n\tvar params = {\n\t\t// domain: host\n\t\tdomain: 'zl123'\n\t};\n\t_remoteData2.default.req2('domains/get/shopId', 'get', params, function (error, data) {\n\t\tif (error) return next(error);\n\n\t\tif (data.code === 0) {\n\t\t\tres.cookie('shopId', JSON.stringify(data.data), { maxAge: 60 * 60 * 24 * 1 * 1000, httpOnly: false });\n\t\t\t//   const url = req.originalUrl;\n\t\t\t//   const path = req.path;\n\t\t\t//   const deviceAgent = req.headers['user-agent'].toLowerCase();\n\t\t\t//   const accept = req.get('accept') || '';\n\t\t\t//   const isPageReq = !(req.xhr || accept.indexOf('application/json') > -1);\n\t\t\t//   const isMobileReq = /mobile/.test(deviceAgent) && path !== '/m' && path.indexOf('/m/') === -1;\n\t\t\t//   if (isPageReq && isMobileReq) {\n\t\t\t// \treturn res.redirect('/m' + url);\n\t\t\t//   }\n\t\t}\n\t});\n\tvar store = (0, _store.getStore)(req);\n\t// 根据路由的路径，来往store里面加数据\n\tvar matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n\t// 让matchRoutes里面所有的组件，对应的loadData方法执行一次\n\tvar promises = [];\n\n\tmatchedRoutes.forEach(function (item) {\n\t\tif (item.route.loadData) {\n\t\t\tvar promise = new Promise(function (resolve, reject) {\n\t\t\t\titem.route.loadData(store).then(resolve).catch(resolve);\n\t\t\t});\n\t\t\tpromises.push(promise);\n\t\t}\n\t});\n\n\tPromise.all(promises).then(function () {\n\t\tvar context = { css: [] };\n\t\tvar html = (0, _utils.render)(store, _Routes2.default, req, context);\n\n\t\tif (context.action === 'REPLACE') {\n\t\t\tres.redirect(301, context.url);\n\t\t} else if (context.NOT_FOUND) {\n\t\t\tres.status(404);\n\t\t\tres.send(html);\n\t\t} else {\n\t\t\tres.send(html);\n\t\t}\n\t});\n});\n\nvar server = app.listen(3010);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// axios.interceptors.request.use(function(config){\n//    console.log('1')\n//     return config\n// })\n\n// axios.interceptors.response.use(function(config){\n//     console.log('2')\n//     return config\n// })\n\nvar createInstance = function createInstance(req) {\n\tvar simpleInstant = _axios2.default.create({\n\t\tbaseURL: 'http://120.24.4.23:9091/api',\n\t\t// baseURL: 'http://13.210.45.74:9091/api',\n\n\t\theaders: {\n\t\t\tcookie: req.get('cookie') || ''\n\t\t},\n\t\tparams: {\n\t\t\tshopId: req.cookies.shopId\n\t\t}\n\t});\n\tsimpleInstant.interceptors.request.use(function (config) {\n\t\tvar token = req.cookies.authorization ? req.cookies.authorization : '';\n\t\tif (token) {\n\t\t\tconfig.headers.Authorization = 'Bearer ' + token;\n\t\t}\n\t\treturn config;\n\t}, function (error) {\n\t\t//请求错误处理\n\t\tPromise.reject(error);\n\t});\n\n\tsimpleInstant.interceptors.response.use(function (response) {\n\t\t//成功请求到数据\n\t\t//这里根据后端提供的数据进行对应的处理\n\t\treturn response;\n\t}, function (error) {\n\t\t//响应错误处理\n\t\tconsole.log('error');\n\t\tconsole.log(error);\n\t\treturn Promise.reject(error);\n\t});\n\treturn simpleInstant;\n};\n\nexports.default = createInstance;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/util.js":
/*!****************************!*\
  !*** ./src/server/util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getRedirectPath = getRedirectPath;\n// 纯函数 完全根据你传递的信息跳转地址\nfunction getRedirectPath(type) {\n    // 根据用户信息 返回跳转地址\n    var url = '';\n    if (type.fullName) {\n        url += 'login';\n    } else if (type == 'home') {\n        url = '/';\n    }\n    return url;\n}\nexports.isTimeoutErr = function (err) {\n    var code = err.code,\n        message = err.message;\n\n    return code === 'ETIMEDOUT' || code === 'EHOSTUNREACH' || message.indexOf('timeout') > -1;\n};\n\n//# sourceURL=webpack:///./src/server/util.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.render = undefined;\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(store, routes, req, context) {\n\n\tvar content = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {\n\t\tstore: store\n\t}, void 0, _jsx(_reactRouterDom.StaticRouter, {\n\t\tlocation: req.path,\n\t\tcontext: context\n\t}, void 0, _jsx('div', {}, void 0, (0, _reactRouterConfig.renderRoutes)(routes)))));\n\tvar helmet = _reactHelmet.Helmet.renderStatic();\n\n\tvar cssStr = context.css.length ? context.css.join('\\n') : '';\n\n\treturn '\\n\\t\\t\\t<html>\\n\\t\\t\\t\\t<head>\\n\\t\\t\\t\\t\\t' + helmet.title.toString() + '\\n          ' + helmet.meta.toString() + '\\n\\t\\t\\t\\t\\t<style>' + cssStr + '</style>\\n\\t\\t\\t\\t</head>\\n\\t\\t\\t\\t<body>\\n\\t\\t\\t\\t\\t<div id=\"root\">' + content + '</div>\\n\\t\\t\\t\\t\\t<script>\\n\\t\\t\\t\\t\\t\\twindow.context = {\\n\\t\\t\\t\\t\\t\\t\\tstate: ' + JSON.stringify(store.getState()) + '\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t</script>\\n\\t\\t\\t\\t\\t<script src=\\'/index.js\\'></script>\\n\\t\\t\\t\\t</body>\\n\\t\\t\\t</html>\\n\\t  ';\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../components/Header/store */ \"./src/components/Header/store/index.js\");\n\nvar _store2 = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n\nvar _store3 = __webpack_require__(/*! ../containers/Register/store */ \"./src/containers/Register/store/index.js\");\n\nvar _store4 = __webpack_require__(/*! ../containers/Login/store */ \"./src/containers/Login/store/index.js\");\n\nvar _store5 = __webpack_require__(/*! ../containers/Translation/store */ \"./src/containers/Translation/store/index.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// beyond compare \n\nvar reducer = (0, _redux.combineReducers)({\n\thome: _store2.reducer,\n\theader: _store.reducer,\n\ttranslation: _store5.reducer,\n\tregister: _store3.reducer,\n\tlogin: _store4.reducer\n});\n\nvar getStore = exports.getStore = function getStore(req) {\n\t// 改变服务器端store的内容，那么就一定要使用serverAxios\n\treturn (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request4.default)(req))));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n\tvar defaultState = window.context.state;\n\t// 改变客户端store的内容，一定要使用clientAxios\n\treturn (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// 这个函数，是生成高阶组件的函数\n// 这个函数，返回一个组件\nexports.default = function (DecoratedComponent, styles) {\n\t// 返回的这个组件，叫做高阶组件\n\treturn function (_Component) {\n\t\t_inherits(NewComponent, _Component);\n\n\t\tfunction NewComponent() {\n\t\t\t_classCallCheck(this, NewComponent);\n\n\t\t\treturn _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).apply(this, arguments));\n\t\t}\n\n\t\t_createClass(NewComponent, [{\n\t\t\tkey: 'componentWillMount',\n\t\t\tvalue: function componentWillMount() {\n\t\t\t\tif (this.props.staticContext) {\n\t\t\t\t\tthis.props.staticContext.css.push(styles._getCss());\n\t\t\t\t}\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'render',\n\t\t\tvalue: function render() {\n\t\t\t\treturn _react2.default.createElement(DecoratedComponent, this.props);\n\t\t\t}\n\t\t}]);\n\n\t\treturn NewComponent;\n\t}(_react.Component);\n};\n\n//# sourceURL=webpack:///./src/withStyle.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "jscookie":
/*!***************************!*\
  !*** external "jscookie" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jscookie\");\n\n//# sourceURL=webpack:///external_%22jscookie%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "urllib":
/*!*************************!*\
  !*** external "urllib" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"urllib\");\n\n//# sourceURL=webpack:///external_%22urllib%22?");

/***/ })

/******/ });