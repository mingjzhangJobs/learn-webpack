import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';

const columns = [{
    title: '学校名称',
    dataIndex: 'name',
    key: 'name',
    render: text => <div>{text}</div>,
}, {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
}, {
    title: '专业',
    dataIndex: 'zhuanye',
    key: 'zhuanye',
}, {
    title: '学历',
    key: 'xueli',
    dataIndex: 'xueli',
}];

const data = [{
    key: '2',
    name: '浙江工业大学',
    time: '2012.9-2016.6',
    zhuanye: '网络工程',
    xueli: '本科'
}];
class Status extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{'margin-bottom': 20}}>教育经历</h1>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}


export default Status;
