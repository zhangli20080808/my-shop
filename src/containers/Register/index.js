import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../Register/store/actions";

const propTypes = {};

const defaultProps = {};

// @connect(
//     state => state.fullName,
//     { register }
// )

function Register(props) {
  return <React.Fragment>Register</React.Fragment>;
}

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;

const mapStateToProps = state => {
  return { state };
};
const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
