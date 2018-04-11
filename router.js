//Greeter,js
import React, {Component} from 'react'
import styles from './main.css'
import Page from "./components/modules/page";
import Work from "./components/modules/work";
import Status from "./components/modules/status";
import LifeStyle from "./components/modules/lifestyle";
import Zhiyue from "./components/modules/zhiyue";
import Yingying from "./components/modules/yingying";
import Grandstream from "./components/modules/grandstream";
import { Route, IndexRoute, Router, browserHistory, hashHistory } from 'react-router';
const routes = () => {
    return (
    <Router history={ browserHistory }>
        <Route path="/" component={Page}>
            <IndexRoute component={ Status } />
            <Route path="status" component={Status}/>
            <Route path="work" component={Work}>
                <Route path="zhiyue" component={Zhiyue}/>
                <Route path="yingying" component={Yingying}/>
                <Route path="grandstream" component={Grandstream}/>
            </Route>
            <Route path="lifestyle" component={LifeStyle}/>
        </Route>
    </Router>
    )
}
export default routes
