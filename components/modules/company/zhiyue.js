import React, { Component } from 'react';
import { zhiyuedata } from './data'

class Zhiyue extends React.Component {
    render() {
        var html = zhiyuedata.map(function(item,index){
            return (<div className="content-item" key={index}>
                <span className="content-item-name">{item.name}</span>
                <span className="content-item-content">{item.content}</span>
            </div>)
        })
        return (
            <div>
                <h1 style={{'margin-bottom':'100px'}}>杭州职悦有限公司</h1>
                {html}
            </div>
        );
    }
}


export default Zhiyue;
