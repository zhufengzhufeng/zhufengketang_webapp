import {combineReducers} from 'redux';
import {home} from './home';
//state => state.home.currentLesson
//  => state.aa.xxx
export default combineReducers({
    home
});//导出合并后的reducer