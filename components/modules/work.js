import React, { Component } from 'react';

class Work extends React.Component {
    render() {
        return (
            <div>
                <div style={{ padding: 20 }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Work;
