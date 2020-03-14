import React from 'react';
import Product from './Product.jsx';


class Category extends React.Component {
    render = () => {
        const {userInfo, getCartCount,categorylist} = this.props;
        let subCategoryList;

        const categoryList = categorylist.map((i) => {

            let keywordArr = [],
                keywordList;

            //热搜关键词
            if (i.keyword) {
                keywordArr = i.keyword.split('，');
                keywordList = keywordArr.map((v, i) => {
                    return (
                        <li key={i}>
                            <a href={'/search/result?keyword=' + v}>{v}</a>
                        </li>
                    )
                })
            }

            //二级品类
            if (i.childrenCategories) {
                subCategoryList = i.childrenCategories.map((subCategory) => {
                    return (
                        <li key={subCategory.id}>
                            <a target="_blank"
                               href={'/cateList/category?mainCategory=' + i.id + '&categoryId=' + subCategory.id}>
                                {subCategory.name}
                            </a>
                        </li>
                    )
                })
            } else {
                subCategoryList = '';
            }
            return (
                <div key={i.id} className="category-col">
                    <header className="hd-title clear-float">
                        <h3>{i.name}</h3>
                        {/*<div className="hd-nav">
                            <ul className="clear-float">
                                <li>热门搜索：</li>
                                {keywordList}
                            </ul>
                        </div>*/}
                        <a className="hd-more" href={'/cateList/category?mainCategory=' + i.id}>查看全部 &gt;</a>
                    </header>

                    <div className="category-main">
                        <div className="category-s1">
                            {/*<ul>
                                {subCategoryList}
                            </ul>*/}
                            <h4>
                                {i.name}
                                <span>{i.remark}</span>
                            </h4>
                            <div className="category-pic"/>
                        </div>
                        <div className="category-s2">
                            <Product
                                productList={i.products}
                                categoryFlag
                                categoryId={i.id}
                                userInfo={userInfo}
                                getCartCount={getCartCount}
                            />
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className="clear-float">
                {categoryList}
            </div>
        )
    }
}

export default Category;