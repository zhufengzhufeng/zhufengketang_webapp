//首页的动作
//放一些 action-creator 函数返回action
import * as Types from '../action-types';
import {getSliders,getLessons} from '../../api/home'
export const setCurrentLesson = (lesson) => {
    return {
        type:Types.SET_CURRENT_LESSON,
        lesson
    }
};
//普通的action 都是返回的对象，reduxThunk支持异步,将dispatch的权限转交给自己
export const getSlider = () => (dispath,getState)=>{
    //dispatch 可以派发action
    //getState 可以获取redux中的状态
    getSliders().then(sliders=>{
        dispath({
            type:Types.GET_SLIDERS,
            sliders
        })
    })
};
//获取课程
export const getLesson = () => (dispatch,getState) => {
    let {currentLesson,
        lessons:{
            hasMore,
            offset,
            limit
        }
    } = getState().home;//state.home.currentLesson
    //要调用ajax请求，请求时需要 limit offset currentLesson
    if(!hasMore){
        return;
    }
    dispatch({
        type:Types.CHANGE_LOADING_STATUS,
        loading:true
    });
    getLessons(currentLesson,limit,offset).then(data=>{
       dispatch({
           type:Types.GET_LESSON,
           ...data
          /* hasMore:data.hasMore,
           lessons:data.lessons*/
       })
    });
};