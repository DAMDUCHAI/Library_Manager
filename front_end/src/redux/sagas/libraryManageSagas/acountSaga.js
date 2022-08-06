import { call, put, takeLatest } from "redux-saga/effects";
import { AcountServices } from "../../../services/acountServices";
import { history } from "../../../util/history";
import { STATUS_CODE } from "../../../util/constants/settingSystem";

import { CHANGE_PASS_SAGA,GET_NAME_USER,GET_NAME_USER_SAGA, BAN_ACOUNT_SAGA} from "../../constant/libraryManager/acountConstants";

import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { UPDATE_LOGIN, NOTIFICATION_LOGIN } from "../../constant/libraryManager/loginConstants";


//login
function* loginAcount(action) {
    try {

        const { data, status } = yield call(() => AcountServices.loginAcount(action.loginCreate));

        if (status === STATUS_CODE.SUCCESS) {


            localStorage.setItem("token", data.token);
            localStorage.setItem("id_user", data.id);
            localStorage.setItem("role", data.Role);
            yield put({
                type: UPDATE_LOGIN,
                text: 'LOGOUT'

            })
            if (data.Role === 'USER') {
                history.push('/home');
            } else {
                history.push('/book-manager');
            }

        }



    } catch (err) {
        yield put({
            type: NOTIFICATION_LOGIN,
            notificationLogin: 'email or pass không hợp lệ hoặc acount đã bị khoá'

        })
        console.log(err);
    }


}


export function* followloginAcount() {
    yield takeLatest('LOGIN_ACOUNT_SAGA', loginAcount);
}


function* changePass(action) {

    try {
        const id = localStorage.getItem('id_user')
        console.log('action.dataPass', action.dataPass);
        const dataChangePass = {
            PassWord: action.dataPass.MatKhau,
            NewPass: action.dataPass.MatKhauMoi,
            ConfirmPass: action.dataPass.XacNhanMatKhau

        }
        const { data, status } = yield call(() => AcountServices.changePass(id, dataChangePass));
        console.log('dataPass', data);

        if (data === 'Not Change PassWord') {
            notifiFunction('error', 'Change PassWorld  fail !');
            return


        }
        if (data === 'Not Match') {
            notifiFunction('error', 'Not Match !');
            return


        }
        else {
            notifiFunction('success', 'Update passworld success!');

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
        notifiFunction('error', 'Change PassWorld  fail !');        }
      

        


    }



export function* followChangePass() {
    yield takeLatest(CHANGE_PASS_SAGA, changePass);
}



function* getNameUser(action) {

    try {
         const  id=localStorage.getItem('id_user');
        const { data, status } = yield call(() => AcountServices.getNameUser(id));

        if(status === STATUS_CODE.SUCCESS) {

            yield put({
                type:GET_NAME_USER,
                nameUser:data[0].Ten
            })
        }




    } catch (err) {

   
        console.log(err);
         }

    }



export function* followGetNameUser() {
    yield takeLatest(GET_NAME_USER_SAGA, getNameUser);
}




//banAcount
function* banAcount(action) {

    try {
        const { data, status } = yield call(() => AcountServices.banAcount(action.id));

        if(status === STATUS_CODE.SUCCESS) {
         
            if(data.isStatus==='BAN'){
                notifiFunction('success', 'Lock Acount success!');
            }
        else{
            notifiFunction('success', 'Unlock Acount success!');

        }
        }




    } catch (err) {

   
        console.log(err);
         }

    }



export function* followBanAcount() {
    yield takeLatest(BAN_ACOUNT_SAGA, banAcount);
}