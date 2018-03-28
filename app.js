import React, { Component } from 'react';
import Header from './components/header';
import Mainmenu from './components/mainmenu';
import Shopping from './components/shopping';
import Routes from "./router";
import { Router, hashHistory } from 'react-router';
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Mainmenu />
                <Shopping />
                <Router history={ hashHistory }>
                    { Routes() }
                </Router>
            </div>
        );
    }
}

export default App;
