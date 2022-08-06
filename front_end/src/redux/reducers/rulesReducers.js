import { GET_ALL_RULES } from "../constant/libraryManager/rulesConstants";


const stateDefault = {
    rulesList:[],
    rulesEdit: {
        id: 0,
         NoiDung:''
      }

}
const rulesReducers = (state = stateDefault,action) => {


    switch(action.type){

        case GET_ALL_RULES: {
                state.rulesList = action.rulesList;
                
                return {...state};
        }
        case  'EDIT_RULES': {
     
            state.rulesEdit = action.rulesEditModel;
            return {...state}
    
        }


        default: return {...state}
    }
}

export default rulesReducers