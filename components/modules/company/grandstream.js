import React, { Component } from 'react';
import { grandstreamdata } from './data'

class Grandstream extends React.Component {
    render() {
        var html = grandstreamdata.map(function(item,index){
            return (<div className="content-item" key={index}>
                <span className="content-item-name">{item.name}</span>
                <span className="content-item-content">{item.content}</span>
            </div>)
        })
        return (
            <div>
                <h1 style={{'margin-bottom':'100px'}}>深圳潮流杭州分公司</h1>
                {html}
            </div>
        );
    }
}


export default Grandstream;
