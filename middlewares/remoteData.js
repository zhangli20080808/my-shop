import { apiBasePath } from '../config'
import urllib from 'urllib'
import { isTimeoutErr } from '../src/server/util'
exports.req2 = (key, method, params, callback) => {
  params = params || {};
  const url = apiBasePath + key;
  urllib.request(url, {
    timeout: 60000,
    method: method || 'get',
    dataType: 'json',
    data: params,
    contentType: 'json'
  }, (err, result) => {
    if (err) {
      if (isTimeoutErr(err)) {
        return req(key, method, params, callback)
      }
      return callback(err);
    }
    if (!result) {
      return callback(error());
    }
    return callback(null, result);
  })
};

exports.req = (key, method, params, callback) => {
  params = params || {};
  const authorization = params.token
  const Headers = {
    'Content-Type': 'application/json',
  }
  if (authorization) {
    Headers['Authorization'] = `Bearer ${authorization}`
  }
  if (params.token) {
    delete params.token
  }
  const url = apiBasePath + key;
  urllib.request(url, {
    timeout: 60000,
    method: method || 'get',
    dataType: 'json',
    data: params,
    headers: Headers,
  }, (err, result) => {
    if (err) {
      if (isTimeoutErr(err)) {
        return req(key, method, params, callback)
      }
      return callback(err);
    }
    if (!result) {
      return callback(error());
    }
    const { code, message } = result;
    const paramsStr = JSON.stringify(params);
    switch (code) {
      case 0:
        return callback(null, result);
      case 500://接口系统错误
        console.error(`req ${url} error [${paramsStr}] : ${message}`);
        return callback(error(message, code));
      default://其他错误，比如下单库存不足
        console.error(`req ${url} error [${paramsStr}] : ${message}`);
        return callback(error(message, code));
    }
  })
};
