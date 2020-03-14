import React from "react";
import { connect } from "react-redux";
import { toLogin, getUserInfo } from "./store/actions";
import { Redirect, Link } from "react-router-dom";

import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

function Login(props) {
  return <React.Fragment>Login</React.Fragment>;
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const mapStateToProps = state => ({
  isLogin: state.login.isLogin,
  userInfo: state.login.userInfo,
  redirectTo: state.login.redirectTo
});

const mapDispatchToProps = dispatch => ({
  handleSubmitByPwd(e, state) {
    e.preventDefault();
    const {
      pwdForm: { account, password }
    } = state;

    if (account.valid || password.valid) return;
    const params = {
      username: account.value,
      password: password.value
    };
    dispatch(toLogin(params));
  },
  getUserInfos() {
    dispatch(getUserInfo());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
