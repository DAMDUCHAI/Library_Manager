import { call, put, takeLatest,delay } from "redux-saga/effects";
import { MoneyServices } from "../../../services/moneyServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_MONEY,GET_ALL_MONEY_SAGA,PAYMENT_SAGA,GET_ALL_MONEY_DETAILD_BY_READER,GET_ALL_MONEY_DETAILD_BY_READER_SAGA} from "../../constant/libraryManager/moneyConstants";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";

import { history } from "../../../util/history";





function *getListMoneySaga(action) { 

    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        const {data,status} = yield call( () => MoneyServices.getAllMoney(action.name));
    
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_MONEY,
                moneyList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}
export function* followGetListMoneySaga() {
    yield takeLatest(GET_ALL_MONEY_SAGA, getListMoneySaga);
}






function* getListMoneyDetaildByReaderSaga(action) { 

    try {
   
        const {data,status} = yield call( () => MoneyServices.getListMoneyDetaildByReader(action.id));
    
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_MONEY_DETAILD_BY_READER,
                moneyListDetaildByReader:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}
export function* followGetListMoneyDetaildByReaderSaga() {
    yield takeLatest(GET_ALL_MONEY_DETAILD_BY_READER_SAGA, getListMoneyDetaildByReaderSaga);
}

//payment
function *paymentSaga(action) { 
console.log('idDocGia',action.idDocGia);
    try {

        const {data,status} = yield call( () => MoneyServices.payment(action.id));
    
   
     if(status === STATUS_CODE.SUCCESS) {
        notifiFunction('success','Payment successfully !')

        }


        const getListMoneyDetaild = yield call( () => MoneyServices.getListMoneyDetaildByReader(action.idDocGia));
    
   
     if(getListMoneyDetaild.status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_MONEY_DETAILD_BY_READER,
                moneyListDetaildByReader:getListMoneyDetaild.data
            })
        }



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
        notifiFunction('error','Payment fail !') 
    }

}
export function* followPaymentSagaSaga() {
    yield takeLatest(PAYMENT_SAGA, paymentSaga);
}









