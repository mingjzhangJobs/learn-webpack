/*globals COURSES:true */
import React from 'react'
// import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

class Page extends React.Component {
    render() {
        return (
            <div>
                <GlobalNav />
                <div style={{ padding: '20px 20px 0 20px', position: 'absolute', left: 200, right: 0, top: 0, bottom: 0, 'overflow-y': 'auto' }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

module.exports = Page
