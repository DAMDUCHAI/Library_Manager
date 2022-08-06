import { call, put, takeLatest,delay } from "redux-saga/effects";
import { StaffServices } from "../../../services/staffServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_STAFF,GET_ALL_STAFF_SAGA,CREATE_STAFF_SAGA,UPDATE_STAFF_SAGA,UPDATE_STAFF_INFOR_SAGA ,GET_STAFF_SAGA,UPDATE_INFOR_STAFF,UPDATE_MA_THONG_TIN_CHUNG_STAFF} from "../../constant/libraryManager/staffConstants";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";
import { InformationCommonServices } from "../../../services/informationCommonServices";
import { AcountServices } from "../../../services/acountServices";
import { history } from "../../../util/history";




function *getListStaffSaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })

        yield delay (500);
        yield put({
            type: 'KEY_SEARCH_STAFF',
            keySearch:action.name
        })
        const {data,status} = yield call( () => StaffServices.getAllStaff(action.name));
     
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_STAFF,
                staffList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListStaffSaga() {
    yield takeLatest(GET_ALL_STAFF_SAGA, getListStaffSaga);
}



//Create Staff
function* createStaffSaga(action) {

    try {
        const information = yield call(() => InformationCommonServices.createInformationCommon(action.values));

        const acount = yield call(() => AcountServices.createAcountAdmin({Email:action.Email}));

const staffCreate={
    MaThongTinChung:information.data.id,
    MaAcount:acount.data.id,
    NgayHD:action.NgayHD

};

        const { data, status } = yield call(() => StaffServices.createStaff(staffCreate));

     
        const st = yield call( () => StaffServices.getAllStaff(action.name));
        yield put({
            type:GET_ALL_STAFF,
            staffList:st.data
        })
        notifiFunction('success','Add staff successfully !')

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
        notifiFunction('error','Add staff fail !') 
    }
   

}


export function* followCreateStaffSaga() {
    yield takeLatest(CREATE_STAFF_SAGA, createStaffSaga);
}



//Update Staff
function* updateStaffSaga(action) {
   
    try {

     
        const updateThongTin = yield call(() => InformationCommonServices.updateInformationCommon(action.MaThongTinChung,action.staffUpdate))
        const updateAcount = yield call(() => AcountServices.updateAcount(action.MaAcount,action.updateAcount));


     

            const st = yield call( () => StaffServices.getAllStaff(action.name));
            yield put({
                type:GET_ALL_STAFF,
                staffList:st.data
            })
            notifiFunction('success','Update staff successfully !')
    
   
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
        notifiFunction('error','Update staff fail !')
    }
   

}


export function* followUpdateStaffSaga() {
    yield takeLatest(UPDATE_STAFF_SAGA, updateStaffSaga);
}





function* getStaffSaga(action) {
     


        try {
            yield put({
                type: DISPLAY_LOADING
            })
            yield delay (500);
            const id=localStorage.getItem('id_user');
            
            const {data,status} = yield call( () => StaffServices.getStaff(id));
           
       
         if(status === STATUS_CODE.SUCCESS) {
                yield put({
                    type:UPDATE_INFOR_STAFF,
                    inforStaff:data
                })
                yield put({
                    type:'IMG_PREVIEW',
                    imgPreview:data.img
                  })
                yield put({
                    type:UPDATE_MA_THONG_TIN_CHUNG_STAFF,
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


export function* followGetStaffSaga() {
    yield takeLatest(GET_STAFF_SAGA, getStaffSaga);
}





function* updateInforStaffSaga(action) {
     
    try {
  
        const {data,status} = yield call( () => InformationCommonServices.updateInformationCommon(action.MaThongTinChung,action.staffUpdate));

   
        if (status === STATUS_CODE.SUCCESS) {
            notifiFunction('success','Update infor staff successfully !')
  
        
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
        notifiFunction('error','Update infor staff fail !') 
    }
   





}


export function* followUpdateInforStaffSaga() {
yield takeLatest(UPDATE_STAFF_INFOR_SAGA, updateInforStaffSaga);
}









