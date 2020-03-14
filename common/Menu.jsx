import React from 'react';
import common from './common';
import config from '../config/feConfig';

const companyName = config.companyName;
const l2Warehouse = config.l2Warehouse;

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.setState({
            ref: encodeURIComponent(location.pathname + location.search)
        })
    }

    linkToLogin = () => {
        location.href = "/user/login?ref=" + this.state.ref;
    };

    render = () => {

        // let {flag, userInfo} = this.props,
        let {nav, flag, userInfo} = this.props,
            menuList;


        //菜单
        if (nav && nav.length) {
            menuList = nav.map((menu) => {
                    let {id, childrenCategories, name, products} = menu,
                        level2List = '',
                        productList
                    // bwProducts = commonProducts.slice(0, 11 - recommendProducts.length),
                    // concatProducts = recommendProducts.concat(bwProducts),
                    // resetProducts = concatProducts || [];

                    if (childrenCategories) {
                        level2List = childrenCategories.map((i) => {
                            return (
                                <a
                                    key={i.id}
                                    target="_blank"
                                    href={'/cateList/category?mainCategory=' + id + '&categoryId=' + i.id}>
                                    {i.name}
                                </a>
                            )
                        })
                    }

                    //推荐产品处理（如果推荐产品不足10个，则用commonProducts补足）
                    productList = products.slice(0, 10).map((pro) => {
                        const {id, name, carouselImages, firstPrice, secondPrice, firstCurrencyName, secondCurrencyName, showCurrencyId, price} = pro;
                        return (
                            <div className="bm-pro-col" key={id}>
                                <a href={'/product/detail?id=' + id}>
                                    <img src={carouselImages[0]}/>
                                    <h4>{name}</h4>
                                </a>
                                <p>
                                    {/*{common.handdlePrice(firstPrice, secondPrice, firstCurrencyName, secondCurrencyName)}*/}
                                    {common.handlePrices(showCurrencyId, price)}
                                </p>

                            </div>
                        )
                    });


                    return (
                        <li key={id}>
                            <dl className="clear-float">
                                <dt>
                                    <a
                                        key={id}
                                        href={'/cateList/category?mainCategory=' + id}>
                                        {name}
                                    </a>
                                </dt>
                                <dd className="clear-float">
                                    {level2List}
                                </dd>
                            </dl>
                            <div className="bm-pro-section">
                                <h3 className="bm-pro-title">专属好物为您推荐</h3>
                                <div className="bm-pro-main clear-float">
                                    {productList}
                                </div>
                            </div>
                        </li>
                    )
                }
            )
        }

        return (
            <div className={flag === 'home' ? 'menu-section show' : 'menu-section'}>
                <div className={flag !== 'home' ? 'bgfff bm-s1' : 'bm-s1'}>
                    <ul>
                        {menuList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;