

const stateDefault = {
    phoneList:[],
    emailList:[],

    cccdList:[],

    masinhvienList:[],

   
}

const validateReducers = (state = stateDefault,action) => {


    switch(action.type){

        case  'GET_LIST_PHONE': {
                state.phoneList = action.phoneList;
                
                return {...state};
        }
        case  'GET_LIST_CCCD': {
            state.cccdList = action.cccdList;
            
            return {...state};
    }
    case  'GET_LIST_MASINHVIEN': {
        state.masinhvienList = action.masinhvienList;
        
        return {...state};
}
case  'GET_LIST_EMAIL': {
    state.emailList = action.emailList;
    
    return {...state};
}

        default: return {...state}
    }
}

export default validateReducers