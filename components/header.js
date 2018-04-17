import React, { Component } from 'react';
class Header extends React.Component {
    render() {
        return (
            <div id="header" style={{'fontSize': 26,'lineHeight':'60px','textAlign':'right','paddingRight': 60,'background':'#108ee9','color':'white'}}>
                张明剑个人介绍
            </div>
        );
    }
}

export default Header;
