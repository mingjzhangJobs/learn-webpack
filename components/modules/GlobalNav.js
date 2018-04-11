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


// class GlobalNav extends React.Component {
//     render() {
//         const { user } = this.props
//
//         return (
//             <div style={styles.wrapper}>
//                 <div style={{ float: 'left' }}>
//                     <Link to="/" style={styles.link}>Home</Link>{' '}
//                     <Link to="/calendar" style={styles.link} activeStyle={styles.activeLink}>Calendar</Link>{' '}
//                     <Link to="/grades" style={styles.link} activeStyle={styles.activeLink}>Grades</Link>{' '}
//                     <Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>Messages</Link>{' '}
//                 </div>
//                 <div style={{ float: 'right' }}>
//                     <Link style={styles.link} to="/profile">{user.name}</Link> <button onClick={this.logOut}>log out</button>
//                 </div>
//             </div>
//         )
//     }
// }
//
// GlobalNav.defaultProps = {
//     user: {
//         id: 1,
//         name: 'Ryan Florence'
//     }
// }


class GlobalNav extends React.Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh',width: '200px', position: 'absolute' }}>
                <Sider>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <Link to="/status">STATUS</Link>{' '}
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="3"><Link to="/work/zhiyue">ZHIYUE</Link>{' '}</Menu.Item>
                            <Menu.Item key="4"><Link to="/work/yingying">YINGYING</Link>{' '}</Menu.Item>
                            <Menu.Item key="5"><Link to="/work/grandstream">GRANDSTREAM</Link>{' '}</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </Layout>
        );
    }
}
export default GlobalNav