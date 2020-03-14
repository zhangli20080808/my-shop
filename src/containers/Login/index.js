import React, { Component } from 'react'
import common from '../../../common/common';
import Alert from '../../../common/Alert'
import config from '../../../config/feConfig';
import { connect } from 'react-redux';
import { toLogin, getUserInfo } from './store/actions';
import {Redirect,Link} from 'react-router-dom'


const companyName = config.companyName;
const l2Warehouse = config.l2Warehouse;
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ref: props.originRef,
            pwdForm: {
                account: {
                    valid: false,
                    value: '',
                    error: ''
                },
                password: {
                    valid: false,
                    value: 0,
                    error: ''
                }
            },
            phoneForm: {
                phone: {
                    valid: false,
                    value: '',
                    error: ''
                },
                code: {
                    valid: false,
                    value: '',
                    error: ''
                }
            },
            count: 60,
            flag: false,
            codeFlag: true,
            selectValue: companyName === 'NZH' ? 64 : 86
        }
    }
    showMsg(msg) {
        this.setState({
            msgFlag: true,
            msg: msg
        });
        setTimeout(() => {
            this.setState({
                msgFlag: false
            })
        }, 2000);
    };

    changeLoginType() {
        const { flag } = this.state;
        this.setState({
            flag: !flag
        })
    };

    getCountryValue(value) {
        const { phoneForm } = this.state;

        this.setState({
            selectValue: value,
            phoneForm: {
                ...phoneForm,
                phone: {
                    valid: false,
                    value: '',
                    error: ''
                }
            }
        })
    };
    /**
 * 数据校验 - 密码登录
 */
    handleValueChange(field, value) {
        console.log(field, value)

        const { pwdForm } = this.state,
            newFieldObj = {
                value,
                valid: false,
                error: ''
            };

        switch (field) {
            case 'account':
                if (!value) {
                    newFieldObj.error = '请输入账号';
                    newFieldObj.valid = true;
                }
                break;
            case 'password':
                if (!value) {
                    newFieldObj.error = '请输入密码';
                    newFieldObj.valid = true;
                }
                break;
        }

        this.setState({
            pwdForm: {
                ...pwdForm,
                [field]: newFieldObj
            }
        })
    };
    /**
    * 数据校验 - 手机验证码登录
    */
    handlephoneCodeChange(field, value) {
        const { phoneForm, selectValue } = this.state,
            newFieldObj = {
                value,
                valid: false,
                error: ''
            };

        switch (field) {
            case 'phone':
                if (!value) {
                    newFieldObj.error = '请输入手机号';
                    newFieldObj.valid = true;
                } else {
                    if (!common.isValidPhone(value) && selectValue == 86) {
                        newFieldObj.error = '请确保手机号码无误';
                        newFieldObj.valid = true;
                    } else if (value.substr(0, 2) !== '02' && selectValue == 64) {
                        newFieldObj.error = '请输入以02开头的完整号码';
                        newFieldObj.valid = true;
                    } else if (value.substr(0, 2) !== '04' && selectValue == 61) {
                        newFieldObj.error = '请输入以04开头的完整号码';
                        newFieldObj.valid = true;
                    }
                }
                break;
            case 'code':
                if (!value) {
                    newFieldObj.error = '请输入验证码';
                    newFieldObj.valid = true;
                }
                break;
        }

        this.setState({
            phoneForm: {
                ...phoneForm,
                [field]: newFieldObj
            }
        })
        console.log(this.state)
    };
    render() {
        const { companyInfo } = this.props,
            {
                ref,
                msg,
                flag,
                count,
                msgFlag,
                pwdForm: {
                    account,
                    password
                },
                phoneForm: {
                    code,
                    phone
                },
                codeFlag,
                selectValue
            } = this.state;

        return (
            <div className="login-page">
                <div className="login-sec1">
                    <div className="logo inner">
                        <a href="/">
                            {/*<img src={companyInfo.logo}/>*/}
                        </a>
                    </div>
                </div>
                {this.props.isLogin ? this.props.getUserInfos() : null}

                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}

                <div className="login-sec2">
                    <div className="inner">
                        <div className="login clear-float">
                            <h2 className="login-n-tit clear-float">
                                <span className={!flag ? 'login-n-current' : ''}>密码登录</span>
                                {/* <span onClick={this.changeLoginType} className={flag ? 'login-n-current' : ''}>手机登录</span> */}
                            </h2>
                            <div className="login-form">
                                {account.valid ? <p className="error">{account.error}</p> : ''}
                                {password.valid ? <p className="error">{password.error}</p> : ''}
                                {phone.valid ? <p className="error">{phone.error}</p> : ''}
                                {code.valid ? <p className="error">{code.error}</p> : ''}
                                {flag ?
                                    <form onSubmit={(e) => this.handleSubmitByPhone(e)}>
                                        <label>
                                            {companyName === l2Warehouse ?
                                                <select className="country" value={selectValue}
                                                    onChange={(e) => this.getCountryValue(e.target.value)}>
                                                    <option value="86">中国+86</option>
                                                </select> :
                                                companyName === 'LINKC' ?
                                                    <select className="country" value={selectValue}
                                                        onChange={(e) => this.getCountryValue(e.target.value)}>
                                                        <option value="86">中国+86</option>
                                                        <option value="61">澳大利亚+61</option>
                                                    </select> :
                                                    <select className="country" value={selectValue}
                                                        onChange={(e) => this.getCountryValue(e.target.value)}>
                                                        <option value="64">新西兰+64</option>
                                                        <option value="86">中国+86</option>
                                                        <option value="61">澳大利亚+61</option>
                                                    </select>
                                            }
                                            <input
                                                className="login-n-r user"
                                                type="number"
                                                placeholder="手机号"
                                                value={phone.value}
                                                onChange={(e) => this.handlephoneCodeChange('phone', e.target.value)}
                                            />
                                        </label>
                                        <label>
                                            {codeFlag ?
                                                <a
                                                    className={phone.value && !phone.valid ? 'get-code-true login-n-l' : 'get-code-true login-n-l login-n-disable'}
                                                    onClick={this.sendSignInCode}>
                                                    获取验证码
                            </a> :
                                                <a className="get-code login-n-l">{count}秒后重新获取</a>
                                            }
                                            <input
                                                className="login-n-r password"
                                                type="text"
                                                placeholder="验证码"
                                                onChange={(e) => this.handlephoneCodeChange('code', e.target.value)}
                                            />
                                        </label>
                                    </form> :
                                    <form>
                                        <input
                                            className="user"
                                            type="text"
                                            placeholder="手机号"
                                            onChange={(e) => this.handleValueChange('account', e.target.value)} />
                                        <input
                                            className="password"
                                            type="password"
                                            placeholder="密码"
                                            onChange={(e) => this.handleValueChange('password', e.target.value)} />
                                    </form>
                                }
                                {flag ?
                                    phone.value && code.value ?
                                        <input className="login-btn" type="submit" onClick={this.handleSubmitByPhone} value="登录" /> :
                                        <input className="login-btn" type="submit" value="登录" />
                                    :
                                    account.value && password.value ?
                                        <input className="login-btn" type="submit" onClick={(e) => this.props.handleSubmitByPwd(e, this.state)} value="登录" /> :
                                        <input className="login-btn" type="submit" value="登录" />
                                }
                                <p className="clear-float">
                                    <a href="/user/findpwd">忘记账号/密码？</a>
                                    <a
                                        className="go-register-btn"
                                        href={encodeURIComponent(ref) !== 'undefined' ? '/user/register?ref=' + encodeURIComponent(ref) : '/user/register'}>
                                        免费注册
                      </a>
                                </p>
                                {config.enableWechatLogin ?
                                    <div className="wechat-login" onClick={this.handleLoginByWechat}>
                                        其他方式登录：
                        <img src="/images/wechat.png" />
                                    </div> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {msgFlag ? <Alert msg={msg} /> : ''}
                {/*<Footer companyInfo={companyInfo}/>*/}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.login.isLogin,
    userInfo: state.login.userInfo,
    redirectTo: state.login.redirectTo
});
const mapDispatchToProps = (dispatch) => ({
    handleSubmitByPwd(e, state) {
        e.preventDefault()
        const {
            pwdForm: {
                account,
                password
            }
        } = state;

        if (account.valid || password.valid) return;
        const params = {
            username: account.value,
            password: password.value,
        };
        dispatch(toLogin(params))
    },
    getUserInfos() {
        dispatch(getUserInfo())
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login)