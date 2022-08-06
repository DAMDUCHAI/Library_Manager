import { call, put, takeLatest,delay } from "redux-saga/effects";
import { BookshelfServices } from "../../../services/bookshelfServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_BOOKSHELF,GET_ALL_BOOKSHELF_SAGA,DELETE_BOOKSHELF_SAGA ,CREATE_BOOKSHELF_SAGA,UPDATE_BOOKSHELF_SAGA} from "../../constant/libraryManager/bookshelfConstants";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";

import { history } from "../../../util/history";

import { notifiFunction } from "../../../util/Notification/notificationLibrary"





function *getListBookshelfSaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        yield put({
            type: 'KEY_SEARCH_BOOKSHELF',
            keySearch:action.name
        })
        const {data,status} = yield call( () => BookshelfServices.getAllBookshelf(action.name));
     
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_BOOKSHELF,
                bookshelfList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListBookshelfSaga() {
    yield takeLatest(GET_ALL_BOOKSHELF_SAGA, getListBookshelfSaga);
}



//Create bookshelf
function* createBookshelfSaga(action) {

    try {
console.log('action.name',action.name);
        
        const { data, status } = yield call(() => BookshelfServices.createBookshelf(action.bookshelfCreate));

        const bs = yield call( () => BookshelfServices.getAllBookshelf(action.name));
        yield put({
            type:GET_ALL_BOOKSHELF,
            bookshelfList:bs.data
        })
            notifiFunction('success','Add bookshelf successfully !')

        
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
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
        notifiFunction('error','Create bookshelf fail !') 
    }
   

}


export function* followCreateBookshelfSaga() {
    yield takeLatest(CREATE_BOOKSHELF_SAGA, createBookshelfSaga);
}



//Update Bookshelf
function* updateBookshelfSaga(action) {
    console.log('update saga',action.idBookshelf);
    try {

        
        const { data, status } = yield call(() => BookshelfServices.updateBookshelf(action.idBookshelf,action.bookshelfUpdate));
        const bs = yield call( () => BookshelfServices.getAllBookshelf(action.name));
        yield put({
            type:GET_ALL_BOOKSHELF,
            bookshelfList:bs.data
        })
        notifiFunction('success','Update bookshelf successfully !')
      
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
  
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
        notifiFunction('error','Update bookshelf fail !') 
    }
   

}


export function* followUpdateBookshelfSaga() {
    yield takeLatest(UPDATE_BOOKSHELF_SAGA, updateBookshelfSaga);
}





//delete bookshelf by id
function *deleteBookshelfSaga(action) { 
    try {
        const { data, status } = yield call(() => BookshelfServices.deleteBookshelf(action.id));
     
        const bs = yield call( () => BookshelfServices.getAllBookshelf(action.name));
        yield put({
            type:GET_ALL_BOOKSHELF,
            bookshelfList:bs.data
        })
        notifiFunction('success','Delete bookshelf successfully !')
     

    }catch(err) {
        
        if(localStorage.getItem('id_user')===null){
            notifiFunction('warning','You need to login !') ;
            yield put({
                type:'CLOSE_DRAWER'
            })
            history.push('/login');

            return;   
        }
        console.log(err);
        notifiFunction('error','Delete book fail !');
    }

}

export function* followDeleteBookshelfSaga() {
    yield takeLatest(DELETE_BOOKSHELF_SAGA, deleteBookshelfSaga);
}






