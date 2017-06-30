import React from 'react';
import {render} from 'react-dom';
//hash router主要是#  browserRouter 主要是 /
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
// 这里渲染的是App组件,外层要增加路由组件
import Home from './containers/Home/index';
import Lesson from "./containers/Lesson/index";
import Profile from "./containers/Profile/index";
import App from "./containers/App";

// 引入公有样式
import './common/css/index.less';

//引用store
import {Provider} from 'react-redux';
import store from  './redux/store';
window._store = store; //将store挂在window上 store里有方法可以获取状态 getState()
render(<Provider store={store}>
    <HashRouter>
        <App>
            <Switch>
                <Route path={'/home'} component={Home}/>
                <Route path={'/lesson'} component={Lesson}/>
                <Route path={'/profile'} component={Profile}/>
                <Redirect to="/home"/>
            </Switch>
        </App>
    </HashRouter>
</Provider>,document.getElementById('app'));