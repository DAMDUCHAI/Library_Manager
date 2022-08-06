import { GET_ALL_AUTHOR } from "../constant/libraryManager/authorConstants";


const stateDefault = {

    authorList:[],
    authorEdit: {
        id: 0,
        Ten: "",
        Phone: "",
        Email: "",
        DiaChi: "",
        TieuSu: "",
      },
      keySearch:''
}
const authorReducers = (state = stateDefault,action) => {


    switch(action.type){

        case GET_ALL_AUTHOR: {
                state.authorList = action.authorList;
                
                return {...state};
        }
        case  'EDIT_AUTHOR': {
            console.log(action.authorEditModel);
            state.authorEdit = action.authorEditModel;
            return {...state}
    
        }
        case  'KEY_SEARCH_AUTHOR': {
            state.keySearch = action.keySearch;
            return {...state}
    
        }

        default: return {...state}
    }
}

export default authorReducers