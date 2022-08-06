import { call, put, takeLatest,delay } from "redux-saga/effects";
import { AuthorServices } from "../../../services/authorServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_AUTHOR,GET_ALL_AUTHOR_SAGA ,CREATE_AUTHOR_SAGA,UPDATE_AUTHOR_SAGA,DELETE_AUTHOR_SAGA} from "../../constant/libraryManager/authorConstants";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";
import { history } from "../../../util/history";






function *getListAuthorSaga(action) { 

    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        yield put({
            type: 'KEY_SEARCH_AUTHOR',
            keySearch:action.name
        })
        const {data,status} = yield call( () => AuthorServices.getAllAuthor(action.name));
    
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_AUTHOR,
                authorList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}
export function* followGetListAuthorSaga() {
    yield takeLatest(GET_ALL_AUTHOR_SAGA, getListAuthorSaga);
}





//Create author
function* createAuthorSaga(action) {
     console.log(action.authorCreate);
    try {

        const { data, status } = yield call(() => AuthorServices.createAuthor(action.authorCreate));

        const au = yield call( () => AuthorServices.getAllAuthor(action.name));
        yield put({
            type:GET_ALL_AUTHOR,
            authorList:au.data
        })
        notifiFunction('success','Add author successfully !')
    
   
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
        notifiFunction('error','Create author fail !')    
    }
   

}


export function* followCreateAuthorSaga() {
    yield takeLatest(CREATE_AUTHOR_SAGA, createAuthorSaga);
}



//Update Category
function* updateAuthorSaga(action) {
    console.log('update saga',action.authorUpdate);
    try {

        console.log('action.name',action.name);
        const { data, status } = yield call(() => AuthorServices.updateAuthor(action.idAuthor,action.authorUpdate));

  
        const au = yield call( () => AuthorServices.getAllAuthor(action.name));
        yield put({
            type:GET_ALL_AUTHOR,
            authorList:au.data
        })
        notifiFunction('success','Update author successfully !')

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
        notifiFunction('error','Update author fail !')    
    }
   

}


export function* followUpdateAuthorSaga() {
    yield takeLatest(UPDATE_AUTHOR_SAGA, updateAuthorSaga);
}


//delete category by id
function *deleteAuthorSaga(action) { 
    try {
        const { data, status } = yield call(() => AuthorServices.deleteAuthor(action.id));
  
        const au = yield call( () => AuthorServices.getAllAuthor(action.name));
        yield put({
            type:GET_ALL_AUTHOR,
            authorList:au.data
        })
        notifiFunction('success','Delete author successfully !')
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
        notifiFunction('error','Delete author fail !');
    }

}

export function* followDeleteAuthorSaga() {
    yield takeLatest(DELETE_AUTHOR_SAGA, deleteAuthorSaga);
}


