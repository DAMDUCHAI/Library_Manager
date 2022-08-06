/* eslint-disable import/no-anonymous-default-export */
import { DISPLAY_LOADING, HIDE_LOADING } from "../constant/settingCommon/loadingConstants";

const initialState = {
    isLoading:false,
}

 const loadingReducers=(state = initialState, action) => {
    switch (action.type) {

    case DISPLAY_LOADING:
        state.isLoading = true;
        return { ...state }
    case HIDE_LOADING:{
        state.isLoading=false;
        return {...state}
    }
    default:
        return state
    }
}
export default loadingReducers