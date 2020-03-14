import React from 'react';
import config from '../config/feConfig';

const companyName = config.companyName;
const l2Warehouse = config.l2Warehouse;

export default class PayType extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      walletFlag: props.walletFlag
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({walletFlag: nextProps.walletFlag});
  }

  render = () => {
    const {
        detail,
        payPart,
        selectValue,
        orderNumberString
      } = this.props,
      {
        walletFlag
      } = this.state;

    let btn,
      {
        isWalletEnough
      } = detail,
      walletSum = detail.walletSum || {},
      totalAmount = walletSum ? walletSum.totalAmount : 0,
      currencyName = walletSum ? walletSum.currencyName : '';

    if (selectValue == 1) {
      btn = <div>
        {payPart ? <a className="flex-child pay-btn part-cancel" href="/order">取消</a> : ''}
        <a className="pay-btn" onClick={this.props.payOrder}>立即付款</a>
      </div>
    } else if (selectValue == 5) {
      btn = <form method='post' action='/pay/payOrder'>
        <input type="hidden" value="alipay" name="channel"/>
        <div className="flex-parent">
          {payPart ? <a className="flex-child pay-btn part-cancel" href="/order">取消</a> : ''}
          <input type="submit" value="立即付款" className="pay-btn flex-child"/>
        </div>
      </form>
    } else if (selectValue == 4 && totalAmount) {
      if (walletFlag) {
        btn = <a className="pay-btn disable-btn">立即付款</a>;
      } else {
        btn = <a className="pay-btn" onClick={this.props.payOrderByWalletCheck}>立即付款</a>;
      }
    } else {
      btn = <div className="giro-btn-box pay-Offline-btn">
        <a href="/">返回首页</a>
        <a href="/order">我的订单</a>
        <a href="/cart">购物车</a>
      </div>
    }

    return (
      <div className="m-pay-section">
        <div className="pay-col">
          <div className="pay-style-col clear-float">
            <div className="pay-type-icon pay-type-xs">
              <p>线上支付</p>
            </div>
            <div className="pay-style-main">
              <div className="pay-style">
                <label className={selectValue == 1 ? 'pay-select' : ''}>
                  <input
                    type="radio"
                    value="1"
                    onClick={this.props.onSelect}
                  />
                  <img src="./images/wechat-pay.png"/>
                  微信支付
                </label>
              </div>
              {
                companyName !== 'LINKC' ? (
                  <div className="pay-style">
                    <label className={selectValue == 5 ? 'pay-select' : ''}>
                      <input
                        type="radio"
                        value="5"
                        onClick={this.props.onSelect}
                      />
                      <img src="./images/alipay.png"/>
                      支付宝支付
                    </label>
                  </div>
                ) : ''
              }
              {
                totalAmount && !detail.hasWalletPayed && isWalletEnough ? (
                  <div className="pay-style">
                    <label className={selectValue == 4 ? 'pay-select' : ''}>
                      <input
                        type="radio"
                        value="4"
                        onClick={this.props.onSelect}
                      />
                      <img src="./images/wallet-icon.png"/>
                      余额支付
                      <i>（当前余额：{currencyName ? totalAmount + currencyName : totalAmount}）</i>
                    </label>
                  </div>
                ) : (
                  <div className="pay-style">
                    <label className="pay-disable">
                      <input
                        type="radio"
                      />
                      <img src="./images/wallet-disable.png"/>
                      余额支付
                      <i>（当前余额：{currencyName ? totalAmount + currencyName : totalAmount}）</i>
                    </label>
                    <p className="red">当前余额不足，请选择其他方式付款</p>
                  </div>
                )
              }
            </div>
          </div>

          <div className="pay-style-col clear-float">
            {
              companyName !== l2Warehouse ? (
                <div style={{borderBottom: '1px solid #f1f1f1'}}>
                  <div className="pay-type-icon  pay-type-xx">
                    <p>线下支付</p>
                  </div>
                  {companyName == 'NZH' ? (
                    <div className="pay-style-main">
                      <div className="pay-style">
                        <label className={selectValue == 6 ? 'pay-select' : ''}>
                          <input
                            type="radio"
                            value="6"
                            onClick={this.props.onSelect}
                          />
                          <img src="./images/giro-pay.png"/>
                          银行转账
                          <i>（纽币）</i>
                        </label>
                      </div>
                      <div className="pay-style">
                        <div className={selectValue == 6 ? 'pay-c4 pay-select-info' : 'pay-c4'}>
                          <p>
                            <span className="pay-xx-title">账号：</span>
                            06-0998-0193159-00
                          </p>
                          <p>
                            <span className="pay-xx-title">
                              {companyName === 'NZH' ? '银行名称：' : ''}
                            </span>
                            {companyName === 'NZH' ? ' ANZ' : ''}
                          </p>

                          <p>
                            <span className="pay-xx-title">账户名称：</span>
                            NZH Ltd</p>
                          <p>
                            <span className="pay-xx-title">注&nbsp;&nbsp;意：</span>
                            转账时请在Reference信息中注明您的单号“<span className="red">{orderNumberString.join('，')}</span>”，以便我们确认您的订单，支付完成后请务必将付款信息的截图发给客服。
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : ''}
                  <div className="pay-style-main">
                    <div className="pay-style">
                      <label className={selectValue == 2 ? 'pay-select' : ''}>
                        <input
                          type="radio"
                          value="2"
                          onClick={this.props.onSelect}
                        />
                        <img src="./images/giro-pay.png"/>
                        银行转账
                        <i>（{companyName === 'LINKC' ? '澳元' : '纽币'}）</i>
                      </label>
                    </div>
                    <div className="pay-style">
                      <div className={selectValue == 2 ? 'pay-c4 pay-select-info' : 'pay-c4'}>
                        <p>
                          <span className="pay-xx-title">账号：</span>
                          {companyName === 'LINKC' ? '302056923' : '02-0191-0420955-00'}
                        </p>
                        <p>
                          <span className="pay-xx-title">
                            {companyName === 'LINKC' ? 'BSB：' : '银行名称：'}
                          </span>
                          {companyName === 'LINKC' ? '012245' : 'BNZ Bank'}
                        </p>
                        <p>
                          <span className="pay-xx-title">账户名称：</span>
                          {companyName === 'LINKC' ? 'Linkc trading Pty Ltd' : 'NZH Ltd'}</p>
                        <p>
                          <span className="pay-xx-title">注&nbsp;&nbsp;意：</span>
                          转账时请在Reference信息中注明您的单号“<span className="red">{orderNumberString.join('，')}</span>”，以便我们确认您的订单，支付完成后请务必将付款信息的截图发给客服。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pay-style-main">
                    <div className="pay-style">
                      <label className={selectValue == 3 ? 'pay-select' : ''}>
                        <input
                          type="radio"
                          value="3"
                          onClick={this.props.onSelect}
                        />
                        <img src="./images/giro-pay.png"/>
                        银行转账
                        <i>（人民币）</i>
                      </label>
                    </div>
                    <div className="pay-style">
                      <div className={selectValue == 3 ? 'pay-c4 pay-select-info' : 'pay-c4'}>
                        <p>
                          <span className="pay-xx-title">账号：</span>
                          {companyName === 'LINKC' ? '6212-2619-0101-1705-447' : '6214-8572-1081-6445'}
                        </p>
                        <p>
                          <span className="pay-xx-title">银行名称：</span>
                          {companyName === 'LINKC' ? '工商银行长沙分行新星支行' : '招商银行长沙国金支行'}
                        </p>
                        <p>
                          <span className="pay-xx-title">账户名称：</span>
                          曾浩
                        </p>
                        <p>
                          <span className="pay-xx-title">注&nbsp;&nbsp;意：</span>
                          转账时请在备注信息中注明您的单号“<span className="red">{orderNumberString.join('，')}</span>”以便我们确认您的订单，支付完成后请务必将付款信息的截图发给客服。
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ) : ''
            }
            <div className="fail-tip">
              <p>支付遇到任何问题， 请联系公众号客服， 热心的客服妹子一定会帮您解决的。</p>
            </div>
            <div className={payPart ? 'pay-bottom' : 'pay-bottom pay-bottom-spe'}>
              {btn}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
