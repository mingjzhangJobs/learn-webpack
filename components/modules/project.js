import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Tabs, Card, Icon, Avatar, Modal, Button } from 'antd';
const TabPane = Tabs.TabPane;
const { Meta } = Card;
import{ psdata } from './company/data'

class Cards extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.setState({
            visible: false,
        });
    }
    callback(){

    }
    showModal(index){
        var arr = ['visible-' + index,true];
        var obj = {};
        obj[arr[0]] = arr[1];
        this.setState(obj);
    }
    hideModal(index){
        var arr = ['visible-' + index,false];
        var obj = {};
        obj[arr[0]] = arr[1];
        this.setState(obj);
    }
    render(){
        var self = this;
        var cards = psdata.map(function(item,index){
            return (<div className="project-card" key={index}>
                <div className="project-card-img-wrapper"><img onClick={self.showModal.bind(self,index)} title="点击查看大图" className="project-card-img" alt={item.name} src={item.src} /></div>
                <div>
                    <div className="project-card-content">{item.name}</div>
                </div>
                <Modal
                    className="project-card-large"
                    title={item.name}
                    visible={self.state['visible-'+index]}
                    onOk={self.hideModal.bind(self,index)}
                    onCancel={self.hideModal.bind(self,index)}
                    okText="确认"
                >
                    <img src={item.src} alt={item.name}  />
                </Modal>
            </div>)
        })
        return <div className="project-cards clearFloat">{cards}</div>;
    }
}

class Status extends React.Component {
    constructor(props){
        super(props)
    }
    callback(){

    }
    render() {

        return (
            <div style={{'font-size':'16px'}}>
                <h2>项目经历</h2>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="GWN" key="1">
                    <div className="div-p">负责GWN（路由器AP管理系统）系列项目开发维护(jquery项目)。包括h5动画开发，模版开发，编写插件。</div>
                    <div className="div-p">项目框架:luci2,使用的插件有:</div>
                    <div className="div-p text-indent">图表插件Echarts;</div>
                    <div className="div-p text-indent">画图插件raphael;</div>
                    <div className="div-p text-indent">日期插件fullCalendar和jDate;</div>
                    <div className="div-p text-indent">滚动条插件:mCustomScrollbar.</div>
                    <div className="div-p">收获:</div>
                    <div className="div-p text-indent">原生js和jquery的加深；模块化的使用和概念的加深；数据可视化的开发；弹性布局的使用。</div>
                    <div className="div-p">项目部分截图<strong>(点击查看大图)</strong>:</div>
                    <Cards />
                </TabPane>
                <TabPane tab="WP800" key="2">
                    <div className="div-p">wp800是一款电话，我参与web端开发。</div>
                    <div className="div-p">项目框架:react,使用的技术有:</div>
                    <div className="div-p text-indent">模块化工具使用webpack</div>
                    <div className="div-p text-indent">使用redux管理react项目</div>
                    <div className="div-p text-indent">使用antd构建项目组件和样式;</div>
                    <div className="div-p text-indent">使用react-router来管理项目路由</div>
                    <div className="div-p">收获:</div>
                    <div className="div-p text-indent">MVVM模式的研究，React框架的熟练使用；页面性能的优化。</div>
                </TabPane>
                <TabPane tab="YingYing" key="3">
                    <div className="div-p">盈盈理财活动页面开发，包括web端。</div>
                    <div className="div-p">开发web网站:www.kunbofund.com。</div>
                    <div className="div-p">使用的技术有:</div>
                    <div className="div-p text-indent">zepto.js和frozenUI等</div>
                    <div className="div-p">收获:</div>
                    <div className="div-p text-indent">掌握css动画开发，javascript的学习以及jquery的使用，移动端的适配等。</div>
                </TabPane>
                    <TabPane tab="..." key="4">
                        <div className="div-p">其他一些杂项</div>
                    </TabPane>
            </Tabs>
            </div>
        );
    }
}


export default Status;
