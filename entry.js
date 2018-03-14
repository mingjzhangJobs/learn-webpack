// main.js
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import createStore from './components/redux/store/store'
import './main.css';
import App from './app'
export var store = createStore()
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));


