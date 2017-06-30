import {createStore} from 'redux';
import reducers from '../reducers';//将合并后的reducer插入到store中
export default createStore(reducers);