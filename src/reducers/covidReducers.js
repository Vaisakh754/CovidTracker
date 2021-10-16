import {
    COVID_LIST_REQUEST,
    COVID_LIST_SUCCESS,
    COVID_LIST_FAIL,
    } from '../constants/covidConstants'
    
    export const covidListReducer=(state={covid:[]},action)=>{
        switch(action.type){
            case COVID_LIST_REQUEST:
                return {loading:true, covid:[]}
            case COVID_LIST_SUCCESS:
                return {loading:false, covid:action.payload}
            case COVID_LIST_FAIL:
                return {loading:false,error:action.payload}
            default:
                return state
        }
    }