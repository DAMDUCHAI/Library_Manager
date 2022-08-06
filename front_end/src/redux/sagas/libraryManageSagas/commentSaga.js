import { call, put, takeLatest ,delay} from "redux-saga/effects";
import { CommentServices } from "../../../services/commentServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_COMMENT,GET_ALL_COMMENT_SAGA,CREATE_COMMENT_SAGA,UPDATE_COMMENT_SAGA,DELETE_COMMENT_SAGA } from "../../constant/libraryManager/commentConstants";

import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import {  HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";
import { history } from "../../../util/history";






function *getListCommentSaga(action) { 
    try {

    
       
        const {data,status} = yield call( () => CommentServices.getAllComment(action.MaSach));

   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_COMMENT,
                commentList:data
            })
            yield put({
                type: HIDE_LOADING
            })
        }
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListCommentSaga() {
    yield takeLatest(GET_ALL_COMMENT_SAGA, getListCommentSaga);
}



//Create comment
function* createCommentSaga(action) {

    try {

        console.log(action.commentCreate);
        const  createComment = yield call(() => CommentServices.createComment(action.commentCreate));
        notifiFunction('success','Add comment successfully !')

        

        const {data,status} = yield call( () => CommentServices.getAllComment(action.commentCreate.MaSach));

   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_COMMENT,
                commentList:data
            })
            yield put({
                type: HIDE_LOADING
            })
        }


    } catch (err) {
        if(localStorage.getItem('id_user')===null){
            notifiFunction('warning','You need to login !') ;
            yield put({
                type:'CLOSE_DRAWER'
            })
            history.push('/login');

            return;   
        }
        console.log(err);
        notifiFunction('error','Create comment fail !') 
    }
   

}


export function* followCreateCommentSaga() {
    yield takeLatest(CREATE_COMMENT_SAGA, createCommentSaga);
}



// //Update Comment
function* updateCommentSaga(action) {
    
    try {
 console.log('action.idComment',action.idComment);
 console.log('action.NoiDung',action.NoiDung);
 console.log('action.MaSach',action.MaSach);
        
        const { data, status } = yield call(() => CommentServices.updateComment(action.idComment,{NoiDung:action.NoiDung}));
       
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
            notifiFunction('success','Update comment successfully !')
        }   
    
        const getAllComment = yield call( () => CommentServices.getAllComment(action.MaSach));

   
        if(getAllComment.status === STATUS_CODE.SUCCESS) {
               yield put({
                   type:GET_ALL_COMMENT,
                   commentList:getAllComment.data
               })
         
           }
   
    } catch (err) {
        console.log(err);
    }
   

}


export function* followUpdateCommentSaga() {
    yield takeLatest(UPDATE_COMMENT_SAGA, updateCommentSaga);
}





//delete comment by id
function *deleteCommentSaga(action) { 

    console.log('MaSach',action.MaSach);
    try {
        const {  status } = yield call(() => CommentServices.deleteComment(action.idComment));
     
   
     if(status === STATUS_CODE.SUCCESS) {
            notifiFunction('success','Delete comment successfully !')
        }

        const getAllComment = yield call( () => CommentServices.getAllComment(action.MaSach));

   
        if(getAllComment.status === STATUS_CODE.SUCCESS) {
               yield put({
                   type:GET_ALL_COMMENT,
                   commentList:getAllComment.data
               })
         
           }
    }catch(err) {
        
        console.log(err)
        notifiFunction('error','Delete book fail !');
    }

}

export function* followDeleteCommentSaga() {
    yield takeLatest(DELETE_COMMENT_SAGA, deleteCommentSaga);
}






