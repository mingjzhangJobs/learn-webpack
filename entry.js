// main.js
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import createStore from './components/redux/store/store'
import './main.css';
import App from './app'
import {setGood} from './components/redux/actions/index'
export const store = createStore()
console.log(store.getState())

store.dispatch(setGood())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));


