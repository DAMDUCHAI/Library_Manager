import { GET_NAME_USER} from "../constant/libraryManager/acountConstants";


const stateDefault = {

    acountEdit: {
        id: 0,
        Email: "",
        PassWord: "",
        Role: "",
        
      },
      nameUser:'you',
      isStatus:null
}

const acountReducers = (state = stateDefault,action) => {


    switch(action.type){
        case  'EDIT_ACOUNT': {
            state.acountEdit = action.acountEditModel;
            return {...state} 
        }

        case  GET_NAME_USER: {
            state.nameUser = action.nameUser;
            return {...state} 
        }
 
        default: return {...state}
    }
}

export default acountReducers