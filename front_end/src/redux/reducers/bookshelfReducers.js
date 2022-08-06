import { GET_ALL_BOOKSHELF } from "../constant/libraryManager/bookshelfConstants";


const stateDefault = {

    bookshelfList:[],
    bookshelfEditModel: {
        id: 0,
        Ten: "",
        
      },
      keySearch:''
 
}
const bookshelfReducers = (state = stateDefault,action) => {


    switch(action.type){

        case GET_ALL_BOOKSHELF : {
                state.bookshelfList = action.bookshelfList;
                
                return {...state};
        }
   
        case  'EDIT_BOOKSHELF': {
            state.bookshelfEditModel = action.bookshelfEditModel;
            return {...state}
    
        }

        case  'KEY_SEARCH_BOOKSHELF': {
            state.keySearch = action.keySearch;
            return {...state}
    
        }
        default: return {...state}
    }
}

export default bookshelfReducers