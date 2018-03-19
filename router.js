//Greeter,js
import React, {Component} from 'react'
import styles from './main.css'
import Zhiyue from "./components/modules/zhiyue";
import Yingying from "./components/modules/yingying";
import Grandstream from "./components/modules/grandstream";
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
const routes = () => {
    return (
        <div className='mingjzhang'>
            <Route path="work">
                <IndexRoute component={ Zhiyue } />
                <Route path="yingying" component={Yingying}/>
                <Route path="grandstream" component={Grandstream}/>
            </Route>
        </div>
    )
}
export default routes
