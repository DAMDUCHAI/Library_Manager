/* eslint-disable import/no-anonymous-default-export */
import { UPDATE_LOGIN,NOTIFICATION_LOGIN ,SHOW_PASS} from "../constant/libraryManager/loginConstants";

const initialState = {
    login:'LOGIN',
    notificationLogin:'',
    showPass:'password'
}

 const loginReducers=(state = initialState, action) => {
    switch (action.type) {

    case UPDATE_LOGIN:{
        state.login = action.text;
        return { ...state }
    }
       
    
    case NOTIFICATION_LOGIN:{
        state.notificationLogin = action.notificationLogin;
        return { ...state }
    }
    case SHOW_PASS:{
        if(state.showPass==='password'){
            state.showPass = 'text';
        }else{
            state.showPass = 'password';
        }
     
        return { ...state }
    }
       
  

    default:
        return state
    }
}
export default loginReducers