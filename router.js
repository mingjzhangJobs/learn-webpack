//Greeter,js
import React, {Component} from 'react'
import Page from "./components/modules/page";
import Overview from "./components/modules/overview";
import Education from "./components/modules/education";
import Project from "./components/modules/project";
import Company from "./components/modules/company/index";
import Zhiyue from "./components/modules/company/zhiyue";
import Yingying from "./components/modules/company/yingying";
import Grandstream from "./components/modules/company/grandstream";
import LifeStyle from "./components/modules/lifestyle";
import { Route, IndexRoute, Router, browserHistory, hashHistory } from 'react-router';
const routes = () => {
    return (
    <div id="maincontent">
        <Router history={ browserHistory }>
            <Route path="/" component={Page}>
                <IndexRoute component={ Overview } />
                <Route path="overview" component={Overview}/>
                <Route path="education" component={Education}/>
                <Route path="Project" component={Project} />
                <Route path="company" component={Company}>
                    <Route path="zhiyue" component={Zhiyue}/>
                    <Route path="yingying" component={Yingying}/>
                    <Route path="grandstream" component={Grandstream}/>
                </Route>
                <Route path="lifestyle" component={LifeStyle}/>
            </Route>
        </Router>
    </div>
    )
}
export default routes
