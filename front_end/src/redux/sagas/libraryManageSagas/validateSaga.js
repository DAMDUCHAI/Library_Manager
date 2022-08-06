import { call, put, takeLatest } from "redux-saga/effects";
import { ValidateServices } from "../../../services/validateServices";









function *getListPhoneSaga(action) { 
 
    try {
     
     
        const {data} = yield call( () => ValidateServices.getListPhone());
      
     
   
    
            yield put({
                type:'GET_LIST_PHONE',
                phoneList:data
            })
     
        
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListPhoneSaga() {
    yield takeLatest('GET_LIST_PHONE_SAGA', getListPhoneSaga);
}


function *getListCCCDSaga(action) { 
 
    try {
     
     
        const {data} = yield call( () => ValidateServices.getLisCCCD());
      
     
   
    
            yield put({
                type:'GET_LIST_CCCD',
                cccdList:data
            })
     
        
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListCCCDSaga() {
    yield takeLatest('GET_LIST_CCCD_SAGA', getListCCCDSaga);
}



function *getListEmailSaga(action) { 
 
    try {
     
     
        const {data} = yield call( () => ValidateServices.getListEmail());
      
     
   
    
            yield put({
                type:'GET_LIST_EMAIL',
                emailList:data
            })
     
        
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListEmailSaga() {
    yield takeLatest('GET_LIST_EMAIL_SAGA', getListEmailSaga);
}


function *getListMaSinhVienSaga(action) { 
 
    try {
     
     
        const {data} = yield call( () => ValidateServices.getListMaSinhVien());
      
     
   
    
            yield put({
                type:'GET_LIST_MASINHVIEN',
                masinhvienList:data
            })
     
        
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListMaSinhVienSaga() {
    yield takeLatest('GET_LIST_MASINHVIEN_SAGA', getListMaSinhVienSaga);
}

