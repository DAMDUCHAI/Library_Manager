import { call, put, takeLatest,delay } from "redux-saga/effects";
import { BorrowServices } from "../../../services/borrowServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_BOOK_BY_READER_SAGA,GET_ALL_BOOK_BY_READER,GET_ALL_BOOK_BY_ACOUNT } from "../../constant/libraryManager/borrowConstants";







function *getBookByReaderSaga(action) { 

    try {


        const {data,status} = yield call( () => BorrowServices.getAllBorrowByReader(action.MaThe));
        


            yield put({
                type:GET_ALL_BOOK_BY_READER,
                ListBookByReader:data,
                readerBorrow:data[0].Ten
            })
        

    }catch(err) {
        console.log(err)
    }

}

export function* followGetBookByReaderSaga() {
    yield takeLatest(GET_ALL_BOOK_BY_READER_SAGA, getBookByReaderSaga);
}




function *getBorrowBookByIdAcountSaga(action) { 

    try {
        const idAcount=localStorage.getItem('id_user');
     
        const {data,status} = yield call( () => BorrowServices.getAllBorrowByIdAcount(idAcount));
        
        console.log('fsdagashgretyeaehrf',data);
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_BOOK_BY_ACOUNT,
                ListBorrowByAcount:data,
        
            })
        }

    }catch(err) {
        console.log(err)
    }

}

export function* followGetBorrowBookByIdAcountSaga() {
    yield takeLatest('GET_BORROW_BY_ID_ACOUNT_SAGA', getBorrowBookByIdAcountSaga);
}




function *getcountBorrowBookByMonthSaga(action) { 

    try {
       
     
        const {data} = yield call( () => BorrowServices.countBorrowBookByMonth());
        

            yield put({
                type:'GET_COUNT_BORROW_BY_MONTH',
                ListCountBookByMonth:data,
        
            })
        

    }catch(err) {
        console.log(err)
    }

}

export function* followGetcountBorrowBookByMonthSaga() {
    yield takeLatest('GET_COUNT_BORROW_BY_MONTH_SAGA', getcountBorrowBookByMonthSaga);
}
