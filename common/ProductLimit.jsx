import React from 'react';
import Alert from './Alert.jsx';
import common from './common';
import config from '../config/feConfig';

const companyName = config.companyName;
const l2Warehouse = config.l2Warehouse;
let qtyXhr = null;

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: '',
			msgFlag: false,
			productList: props.productList || []
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({productList: nextProps.productList});
	}

	componentDidMount() {
		this.setState({
			ref: encodeURIComponent(location.pathname + location.search)
		})
	}

	addProductToCart = (params) => {
		if (!this.props.userInfo) {
			location.href = '/user/login?ref=' + this.state.ref;
			return;
		}
		if (qtyXhr) {
			qtyXhr.abort();
			console.log('abort');
		}
		const _this = this,
			data = {
				shopId: params.shopId,
				productId: params.id,
				quantity: 1,
				giftSale: params.giftSale
			},
			suc = (res) => {
				if (res.code === 0) {
					this.setState({
						addCartId: params.id,
						addCartMsg: '添加购物车成功'
					}, () => {
						this.props.getCartCount();
						setTimeout(function () {
							_this.setState({
								addCartId: ''
							})
						}, 2000);
					});
					this.props.getCartCount();
				}
			},
			err = (res) => {
				this.setState({
					addCartId: params.id,
					addCartMsg: res
				}, () => {
					setTimeout(function () {
						_this.setState({
							addCartId: ''
						})
					}, 2000);
				})
			};

		qtyXhr = common.sendRequest('post', data, '/product/handdleJoinCart', suc, err);
	};

	addFavorite = (id, e) => {
		e.preventDefault();
		const {productList} = this.state;
		if (qtyXhr) qtyXhr.abort();

		qtyXhr = common.sendRequest('post', {id}, '/favorite/addFavorite', (res) => {
			if (res.code === 0) {
				const {productId, id} = res.data;
				productList.map((pro) => {
					if (pro.id == productId) pro.favoriteId = id
				});
				this.setState({
					productList: productList
				})
			}
		});
	};

	cancelFavorite = (params, e) => {
		e.preventDefault();
		const {productList} = this.state;
		if (qtyXhr) qtyXhr.abort();

		qtyXhr = common.sendRequest('post', {id: params.favoriteId}, '/favorite/cancleFavorite', (res) => {
			if (res.code === 0) {
				productList.map((pro) => {
					if (pro.id === params.proId) pro.favoriteId = ''
				});
				this.setState({
					productList: productList
				})
			}
		});
	};


	render = () => {

		const {userInfo} = this.props,
			{msgFlag, msg, ref, addCartId, addCartMsg, productList} = this.state;

		let markList = '';

		const products = productList.map((i) => {
			const {
				id,
				tags,
				type,
				name,
				stock,
				shopId,
				weight,
				imgUrl,
				status,
				giftSale,
				limitedQty,
				favoriteId,
				firstPrice,
				freePostage,
				secondPrice,
				firstCurrencyName,
				secondCurrencyName,
				zeroShippingFeeQty,
				firstOriginalPrice,
				secondOriginalPrice,
				endTime,
			} = i;

			let addCartStyle = addCartId === id ? 'add-cart-tip add-cart-animated add-cart-zoomIn' : 'add-cart-tip',
				shortcutBtn;

			//标签处理
			if (tags && tags.length) {
				markList = tags.map((mark, i) => {
					if (mark === '特价') {
						return (
							<span className="spe-sales">{mark}</span>
						)
					} else{
						return (
							<span key={i}>{mark}</span>
						)
					}
				})
			}

			//限时活动倒计时
			let showTimer = common.handdleTimer(endTime);
			if (endTime && this.refs['timer' + id] && showTimer) {
				setInterval(() => {
					if (common.handdleTimer(endTime)) {
						this.refs['timer' + id].innerText = '距离结束还剩' + common.handdleTimer(endTime) || '';
					} else {
						this.refs['timer' + id].innerHTML = '<span class="limit-p8">已结束</span>';
					}
				}, 1000)
			}

			//快捷加入购物车按钮
			if (stock !== '售罄' && status !== 2) {
				shortcutBtn = <a
					className="add-cart"
					onClick={this.addProductToCart.bind(this, {shopId, id, giftSale})}>
					立即抢购
				</a>;
			}

			if (type === 3) {
				shortcutBtn = <a className="add-cart" href={"/product/detail?id=" + id}>立即抢购</a>
			}

			return (
				<div className="limit-col clear-float" key={id}>
					<div className="limit-pic">
						<a
							className="limit-pic-box"
							target="_blank"
							href={"/product/detail?id=" + id}
							style={{backgroundImage: 'url(' + imgUrl + ')'}}>
							<p className={addCartStyle}>{addCartMsg}</p>
						</a>
						<p className="limit-p3">
							{limitedQty ? <span className="spe-mark">限购{limitedQty}件</span> : ''}
							{giftSale === 1 ? <span className="spe-mark">换购</span> : ''}
							{markList}
							{zeroShippingFeeQty ? <span>{zeroShippingFeeQty}件包邮</span> : ''}
							{
								freePostage ? (
									<span className="by-mark">
                  满{common.handdlePrice(freePostage.firstThreshold, freePostage.secondThreshold, firstCurrencyName, secondCurrencyName)}包邮
                </span>
								) : ''
							}
						</p>
						<p className="shipping-flag">
							{/*canShipFaster ? <img src="/images/shipping-style.png"/> : ''*/}
							{giftSale === 1? <img src="/images/gift.png"/> : ''}
						</p>
						<p className="warehouse-p">
							{config.warehouseName[shopId]}
						</p>
						{weight ? <p className="weight-p">{weight}g</p> : ''}
						{stock === '售罄' ? <p className="sq-col"/> : ''}
						{endTime ?
							<p className="limit-p7" ref={'timer' + id}/> : ''
						}
						{userInfo ?
							favoriteId ?
								<p className="sc-box" onClick={this.cancelFavorite.bind(this, {proId: id, favoriteId: favoriteId})}>
									<img src="/images/heart2.png"/>
								</p> :
								status !== 2 ?
									<p className="sc-box" onClick={this.addFavorite.bind(this, id)}>
										<img src="/images/heart1.png"/>
									</p> : ''
							:
							<a className="sc-box" href={"/user/login?ref=" + ref}>
								<img src="/images/heart1.png"/>
							</a>
						}
					</div>
					<div className="limit-main">
						<p className="limit-p1">
							<a target="_blank" href={"/product/detail?id=" + id}>
								{name}
							</a>
						</p>
						{userInfo || !userInfo && companyName === l2Warehouse ?
							<p className="product-price">
								{firstPrice < firstOriginalPrice ?
									<i>
										{common.handdlePrice(firstOriginalPrice, secondOriginalPrice, firstCurrencyName, secondCurrencyName)}
									</i> : ''
								}
								<span>
                  {common.handdlePrice(firstPrice, secondPrice, firstCurrencyName, secondCurrencyName)}
                </span>
							</p> :
							<p className="limit-p4">
                <span>
                  <a href={"/user/login?ref=" + ref}>登录后可见</a>
                </span>
							</p>
						}
						<p className="limit-p6">
							{shortcutBtn}
						</p>
					</div>
				</div>
			)
		});

		return (
			<div className="limit-list clear-float">
				{products}
				{msgFlag ? <Alert msg={msg}/> : ''}
			</div>
		)
	}
}

export default Product;
