import React, { Component } from 'react';
import { yingyingdata } from './data'

class Yingying extends React.Component {
    render() {
        var html = yingyingdata.map(function(item,index){
            return (<div className="content-item" key={index}>
                <span className="content-item-name">{item.name}</span>
                <span className="content-item-content">{item.content}</span>
            </div>)
        })
        return (
            <div>
                <h1 style={{'margin-bottom':'100px'}}>杭州龙盈有限公司</h1>
                {html}
            </div>
        );
    }
}


export default Yingying;
