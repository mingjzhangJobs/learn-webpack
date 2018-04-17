import React, { Component } from 'react';
import { overviewdata } from './company/data'

class Status extends React.Component {
    render() {
        var html = overviewdata.map(function(item,index){
            return (<div className="content-item" key={index}>
                <span className="content-item-name">{item.name}</span>
                <span className="content-item-content">{item.content}</span>
            </div>)
        })
        return (
            <div>
                <h1 style={{'margin-bottom':'100px'}}>个人简介</h1>
                {html}
            </div>
        );
    }
}


export default Status;
