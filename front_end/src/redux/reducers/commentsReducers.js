import { GET_ALL_COMMENT } from "../constant/libraryManager/commentConstants";


const stateDefault = {

 
    MaSach:'',
    commentList:[],
    editComment:{
        NoiDung:'',
        idComment:'',
      },
}

const commentsReducers = (state = stateDefault,action) => {


    switch(action.type){
        case  GET_ALL_COMMENT: {
            state.commentList = action.commentList;
            
            return {...state};
    }
        case  'UPDATE_COMMENT': {
               
                state.MaSach = action.MaSach;

                return {...state};
        }

case  'EDIT_COMMENT': {
               
    state.editComment = action.editComment;

    return {...state};
}
        default: return {...state}
    }
}

export default commentsReducers