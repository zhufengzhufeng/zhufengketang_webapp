import React from 'react';
import {render} from 'react-dom';
//hash router主要是#  browserRouter 主要是 /
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
//这里渲染的是App组件,外层要增加路由组件
import Home from './containers/Home/index';
import Lesson from "./containers/Lesson/index";
import Profile from "./containers/Profile/index";
import App from "./containers/App";
render(<HashRouter>
    <App>
        <Switch>
            <Route path={'/home'} component={Home}/>
            <Route path={'/lesson'} component={Lesson}/>
            <Route path={'/profile'} component={Profile}/>
        </Switch>
    </App>
</HashRouter>,document.getElementById('app'));