import { GET_ALL_PUBLISHER } from "../constant/libraryManager/publisherConstants";


const stateDefault = {
    publisherList:[],
    publisherEdit: {
        id: 0,
        Ten: "",
        Phone: "",
        Email: "",
        DiaChi: "",
        NguoiDaiDien: "",
      },
      keySearch:''

}
const publisherReducers = (state = stateDefault,action) => {


    switch(action.type){

        case GET_ALL_PUBLISHER: {
                state.publisherList = action.publisherList;
                
                return {...state};
        }
        case  'EDIT_PUBLISHER': {
     
            state.publisherEdit = action.publisherEditModel;
            return {...state}
    
        }
        case  'KEY_SEARCH_PUBLISHER': {
            state.keySearch = action.keySearch;
            return {...state}
    
        }


        default: return {...state}
    }
}

export default publisherReducers