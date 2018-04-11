/*globals COURSES:true */
import React from 'react'
// import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

class Page extends React.Component {
    render() {
        return (
            <div>
                <GlobalNav />
                <div style={{ padding: 20, position: 'absolute', left: 200 }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

module.exports = Page
