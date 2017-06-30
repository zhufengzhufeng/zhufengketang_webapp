import * as Types from '../action-types';
let initState = {
    currentLesson:'all'
};
export function home(state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,...{currentLesson:action.lesson}}
    }
    return initState;
}