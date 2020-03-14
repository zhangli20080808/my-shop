import React from 'react';

export default class CustomerServer extends React.Component {
    render = () => {
        const {msgText,flag} = this.props;

        return (
            <div className={flag ? "dialog-box2 server-box-mobile" : "dialog-box server-box"}>
                <div className={"dialog-main"}>
                    <div className={"cart-coupon-detail clear-float"}>
                        <h3>{msgText}</h3>
                    </div>
                    <div className={"dialog-btn"}>
                        <a className={"confirm ts-confirm"} onClick={this.props.hideCustomerServer}>取消</a>
                        <a className={"confirm tt-confirm"} onClick={this.props.confirmDelete}>继续删除</a>
                    </div>
                </div>
            </div>
        )
    }
}
