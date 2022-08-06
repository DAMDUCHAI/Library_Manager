import { call, put, takeLatest,delay } from "redux-saga/effects";
import { PublisherServices } from "../../../services/publisherServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_PUBLISHER,GET_ALL_PUBLISHER_SAGA,CREATE_PUBLISHER_SAGA,UPDATE_PUBLISHER_SAGA ,DELETE_PUBLISHER_SAGA} from "../../constant/libraryManager/publisherConstants";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";

import { history } from "../../../util/history";





function *getListPublisherSaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        yield put({
            type: 'KEY_SEARCH_PUBLISHER',
            keySearch:action.name
        })
        const {data} = yield call( () => PublisherServices.getAllPublisher(action.name));
     
   
 
            yield put({
                type:GET_ALL_PUBLISHER,
                publisherList:data
            })
        
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListPublisherSaga() {
    yield takeLatest(GET_ALL_PUBLISHER_SAGA, getListPublisherSaga);
}



//Create category
function* createPublisherSaga(action) {

    try {

        const { data, status } = yield call(() => PublisherServices.createPublisher(action.publisherCreate));

        const pu = yield call( () => PublisherServices.getAllPublisher(action.name));
        yield put({
            type:GET_ALL_PUBLISHER,
            publisherList:pu.data
        })
        notifiFunction('success','Add publisher successfully !')
   
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
        notifiFunction('error','Create publisher fail !') 
    }
   

}


export function* followCreatePublisherSaga() {
    yield takeLatest(CREATE_PUBLISHER_SAGA, createPublisherSaga);
}



//Update Publisher
function* updatePublisherSaga(action) {
    try {

        
        const { data, status } = yield call(() => PublisherServices.updatePublisher(action.idPublisher,action.publisherUpdate));

  
        const pu = yield call( () => PublisherServices.getAllPublisher(action.name));
        yield put({
            type:GET_ALL_PUBLISHER,
            publisherList:pu.data
        })
        notifiFunction('success','Update publisher successfully !')   
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
        notifiFunction('error','Update publisher fail !') 
    }
   

}


export function* followUpdatePublisherSaga() {
    yield takeLatest(UPDATE_PUBLISHER_SAGA, updatePublisherSaga);
}


//delete Publisher
function *deletePublisherSaga(action) { 
    try {
        const { data, status } = yield call(() => PublisherServices.deletePublisher(action.id));
     

        const pu = yield call( () => PublisherServices.getAllPublisher(action.name));
        yield put({
            type:GET_ALL_PUBLISHER,
            publisherList:pu.data
        })
        notifiFunction('success','Delete publisher successfully !')
    
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
        notifiFunction('error','Delete publisher fail !');
    }

}

export function* followDeletePublisherSaga() {
    yield takeLatest(DELETE_PUBLISHER_SAGA, deletePublisherSaga);
}
