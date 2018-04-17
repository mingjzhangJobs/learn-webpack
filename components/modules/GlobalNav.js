import React from 'react'
import { Link } from 'react-router'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
    padding: '10px 20px',
    overflow: 'hidden',
    background: dark,
    color: light
}

styles.link = {
    padding: 11,
    color: light,
    fontWeight: 200
}

class GlobalNav extends React.Component {
    render() {
        return (
            <Layout style={{ width: '200px', position: 'absolute', top: 0, bottom: 0,'overflow-y': 'auto', 'overflow-x': 'hidden' }}>
                <Sider>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="status">
                            <Icon type="pie-chart" />
                            <Link to="/overview">概览</Link>{' '}
                        </Menu.Item>
                        <Menu.Item key="education">
                            <Icon type="pie-chart" />
                            <Link to="/education">教育经历</Link>{' '}
                        </Menu.Item>
                        <Menu.Item key="project">
                            <Icon type="pie-chart" />
                            <Link to="/project">项目经验</Link>{' '}
                        </Menu.Item>
                        <SubMenu
                            key="company"
                            title={<span><Icon type="company" /><span>任职公司</span></span>}
                            type="pie-chart"
                        >
                            <Menu.Item key="3"><Link to="/company/zhiyue">ZHIYUE</Link>{' '}</Menu.Item>
                            <Menu.Item key="4"><Link to="/company/yingying">YINGYING</Link>{' '}</Menu.Item>
                            <Menu.Item key="5"><Link to="/company/grandstream">GRANDSTREAM</Link>{' '}</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </Layout>
        );
    }
}
export default GlobalNav