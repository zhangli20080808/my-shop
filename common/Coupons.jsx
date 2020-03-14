import React from 'react';
import common from './common';

const config = require('../config/feConfig');
const companyName = config.companyName;
const l2Warehouse = config.l2Warehouse;

export default class Coupons extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			shopFlag: false,
			tips:false
		}
	}
	showTips=(e)=>{
		this.setState({tips:true})
			// console.log(e.pageX+"//"+e.pageY)
	}
	closeTips=()=>{
		this.setState({tips:false})
	}
	render = () => {
		let {
				flag,
				couponData,
				info,//优惠券信息
			} = this.props,
			couponList;
		if (couponData && couponData.length) {
			let voucherBookIdList=[];
			couponData.map(val=>{
				voucherBookIdList.push(val.voucherBookId)
			});
		let hash = {};
		
		let	newCouponData = couponData.reduce(function(item, next) {//优惠券去重复
				   hash[next.voucherBookId] ? '' : hash[next.voucherBookId] = true && item.push(next);
				   return item
			   }, []);
		let selectedId=null;
		if (flag==="cart") {
			 selectedId=info.voucher.map(coupon=>{
				return coupon.voucherBookId
			});
			newCouponData = newCouponData.filter(coupon=>{
					selectedId.map(id=>{
						if(coupon.voucherBookId==id){
							coupon.selected=1;
						}
					})
					return coupon ;
				   })
		}
			couponList = newCouponData.map((coupon) => {
				let {
						id,
						voucherBookId,
						name,
						shopId,
						isValid,
						selected,
						endTime,
						startTime,
						description,
						currencyCode,
						firstCurrencyName,
						secondCurrencyName,
						selectedShop,
						brandName,
						productName,
						firstAmount,
						secondAmount,
						firstMinProductAmount,
						secondMinProductAmount,
						superimposed
					} = coupon,
					couponType = coupon.redimTime ? 'coupon-type coupon-used' : 'coupon-type coupon-overtime',
					shopText,
					shopTextArr = [],
					clickFunc = flag === 'cart' && isValid !== 0 ? this.props.couponClickFunc.bind(this,{'couponType':'coupon','id':id,'value':1,"superimposed":superimposed.data[0]}) : '',
					timeHtml,
					resetCurrencyName = companyName === l2Warehouse ? secondCurrencyName.split(' ')[1] : firstCurrencyName.split(' ')[1],
					brandInfo = '',
					productInfo = '',
					rangeText,
					couponBg,
					num=  voucherBookIdList.join('').split(voucherBookId).length-1;
				// couponBg = flag == 'disable' || (flag == 'cart' && isValid == 0) ? 'coupon-c1 coupon-spe-bg' : 'coupon-c1 coupon-default-bg',
				//根据不同货币区分券的颜色
				if (flag === 'disable'||flag === 'cart' && isValid === 0) {
					couponBg = 'coupon-c1 coupon-spe-bg';
				} else {
					if (currencyCode === 'NZD') {
						couponBg = 'coupon-c1 coupon-default-bg';
					} else if (currencyCode === 'CNY') {
						couponBg = 'coupon-c1 coupon-default-bg1';
					} else {
						couponBg = 'coupon-c1 coupon-default-bg2';
					}
				}

				//其他使用范围限制
				if (brandName && brandName.length) brandInfo = brandName.join(',');
				if (productName && productName.length) productInfo = productName.join(',');
				let otherInfo = brandInfo + productInfo;

				//店铺处理
				if (shopId && shopId.length > 1) {
					shopId.map((shop) => {
						shopTextArr.push(config.warehouseName[shop]);
					});
					shopText = shopTextArr.join(',');
					shopText.substring(0, shopText.lastIndexOf(','));
				} else {
					shopText = config.warehouseName[shopId];
				}
				//日期处理
				if (startTime && !endTime || !startTime && !endTime) {
					timeHtml = <span>无时间限制</span>;
				} else if (!startTime && endTime) {
					timeHtml =<span>{common.formatDate(endTime * 1000, 'dot').slice(0, 11)}到期</span>
				} else if (startTime && endTime) {
					timeHtml =<span>{common.formatDate(startTime * 1000, 'dot').slice(0, 11)} - {common.formatDate(endTime * 1000, 'dot').slice(0, 11)}</span>
				} else if (startTime === endTime) {
					timeHtml = <span>仅限{common.formatDate(startTime * 1000, 'dot').slice(0, 11)}使用</span>
				}

				rangeText = otherInfo ? shopText + ',' + otherInfo : shopText;
				
				return (
					<div key={id} id={superimposed.data[0]===1?"supercoupon"+id:'coupon' + id} className={flag === 'cart'?superimposed.data[0]===1&&selected===1 ? 'coupon-col current-coupon1':selected===1?'coupon-col current-coupon':'coupon-col': 'coupon-col'}
							 onClick={clickFunc} voucherId={flag === 'cart'?selected===1?id:null:null} >
						<div className={couponBg}>
						{superimposed.data[0]===1?<p className={flag === 'disable'||isValid === 0?"super1":"super"}>Super</p>:null}
						{num>1?<div className={isValid===0||flag === 'disable'?"triangle-topright1":"triangle-topright"}>
						</div>:null}
						{num > 1 ?<p className={isValid===0||flag === 'disable'?"coupon_num1":"coupon_num"}> {num}</p>:null}
							{flag === 'disable' ?
								<div className={couponType}/> : ''
							}
							<p className="coupon-price">
								<i>{resetCurrencyName ? resetCurrencyName : '¥'}</i>
								{companyName === l2Warehouse ? secondAmount : firstAmount}
							</p>
							{
								companyName === l2Warehouse ? (
									<p className="coupon-limit">
										<i>{name}</i>
										【{secondMinProductAmount ? '满' + secondCurrencyName + secondMinProductAmount + '立减' : '无金额门槛'}】
										【{superimposed.data[0]===1?'【可叠加】':null}】
									</p>
								) : (
									<p className="coupon-limit">
										<i>{name}</i>
										【{firstMinProductAmount ? '满' + firstCurrencyName + firstMinProductAmount + '立减' : '无金额门槛'}】
										{superimposed.data[0]===1?'【可叠加】':null}
									</p>
								)
							}
						</div>
						<div className="coupon-c2">
							<p className="ellipsis">
								<i>适用范围：</i>
								<a style={{cursor: 'help', color: '#999'}} title={rangeText}>
									仅限{rangeText}使用
								</a>
							</p>
							<p>
								<i >有效日期：</i>
								{timeHtml}
								{/* {this.state.tips&&timeStatus?<div className='mTips'>
								{newTimeList.map((val)=>{
									{val}
								})}
			
								</div>:null} */}
							</p>
							<p>
								<i>其他说明：</i>
								{description}
							</p>
							<p className="coupon-select-shop">
								{selectedShop && isValid === 0 ? selectedShop : ''}
							</p>
							<img className="coupon-select-icon" src="/images/select.png"/>
						</div>
					</div>
				)
			})
		}

		return (
			<div className="coupon-section clear-float">
			{info&&info.freePostage?
			<div id="coupon2"  voucherId="2" className={info.discountType === 2 ? 'coupon-col current-coupon' : 'coupon-col'} onClick={this.props.couponClickFunc.bind(this,{'couponType':'postage','shopId':info.shopId,'value':2,superimposed:null,id:2})}>
						<div className="coupon-c1 coupon-default-bg3 coupon-c3">
						<p className="coupon-price"><i>$</i>{info.freePostage.firstAmount}</p>
				<p className="coupon-limit"><i></i>【满{info.freePostage.firstCurrencyName}{info.freePostage.firstThreshold}运费优惠】</p>
						</div>
						<div className="coupon-c2">
							<p className="ellipsis" style={{color:'#000'}}>
								<i>适用范围：</i>
								<a style={{cursor: 'help'}}>
								仅限{info.shopName}使用
								</a>
							</p>
							<p style={{color:'#000'}}>
								<i>有效日期：</i>
								包邮活动时间内
							</p>
							<p style={{color:'#000'}}>
								<i>其他说明：</i>
								【运费优惠】
							</p>
							<img className="coupon-select-icon" src="/images/select.png"/>
						</div>
					</div>:null}
				{couponList}
			</div>
		)
	}
}

