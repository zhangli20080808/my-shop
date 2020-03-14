import React, { Fragment, Component } from 'react';
import common from '../../../common/common';
// import Alert from '../../../common/Alert.jsx';
// import Footer from '../../../common/Footer.jsx';
import config from '../../../config/feConfig';
import {Redirect,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../Register/store/actions'

const companyName = config.companyName;
const l2Warehouse = config.l2Warehouse;

import styles from './style.css'

@connect(
    state => state.fullName,
    { register }
)
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue: companyName === 'NZH' ? 64 : 86,
            count: 60,
            flag: true,
            getCodeFlag: true,
            originUrl: encodeURIComponent(props.originUrl) || '',
            form: {
                phone: {
                    value: '',
                    valid: false,
                    error: ''
                },
                code: {
                    value: '',
                    valid: false,
                    error: ''
                },
                fullName: {
                    value: '',
                    valid: false,
                    error: ''
                },
                password: {
                    value: '',
                    valid: false,
                    error: ''
                },
                againPassword: {
                    value: '',
                    valid: false,
                    error: ''
                },
            },
        }
    }

    componentDidMount() {
    }

    getCountryValue(value) {
        const { form } = this.state;

        this.setState({
            selectValue: value,
            form: {
                ...form,
                phone: {
                    valid: false,
                    value: '',
                    error: ''
                }
            }
        })
    };

    handleValueChange(field, value) {

        let {
            form,
            form: {
                password
            },
            selectValue
        } = this.state,
            newFieldObj = {
                value,
                error: '',
                valid: false
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
            case 'picCode':
                if (!value) {
                    newFieldObj.error = '请输入图片验证码';
                    newFieldObj.valid = true;
                }
                break;
            case 'code':
                if (!value) {
                    newFieldObj.error = '请输入短信验证码';
                    newFieldObj.valid = true;
                }
                break;
            case 'fullName':
                if (!value) {
                    newFieldObj.error = '请输入昵称';
                    newFieldObj.valid = true;
                }
                break;
            case 'password':
                if (!value) {
                    newFieldObj.error = '请输入密码';
                    newFieldObj.valid = true;
                } else if (value.length < 6) {
                    newFieldObj.error = '密码长度不能少于6位';
                    newFieldObj.valid = true;
                }
                break;
            case 'againPassword':
                if (!value || password.value !== value) {
                    newFieldObj.error = '两次输入的密码不匹配，请检查';
                    newFieldObj.valid = true;
                }
                break;
        }

        this.setState({
            form: {
                ...form,
                [field]: newFieldObj
            }
        })
    };
    showMmCoupon() {
        this.setState({
            mmFlag: true
        })
    };
    handdleBack() {
        this.setState({
            confirmFlag: true
        })
    };
    /**
 * 注册
 */


    render() {
        const { form: {
            phone,
            picCode,
            code,
            fullName,
            password,
            againPassword
        },

            originUrl,
            selectValue,
            flag,
            count,
            msg,
            msgFlag,
            confirmFlag,
            codePic,
            mmFlag
        } = this.state
        const { handleRegister} = this.props
        return (
            <div className={styles.registerpage}>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                {this.props.code == 1 ? <div>账号密码错误</div>:null}
                <div>{this.props.fullName}</div>
                <div className="loginsec1">
                    <div className="logoinner">
                        <a onClick={this.handdleBack}>
                            {/*<img src={companyInfo.logo}/>*/}
                            
                        </a>
                    </div>
                </div>
                <div className="loginsec2">
                    <div className="inner">
                        <div className="usermain">
                            <div className="register">
                                <h2>用户注册</h2>
                                <form>
                                    <div className="loginform registerstyle">
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
                                                className="phonecol"
                                                type="text"
                                                placeholder="手机号码是您的登录账号"
                                                maxLength="11"
                                                value={phone.value}
                                                onChange={(e) => this.handleValueChange('phone', e.target.value)}
                                            />
                                            {phone.valid ? <p className="error error5">{phone.error}</p> : ''}
                                        </label>
                                        <label>
                                            <input
                                                type="text"
                                                placeholder="昵称（长度不超过20）"
                                                onChange={(e) => this.handleValueChange('fullName', e.target.value)}
                                            />
                                            {fullName.valid ? <p className="error error5">{fullName.error}</p> : ''}
                                        </label>
                                        <label>
                                            <input
                                                type="password"
                                                placeholder="密码（6-16位密码，区分大小写）"
                                                onChange={(e) => this.handleValueChange('password', e.target.value)}
                                            />
                                            {password.valid ? <p className="error error5">{password.error}</p> : ''}
                                        </label>
                                        <label>
                                            <input
                                                type="password"
                                                placeholder="确认密码"
                                                ref="rePassword"
                                                onChange={(e) => this.handleValueChange('againPassword', e.target.value)}
                                            />
                                            {againPassword.valid ? <p className="error error5">{againPassword.error}</p> : ''}
                                        </label>
                                    </div>
                                    <a className="loginbtn registerbtn" onClick={() => handleRegister(this.state)}>注册</a>
                                    <Link className="tologin" to='/login?ref=" + originUrl'>已有账号？去登录</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    redirectTo: state.register.redirectTo,
    fullName: state.register.fullName,
    code: state.register.code
});
const mapDispatchToProps = (dispatch) => ({
    handleRegister(state) {
        const {
            form: {
                code,
                phone,
                fullName,
                password,
                againPassword
            },
            selectValue
        } = state;

        if (!phone.value || phone.valid ||
            // !code.value || code.valid ||
            !password.value || password.valid ||
            !againPassword.value || againPassword.valid) return;
        const params = {
            phone: phone.value,
            fullName: fullName.value,
            rePassword: againPassword.value,
            password: password.value,
            countryCode: selectValue,
            // shopId: '100169'
        };
        dispatch(register(params))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register)