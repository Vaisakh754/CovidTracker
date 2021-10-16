import {
    COVID_LIST_REQUEST,
     COVID_LIST_SUCCESS,
     COVID_LIST_FAIL
} from '../constants/covidConstants'

import axios from 'axios'

export const listCovid=()=>async(dispatch)=>{
    try{
        dispatch({
            type:COVID_LIST_REQUEST
        })

        const {data}=await axios.get('')
        
        dispatch({
            type:COVID_LIST_SUCCESS,payload:data.COVID
        })
    }
    catch(error){
        dispatch({
            type:COVID_LIST_FAIL,payload:error
        })
    }
}