import * as Types from '../action-types';
let initState = {
    currentLesson:'all',
    sliders:[] //存放的是轮播图的数据
};
export function home(state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.lesson}
        case Types.GET_SLIDERS:
            return {...state,sliders:action.sliders}
    }
    return initState;
}

//sliders 要通过ajax请求数据，通过action请求数据，请求成功 派发到对应的reducers