import React from 'react';
import common from './common';
import config from '../config/feConfig';
import Menu from './Menu.jsx';

const cookies = require('jscookie');

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			shopArr: [],
			keywordDefault: ['爱他美', '安佳', '可瑞康', '蔓越莓', '羊奶粉', '鱼油', '蜂胶', '蜂蜜', '面膜', '防晒', '驱蚊'],
			searchResult: [],
			shop: [],
			pageFlag: props.flag || '',
			historyFlag: true,
            selectValue: this.props.currency == 'NZD' ? '1' : this.props.currency == 'AUD' ? '3' : '2',
            logo:this.props.shopInfo.logo
		}
	}

	componentDidMount() {
		const {pageFlag} = this.state;
		if (pageFlag !== 'detailPage' || pageFlag !== 'notMove') {
			$(window).scroll(() => {
				if ($(document).scrollTop() >= 450) {
					this.setState({
						moveFlag: true
					})
				} else {
					this.setState({
						moveFlag: false
					})
				}
			})
		}

		//获取发货仓
		this.getAllshop();
		this.setState({
			history: localStorage.historyItems
		})
	}

	submitFunc = (event) => {
		event.preventDefault();
		this.handleSearch();
		return false;
	};

	/**
	 * 获取全部店铺
	 */
	getAllshop = () => {
		let arr = [],
			shopNameText;

        common.sendRequest('get', {}, '/search/getAllShop', (res) => {
            // console.log(res)
			const {code, data} = res;
			if (code === 0) {
				if (data && data.length) {
					data.map((shop) => {
						shopNameText = config.warehouseName[shop.id] || shop.onlineName;
						arr.push({id: shop.id, onlineName: shopNameText})
					});
					this.setState({
						shop: arr
					})
				}
			}
		})
    };

    /**
     * 币种切换
     */
    getMoneyValue = (value) => {
        const data = value == 1 ? 'NZD' : value == 2 ? 'RMB' : 'AUD'
        cookies.set({
            name: 'currency',
            value: data
        });
        location.reload();
    }

	handleSearch = () => {
		/*let {keywordVal} = this.state,
			keyword = keywordVal ? encodeURIComponent(keywordVal) : '';*/
        const keyword = encodeURIComponent($('.searchBar').val());

		// this.setHistoryItems(keywordVal);
		window.location.href = "/search/result?keyword=" + keyword;
	};

	/**
	 * 搜索
	 */
	linkToSearchPage = (keyword) => {
		this.setHistoryItems(keyword);
		location.href = '/search/result?keyword=' + encodeURIComponent(keyword);
	};

	//搜索历史记录，新的值添加在首位
	setHistoryItems = (keyword) => {
		let {historyItems} = localStorage;
		if (historyItems === undefined) {
			localStorage.historyItems = keyword;
		} else {
			historyItems = keyword + '|' + historyItems.split('|').filter(e => e !== keyword && e !== '').join('|');
			localStorage.historyItems = historyItems;
		}
	};

	clearHistory = () => {
		localStorage.clear();
		this.setState({
			history: ''
		})
	};

	/**
	 * 获取搜索结果列表
	 */
	getSearchResult = (e) => {
		/*let value = e.target.value,
			keyword = encodeURIComponent(value);

		common.sendRequest('get', {keyword}, '/search/getSearchResult', (res) => {
			const {code, data} = res;
			if (code === 0) {
				if (data && data.length) {
					this.setState({
						searchResult: data,
						historyFlag: false
					})
				}
			}
		});

		this.setState({
			keywordVal: value
		})*/
	};

	/**
	 * 展示搜索结果框
	 */
	handdleSearchResultBox = (flag) => {
		if (flag === 'show') {
			this.setState({
				searchFlag: true
			})
		} else {
			setTimeout(() => {
				this.setState({
					searchFlag: false,
					historyFlag: true
				})
			}, 500)
		}
	};

	render = () => {
		const {
				nav,
				home,
				other,
				flag,
				userInfo,
				shopInfo,
			} = this.props,
			{
				shop,
				history,
				moveFlag,
				searchFlag,
				historyFlag,
				searchResult,
				keywordDefault,
                selectValue,
                logo
			} = this.state;

		let historyList;

		const keywordList = keywordDefault.map((v, i) => {
			return (
				<li key={i}>
					<a href={'/search/result?keyword=' + encodeURIComponent(v)} target="_blank">
						{v}
					</a>
				</li>
			)
		});

		//搜索列表
		const searchList = searchResult.map((v, i) => {
			return (
				<a key={i} onClick={this.linkToSearchPage.bind(this, v.keyword)}>{v.keyword}</a>
			)
		});

		const shopList = shop.map((i) => {
			return (
				<li key={i.id}>
					<a href={'/search/result?warehouseId=' + i.id + '&shopName=' + i.onlineName + '&keyword='}>
						{i.onlineName}
					</a>
				</li>
			)
		});

		//历史搜索
		if (history) {
			let historyArr = history.split('|');

			historyList = historyArr.slice(0, 10).map((v, i) => {
				if (v !== 'undefined') {
					return (
						<a key={i} href={'/search/result?keyword=' + encodeURIComponent(v)}>{v}</a>
					)
				}
			})
		}

		//历史记录html
		const historyHtml = <div className="history-sec">
			<h3>
				历史记录
				<span onClick={this.clearHistory} className="clear-history-btn">删除</span>
			</h3>
			<div className="history-col">
				{historyList}
			</div>
		</div>;

		return (
			<div className={home ? 'search-section' : 'search-section bc-f40'}>
				{moveFlag ?
					<div className="fixed-section add-cart-animated add-fixed-zoomIn">
						<div className="inner">
							<div className="search-bar">
								<form onSubmit={this.submitFunc}>
									<input
										type="search"
										placeholder="大家都在搜.."
										onChange={this.getSearchResult}
										onFocus={this.handdleSearchResultBox.bind(this, 'show')}
										onBlur={this.handdleSearchResultBox.bind(this, 'hide')}
                                        className="searchBar search-input"
									/>
									{/*{searchFlag ?
										<div className="search-result-box">
											{historyFlag ? historyHtml : ''}
											{searchList}
										</div> : ''
									}*/}
								</form>
								<a className="search-btn" onClick={this.handleSearch}>搜&nbsp;&nbsp;索</a>
							</div>
							{flag !== other ?
								<div className="theme-s1 bg">
									<p className="theme-s1-tit">
										全部商品分类
										<i/>
										{flag !=='home' ?
											<span className="down-arrow">
                                                <img src="/images/down-arrow.png"/>
                                            </span> : ''
										}
									</p>
									<Menu
										nav={nav}
										flag='subPage'
										userInfo={userInfo}
									/>
								</div> : ''
							}
						</div>
					</div> /* fixed nav end */ :
					<div className="inner">
						<div className="search-main">
							<div className="search-s1">
								<a href="/">
								  {logo ? <img src={logo}/> :''}
								</a>
							</div>
							<div className="search-s2">
								<div className="search-bar">
									<form onSubmit={this.submitFunc}>
										<input
											type="input"
											placeholder="大家都在搜.."
											onChange={this.getSearchResult}
											onFocus={this.handdleSearchResultBox.bind(this, 'show')}
											onBlur={this.handdleSearchResultBox.bind(this, 'hide')}
                                            className="searchBar search-input"
										/>
										{/*{searchFlag ?
											<div className="search-result-box">
												{historyFlag ? historyHtml : ''}
												{searchList}
											</div> : ''
										}*/}
									</form>
									<a className="search-btn" onClick={this.handleSearch}>搜&nbsp;&nbsp;索</a>
								</div>
								<ul className="search-shop">
									{keywordList}
								</ul>
							</div>
                            <div className={"sys"}>
                                <select className="country" value={selectValue}
                                        onChange={(e) => this.getMoneyValue(e.target.value)}>
                                    <option value="1">NZD</option>
                                    <option value="2">RMB</option>
                                    {/*<option value="3">AUD</option>*/}
                                </select>
                            </div>
                          {
                            shopInfo.qrCode ?
                              <div className="search-s3">
                                <img src={shopInfo.qrCode}/>
                                <span>扫码关注公众号</span>
                              </div>:''
                          }

						</div>
						{flag !== 'other' ?
							<div className="theme-tit">
								<div className="theme-s1 bg">
									<p className="theme-s1-tit">
										商品分类
										{flag !== 'home' ?
											<span className="down-arrow">
                                                <img src="/images/down-arrow.png"/>
                                            </span> : ''
										}
									</p>
									<Menu
										nav={nav}
										flag={flag}
										userInfo={userInfo}
									/>
								</div>
								<div className={flag === 'subProductPage' ? 'theme-s2 theme-s3' : 'theme-s2'}>
									<ul>
										{shopList}
										{/*{userInfo && userInfo.isDiamond ?
											<li>
												<a href={"/xc/bj?shopId=1" + '&page=1'}>报价</a>
											</li> : ''
										}
										<li>
                                          <a href={"/xc/xCoupon"}>充值</a>
										</li>*/}
									</ul>
								</div>
							</div> : ''
						}
					</div>
				}
				<input style={{display: 'none'}} type="submit" value="Submit"/>
			</div>
		)
	}
}

export default SearchBar;