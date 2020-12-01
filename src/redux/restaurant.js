
import * as ActionTypes from './ActionTypes';

export const Restaurant =(state = {
    isLoading: true,
    errMess:null,
    restaurants:[]
}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_RESTAURANT:
            
            return {...state,isLoading: false, errMess: null, restaurants: action.payload};

        case ActionTypes.RESTAURANT_LOADING:

            return {...state, isLoading: true, errMess: null, restaurants: []}
        case ActionTypes.RESTAURANT_FAILED:

            return {...state, isLoading: true, errMess: action.payload, restaurants: []}


        default:
            return state;
    }
}