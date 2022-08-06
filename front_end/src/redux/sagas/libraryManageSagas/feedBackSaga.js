import { call, put, takeLatest ,delay} from "redux-saga/effects";
import { FeedbackServices } from "../../../services/feedBackServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import {CREATE_FEEDBACK_SAGA ,GET_ALL_FEEDBACK_SAGA,GET_ALL_FEEDBACK,UPDATE_TRANGTHAI_FEEDBACK_SAGA,VIEW_FEEDBACK} from "../../constant/libraryManager/feedBackConstants";

import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";
import { history } from "../../../util/history";


//Create feedback
function* createFeedBackSaga(action) {

    try {

       
        const { data, status } = yield call(() => FeedbackServices.createFeddBack(action.feedBackCreate));


    

        notifiFunction('success','Send successfully !')
        

    
    
   
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
        notifiFunction('error','Create feedback fail !') 
    }
   

}


export function* followCreateFeedbackSaga() {
    yield takeLatest(CREATE_FEEDBACK_SAGA, createFeedBackSaga);
}







function *getListFeedback(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING      //hiển thị ra cái xoay xoay
        })
        yield delay (500);
        yield put({
            type: 'TYPE_FILTER_FEEDBACK',
            typeFilter:action.typeFilter
        })

        const {data,status} = yield call( () => FeedbackServices.getAllFeddBack(action.typeFilter));
     
   

            yield put({
                type:GET_ALL_FEEDBACK,
                feedbackList:data
            })
            yield put({
                type: HIDE_LOADING
            })
        
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListFeedbackSaga() {
    yield takeLatest(GET_ALL_FEEDBACK_SAGA, getListFeedback);
}



function* updateTrangThaiSaga(action) {
    
    try {        
        const { data, status } = yield call(() => FeedbackServices.updateFeddBack(action.id));
          
        console.log('data',data)
   
        yield put({
            type:VIEW_FEEDBACK,
            feedback:{TieuDe:data.TieuDe,NoiDung:data.NoiDung},
        })
        const getAllFeddBack = yield call( () => FeedbackServices.getAllFeddBack(action.typeFilter));
        yield put({
            type:GET_ALL_FEEDBACK,
            feedbackList:getAllFeddBack.data
        })
    } catch (err) {

        console.log(err);
      
    }
   

}


export function* followUpdateTrangThaiSaga() {
    yield takeLatest(UPDATE_TRANGTHAI_FEEDBACK_SAGA, updateTrangThaiSaga);
}


