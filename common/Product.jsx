import React from 'react';
import Alert from './Alert.jsx';
import common from './common';
import config from '../config/feConfig';
import LazyLoad from 'react-lazyload';

const _ = require('lodash');
const companyName = config.companyName;
const l2Warehouse = config.l2Warehouse;
let qtyXhr = null;

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            // msgFlag: false,
            loadingFlag: false,
            productList: props.productList || [],
            flag: props.flag
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

    showMsg = (msg) => {
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

    /**
     * @method 添加产品到购物车
     * @return
     */
    addProductToCart = (params) => {
        if (!this.props.userInfo) {
            location.href = '/user/login?ref=' + this.state.ref;
            return;
        }
        if (qtyXhr) {
            qtyXhr.abort();
            console.log('abort');
        }
        const {id} = params;

        qtyXhr = common.sendRequest('post', {
            productId: id,
            qty: 1
        }, '/product/handdleJoinCart', (res) => {
            if (res.code === 0) {
                if (res.data == '') {
                    this.showMsg('添加成功');
                    this.props.getCartCount();
                    location.reload();
                } else {
                    this.showMsg(res.data)
                }

            } else {
                this.showMsg(res.data);
            }
        }, (res) => {
            this.showMsg(res);
            // location.reload();
        });
    };

    /**
     * @method 收藏
     * @return
     */
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

    /**
     * @method 取消收藏
     * @return
     */
    cancelFavorite = (params, e) => {
        e.preventDefault();
        let {productList, flag} = this.state;
        if (qtyXhr) qtyXhr.abort();

        qtyXhr = common.sendRequest('post', {id: params.favoriteId}, '/favorite/cancleFavorite', (res) => {
            if (res.code === 0) {
                if (flag === 'favorite') {
                    productList.map((pro) => {
                        if (pro.id === params.proId) _.remove(productList, pro);
                    })
                } else {
                    productList.map((pro) => {
                        if (pro.id === params.proId) pro.favoriteId = ''
                    })
                }
                this.setState({
                    productList: productList
                })
            }
        });
    };


    render = () => {

        const {
                userInfo,
                categoryId,
                subCategoryId,
                categoryFlag
            } = this.props,
            {msgFlag, msg, ref, addCartId, addCartMsg, productList} = this.state;

        let href = '', products;

        if (productList && productList.length) {
            products = productList.map((i) => {
                const {
                    id,
                    name,
                    type,
                    tags,
                    stock,
                    weight,
                    price,
                    shopId,
                    limitedQty,
                    status,
                    giftSale,
                    favoriteId,
                    carouselImages,
                    firstPrice,
                    secondPrice,
                    zeroShippingFeeQty,
                    firstCurrencyName,
                    secondCurrencyName,
                    firstOriginalPrice,
                    secondOriginalPrice,
                    showCurrencyId,
                    warehouseId
                } = i;
                let backgroundUrl = carouselImages ? carouselImages[0] : '';

                let addCartStyle = addCartId === id ? 'add-cart-tip add-cart-animated add-cart-zoomIn' : 'add-cart-tip',
                    markList = '',
                    shortcutBtn;

                //标签处理
                if (tags && tags.length) {
                    markList = tags.map((mark, i) => {
                        if (mark.name === '特价') {
                            return (
                                <span className="spe-sales">{mark.name}</span>
                            )
                        } else {
                            return (
                                <span key={i}>{mark.name}</span>
                            )
                        }
                    })
                } else {
                    markList = '';
                }

                let markHtml = (
                    <p className="mark">
                        {/*canShipFaster ? <span className="spe-mark">快</span> : ''*/}
                        {/*{limitedQty ? <span className="spe-mark">限购{limitedQty}件</span> : ''}*/}
                        {/*{giftSale === 1 ? <span className="spe-mark">换购</span> : ''}*/}
                        {markList}
                        {/*{zeroShippingFeeQty ? <span>{zeroShippingFeeQty}件包邮</span> : ''}*/}
                        {/*{
                            freePostage ? (
                                <span className="by-mark">
                  满{common.handdlePrice(freePostage.firstThreshold, freePostage.secondThreshold, firstCurrencyName, secondCurrencyName)}包邮
                </span>
                            ) : ''
                        }*/}
                    </p>
                );

                //快捷加入购物车按钮
                if (stock !== '缺货' && status !== 2) {
                    shortcutBtn = (
                        <a
                            className="add-cart"
                            onClick={this.addProductToCart.bind(this, {id})}>
                        </a>
                    )
                } else {
                    shortcutBtn = '';
                }

                /*if (type === 3) {
                    shortcutBtn = <a className="add-cart" href={"/product/detail?id=" + id}/>
                }*/

                return (
                    <LazyLoad height={315} once offset={315} key={id}>
                        <div className="product-col-box">
                            <div className="product-col">
                                <a target="_blank" href={"/product/detail?id=" + id}>
                                    {categoryFlag ? markHtml : ''}
                                    {/*{markHtml}*/}
                                    <div className="product-bg" style={{backgroundImage: 'url(' + backgroundUrl + ')'}}>
                                        {!categoryFlag ? markHtml : ''}
                                        {/*{markHtml}*/}
                                        <p className={addCartStyle}>{addCartMsg}</p>
                                        {/*{subPage ? <p className="warehouse">{config.warehouseName[shopId]}</p> : ''}*/}
                                        <p className="warehouse-p">{config.warehouseName[warehouseId]}</p>
                                        {weight ? <p className="weight-p">{weight}g</p> : ''}
                                        <p className="sc-box"
                                           onClick={this.cancelFavorite.bind(this, {
                                               proId: id,
                                               favoriteId: favoriteId
                                           })}>
                                            <img src="/images/heart1.png"/>
                                        </p>
                                        {/*{userInfo ?
                                            favoriteId ?
                                                <p className="sc-box"
                                                   onClick={this.cancelFavorite.bind(this, {
                                                       proId: id,
                                                       favoriteId: favoriteId
                                                   })}>
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
                                        {stock === '售罄' && flag !== 'favorite' ? <p className="sq-col"/> : ''}*/}
                                        {stock === '缺货' ? <p className="sq-col"/> : ''}
                                    </div>
                                </a>
                                <div className="product-info">
                                    <h4 className={firstPrice < firstOriginalPrice ? 'is-spe-price' : ''}>
                                        <a target="_blank" href={"/product/detail?id=" + id}>
                                            {name}
                                        </a>
                                    </h4>
                                    <p className={firstOriginalPrice ? 'product-price' : 'product-price product-price-spe'}>
                                        {/*{firstPrice < firstOriginalPrice ?
                                                <i className="spe-price">
                                                    {common.handdlePrice(firstOriginalPrice, secondOriginalPrice, firstCurrencyName, secondCurrencyName)}
                                                </i> : ''
                                            }*/}
                                        <span>
                                                {/*{common.handdlePrice(firstPrice, secondPrice, firstCurrencyName, secondCurrencyName,)}*/}
                                            {common.handlePrices(showCurrencyId, price)}
                                            </span>
                                    </p>
                                    {
                                        /*flag === 'favorite' ?
                                            <div className="sc-btn">
                                                <a onClick={this.cancelFavorite.bind(this, {
                                                    proId: id,
                                                    favoriteId: favoriteId
                                                })}>
                                                    取消收藏
                                                </a>
                                                {
                                                    status !== 2 ?
                                                        stock === '售罄' ?
                                                            <a>售罄</a>
                                                            :
                                                            <a onClick={this.addProductToCart.bind(this, {
                                                                shopId,
                                                                id,
                                                                giftSale
                                                            })}>
                                                                加入购物车
                                                            </a>
                                                        :
                                                        <a>已下架</a>
                                                }
                                            </div>:*/
                                        shortcutBtn
                                    }
                                </div>
                            </div>
                        </div>
                    </LazyLoad>
                )
            })
        }

        /*if (activityId) {
            href = '/activity?activityId=' + activityId + '&rule=' + rule;
        } else if (categoryId) {
            href = '/product/list?categoryId=' + categoryId;
        } else {
            href = '';
        }*/

        return (
            <div className="product-list clear-float">
                {products}
                {msgFlag ? <Alert msg={msg}/> : ''}
            </div>
        )
    }
}

export default Product;
