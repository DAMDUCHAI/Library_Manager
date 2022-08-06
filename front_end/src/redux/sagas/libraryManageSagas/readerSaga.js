import { call, put, takeLatest,delay } from "redux-saga/effects";
import { ReaderServices } from "../../../services/readerServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_READER,GET_ALL_READER_SAGA,CREATE_READER_SAGA,UPDATE_READER_SAGA,UPDATE_READER_INFOR_SAGA ,GET_READER_SAGA,UPDATE_INFOR_READER,UPDATE_MA_THONG_TIN_CHUNG} from "../../constant/libraryManager/readerConstants";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";
import { InformationCommonServices } from "../../../services/informationCommonServices";
import { LibraryCardServices } from "../../../services/libraryCardServices";
import { AcountServices } from "../../../services/acountServices";
import { history } from "../../../util/history";




function *getListReaderSaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        yield put({
            type: 'KEY_SEARCH_READER',
            keySearch:action.name
        })
        const {data,status} = yield call( () => ReaderServices.getAllReader(action.name));
     
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_READER,
                readerList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListReaderSaga() {
    yield takeLatest(GET_ALL_READER_SAGA, getListReaderSaga);
}



//Create Reader
function* createReaderSaga(action) {

    try {
   console.log('values',action.values);

        const information = yield call(() => InformationCommonServices.createInformationCommon(action.values));
    
        const acount = yield call(() => AcountServices.createAcount({Email:action.createEmail.Email}));
        const libraryCard = yield call(() => LibraryCardServices.createLibraryCard({MaSinhVien:action.createTheThuVien.MaSinhVien,NgayCap:action.createTheThuVien.NgayCap,HSD:action.createTheThuVien.HSD}));


const readerCreate={
    MaThongTinChung:information.data.id,
    MaAcount:acount.data.id,
    MaThe:libraryCard.data.id
};

        const { data, status } = yield call(() => ReaderServices.createReader(readerCreate));

     
        const re = yield call( () => ReaderServices.getAllReader(action.name));
        yield put({
            type:GET_ALL_READER,
            readerList:re.data
        })
        notifiFunction('success','Add reader successfully !')

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
        notifiFunction('error','Add reader fail !') 
    }
   

}


export function* followCreateReaderSaga() {
    yield takeLatest(CREATE_READER_SAGA, createReaderSaga);
}



//Update Reader
function* updateReaderSaga(action) {

    try {
     
        const updateThongTin = yield call(() => InformationCommonServices.updateInformationCommon(action.MaThongTinChung,action.readerUpdate))
        const updateTheThuVien = yield call(() => LibraryCardServices.updateLibraryCard(action.MaThe,action.updateThuVien))
        const updateAcount = yield call(() => AcountServices.updateAcount(action.MaAcount,action.updateAcount));


        const re = yield call( () => ReaderServices.getAllReader(action.name));
        yield put({
            type:GET_ALL_READER,
            readerList:re.data
        })
        notifiFunction('success','Update reader successfully !')
   
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
        notifiFunction('error','Update reader fail !')
    }
   

}


export function* followUpdateReaderSaga() {
    yield takeLatest(UPDATE_READER_SAGA, updateReaderSaga);
}





function* getReaderSaga(action) {
     


        try {
            yield put({
                type: DISPLAY_LOADING
            })
            yield delay (500);
            const id=localStorage.getItem('id_user');
            
            const {data,status} = yield call( () => ReaderServices.getReader(id));
           
       
         if(status === STATUS_CODE.SUCCESS) {
                yield put({
                    type:UPDATE_INFOR_READER,
                    inforReader:data
                })
                yield put({
                    type:'IMG_PREVIEW',
                    imgPreview:data.img
                  })


                yield put({
                    type:UPDATE_MA_THONG_TIN_CHUNG,
                    MaThongTinChung:data.id
                })
                yield put({
                    type: HIDE_LOADING
                })
            }
        }catch(err) {
            console.log(err)
        }

}


export function* followGetReaderSaga() {
    yield takeLatest(GET_READER_SAGA, getReaderSaga);
}





function* updateInforReaderSaga(action) {
     
    try {
  
        const {data,status} = yield call( () => InformationCommonServices.updateInformationCommon(action.MaThongTinChung,action.readerUpdate));

   
        if (status === STATUS_CODE.SUCCESS) {
            notifiFunction('success','Update infor reader successfully !')
        }
            yield put({
                type:'CLOSE_DRAWER'
            })
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
        notifiFunction('error','Update infor reader fail !') 
    }
   





}


export function* followUpdateInforReaderSaga() {
yield takeLatest(UPDATE_READER_INFOR_SAGA, updateInforReaderSaga);
}









