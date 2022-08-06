import { GET_ALL_GENDER } from "../constant/libraryManager/genderConstants";


const stateDefault = {
    genderList:[],
 
}

const genderReducers = (state = stateDefault,action) => {


    switch(action.type){
    

        case  GET_ALL_GENDER: {
                state.genderList = action.genderList;
                
                return {...state};
        }

 

        default: return {...state}
    }
}

export default genderReducers