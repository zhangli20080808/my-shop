import React from 'react';

export default class CustomerServer extends React.Component {
    render = () => {
        const {flag} = this.props;

        return (
            <div className={flag ? "dialog-box2 server-box-mobile" : "dialog-box server-box"} onClick={this.props.joinBrand}>
                <div className={"dialog-main2"}>
                    <a href="/xc/xBrand">
                        <img className="brand_img" src="/images/brandActivity/brandJo.jpg" alt=""/>
                    </a>
                    <div className="close" onClick={this.props.joinBrand}>
                        x
                    </div>
                </div>
            </div>
        )
    }
}
