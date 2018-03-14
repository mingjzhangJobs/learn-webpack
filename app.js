import React, { Component } from 'react';
import Header from './components/header';
import Mainmenu from './components/mainmenu';
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Mainmenu />
            </div>
        );
    }
}

export default App;
