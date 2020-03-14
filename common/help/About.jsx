import React from 'react';

export default class About extends React.Component {
  render = () => {
    const {companyInfo} = this.props;

    return (
      <div className="about-section">
        <h2 className="help-s2-title">关于{companyInfo.name}</h2>
        <div className="help-inner">
          {companyInfo.introduce}
        </div>
      </div>
    )
  }
}