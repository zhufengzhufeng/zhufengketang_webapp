import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers';//将合并后的reducer插入到store中

//引入中间件 redux-thunk 可以在action中自由派发动作
import ReduxThunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
let history = createHistory();
let middleWare = [ReduxThunk,routerMiddleware(history)];
//applyMiddleware
export default createStore(reducers,applyMiddleware(...middleWare));