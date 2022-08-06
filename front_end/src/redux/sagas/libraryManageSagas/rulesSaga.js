import { call, put, takeLatest ,delay} from "redux-saga/effects";
import { RulesServices } from "../../../services/rulesServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_RULES,GET_ALL_RULES_SAGA,CREATE_RULES_SAGA,UPDATE_RULES_SAGA,DELETE_RULES_SAGA } from "../../constant/libraryManager/rulesConstants";

import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";

import { history } from "../../../util/history";





function *getListRulesSaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        const {data,status} = yield call( () => RulesServices.getAllRules());
     
   
     
            yield put({
                type:GET_ALL_RULES,
                rulesList:data
            })
            yield put({
                type: HIDE_LOADING
            })
        
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListRulesSaga() {
    yield takeLatest(GET_ALL_RULES_SAGA, getListRulesSaga);
}



//Create rules
function* createRulesSaga(action) {

    try {

        const { data, status } = yield call(() => RulesServices.createRules(action.rulesCreate));

   
            notifiFunction('success','Add rules successfully !')



    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListRulesSaga);
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
        notifiFunction('error','Create rule fail !') 
    }
   

}


export function* followCreateRulesSaga() {
    yield takeLatest(CREATE_RULES_SAGA, createRulesSaga);
}



//Update Rules
function* updateRulesSaga(action) {
    try {

        const { data, status } = yield call(() => RulesServices.updateRules(action.idRules,action.rulesUpdate));
    

        if (status === STATUS_CODE.SUCCESS) {
            notifiFunction('success','Update rules successfully !')
        }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListRulesSaga);
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
        notifiFunction('error','Update rules fail !') 
    }
   

}


export function* followUpdateRulesSaga() {
    yield takeLatest(UPDATE_RULES_SAGA, updateRulesSaga);
}





//delete rules
function *deleteRulesSaga(action) { 
    try {
        const { data, status } = yield call(() => RulesServices.deleteRules(action.id));
     
   
     if(status === STATUS_CODE.SUCCESS) {
            notifiFunction('success','Delete rules successfully !')
        }

    yield call(getListRulesSaga);
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
        notifiFunction('error','Delete rule fail !');
    }

}

export function* followDeleteRulesSaga() {
    yield takeLatest(DELETE_RULES_SAGA, deleteRulesSaga);
}






