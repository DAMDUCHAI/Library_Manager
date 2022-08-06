import { GET_ALL_CATEGORY } from "../constant/libraryManager/categoryConstants";


const stateDefault = {
    categoryList:[],
    categoryEdit: {
        id: 0,
        Ten: "",
        
      },
      keySearch:''
}

const categoryReducers = (state = stateDefault,action) => {


    switch(action.type){

        case  GET_ALL_CATEGORY: {
                state.categoryList = action.categoryList;
                
                return {...state};
        }

        case  'EDIT_CATEGORY': {
            state.categoryEdit = action.categoryEditModel;
            return {...state}
    
        }
        case  'KEY_SEARCH_CATEGORY': {
            state.keySearch = action.keySearch;
            return {...state}
    
        }

        default: return {...state}
    }
}

export default categoryReducers