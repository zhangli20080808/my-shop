import React from 'react';
import common from './common';
import config from '../config/feConfig';
import RightBar from './RightBar.jsx';

const companyName = config.companyName;
const l2Warehouse = config.l2Warehouse;
const cookies = require('jscookie')

class TopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateCartNum: 0,
      originUrl: '/',
      shopInfo: this.props.shopInfo
    }
  }

  componentDidMount() {

    //获取来源URL
    this.setState({
      originUrl: encodeURIComponent(location.pathname + location.search)
    });

    //会员处理
    // if (this.props.userInfo) {

    //查看用户信息
    // common.sendRequest('get', {}, '/userInfo/getUserInfo', (res) => {
    //   const {data,code} = res;
    //   if (code == 0) {
    //     this.setState({
    //       primeEndTime: data.primeEndTime
    //     }, () => {
    //       if (data.primeEndTime) {
    //         const primeTimer = setInterval(() => {
    //           if (!common.getPrimeEndTime(data.primeEndTime)) {
    //             this.setState({
    //               primeEndTime: ''  //会员过期置空
    //             })
    //           }
    //           if (!this.state.primeEndTime) clearInterval(primeTimer);
    //         }, 1000)
    //       }
    //     })
    //   }
    // })

    if (!this.props.cartNum) this.getCartCount();
    // }
  }

  /**
   * 获取购物车商品数量
   */
  getCartCount = () => {
    let count, num;
    const _this = this,
      type = 'get',
      data = {},
      url = '/product/getCartCount',
      suc = (res) => {
        if (res.code === 0) {
          // console.log(res)
          num = res.data;
          // console.log(num)
          if (num < 0) {
            count = 0;
          } else if (num >= 0 && num <= 99) {
            count = num
          } else {
            count = 99
          }
          _this.setState({
            stateCartNum: count,
          })
        }
      };

    common.sendRequest(type, data, url, suc);
  };

  /**
   * 退出登录
   */
  logout = () => {
    cookies.del('authorizatsion');
    window.location.href = "/user/login"
  };

  render = () => {
    const {
        originUrl,
        primeEndTime,
        stateCartNum,
        shopInfo
      } = this.state,
      {
        cartNum,
        userInfo,
        companyInfo
      } = this.props;

    return (
      <div className="tbar-section">
        <div className="inner">
          <div>
            <div className="tbar-sec1">
              <a className="bg" href="/">首页</a>
            </div>
            <div className="tbar-sec1">
              {shopInfo.email ? <span className='email'>
                        <i className={"iconfont icon-QQ"}/>
                {shopInfo.email}
                      </span> : ''
              }
              {
                shopInfo.phone ? <span className='email'>
              <i className={"iconfont icon-yidongduanicon-"}/>

                  {shopInfo.phone}
              </span> : ''
              }
              {
                shopInfo.wechat ? <span className='email'>
              <i className={"iconfont icon-weixin"}/>
                  {shopInfo.wechat}
              </span> : ''
              }
            </div>
            <div className="tbar-sec2">
              <ul>
                {!userInfo ?
                  <li>
                    <a href={"/user/register?ref=" + originUrl} className="br0">注册</a>
                    <a href={"/user/login?ref=" + originUrl}>登录</a>
                  </li> :
                  <li className="t-info-li">
                    <a
                      className="bg t-server t-info">
                      {primeEndTime ?
                        <img className="prime-logo" src="/images/prime-logo2.png"/> : ''
                      }
                      {userInfo.fullName}
                    </a>
                    <ul className="t-bar t-info-bar bg">
                      {/*<li>
                                                <a href="/prime" target="_blank">Prime会员</a>
                                        </li>*/}
                      {/*{
											companyName !== 'LINKC' ? (
												<li>
													<a href="/recharge" target="_blank">账户余额</a>
												</li>
											) : ''
										}*/}
                      {/*<li>
											<a href="/coupon" target="_blank">我的优惠券</a>
										</li>*/}
                      {/*<li>
											<a href="/favorite" target="_blank">我的收藏夹</a>
										</li>*/}
                      {/*<li>
											<a href="/address" target="_blank">地址管理</a>
										</li>*/}
                      <li>
                        <a href="/modifyPassword" target="_blank">修改密码</a>
                      </li>
                      <li>
                        <a href="/userInfo" target="_blank">个人信息</a>
                      </li>
                      <li>
                        <a onClick={this.logout}>退出登录</a>
                      </li>
                    </ul>
                  </li>
                }
                <li className="bg t-order">
                  <a href={userInfo ? "/order" : '/user/login'} target="_blank">我的订单</a>
                </li>
                <li className="bg t-cart">
                  <a href={userInfo ? "/cart" : '/user/login'} target="_blank">
                    购物车
                    <i className="red"> {cartNum || stateCartNum} </i>
                    件
                  </a>
                </li>
                {companyName === l2Warehouse ?
                  <li>
                    <a target="_blank" href="help/certificate">商家授权</a>
                  </li> : ''
                }
                <li className="bg t-server">
                  <a
                    className="br0">
                    客户服务
                  </a>
                  <ul className="t-bar t-server-bar">
                    <li>
                      <a href="/help?id=5" target="_blank">售后细则</a>
                    </li>
                    <li>
                      <a href="/help?id=9" target="_blank">快递运送方式</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>


          </div>

        </div>
        <RightBar
          // companyInfo={companyInfo}
          cartNum={cartNum || stateCartNum}
          userInfo={userInfo}
        />
      </div>
    )
  }
}

export default TopBar;
