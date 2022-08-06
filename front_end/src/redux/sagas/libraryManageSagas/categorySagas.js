import { call, put, takeLatest ,delay} from "redux-saga/effects";
import { CategoryServices } from "../../../services/categoryServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_CATEGORY,GET_ALL_CATEGORY_SAGA,CREATE_CATEGORY_SAGA,UPDATE_CATEGORY_SAGA,DELETE_CATEGORY_SAGA } from "../../constant/libraryManager/categoryConstants";

import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";

import { history } from "../../../util/history";





function *getListCategorySaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING  //hien thi cái loading
        })
        yield delay (500);  //set thời gian hiển thị loading
        yield put({
            type: 'KEY_SEARCH_CATEGORY', //lưu giá trị search vào keySearch trong reducer category
            keySearch:action.name      // giá trị trong thanh search
        })
        const {data,status} = yield call( () => CategoryServices.getAllCategory(action.name));
     //goi getAllCategoryServices trong CategoryServices để lấy ra data của category
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_CATEGORY,  //lưu cái categoryList trong categoryReducers
                categoryList:data
            })
            yield put({
                type: HIDE_LOADING
            })
        }
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListCategorySaga() {
    yield takeLatest(GET_ALL_CATEGORY_SAGA, getListCategorySaga);
}



//Create category
function* createCategorySaga(action) {

    try {

        const {  status } = yield call(() => CategoryServices.createCategory(action.categoryCreate));
  
                const ca = yield call( () => CategoryServices.getAllCategory(action.name));
            yield put({
                type:GET_ALL_CATEGORY,
                categoryList:ca.data
            })
            notifiFunction('success','Add category successfully !')
            

        
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
       
       
     
   
   
            }catch (err) {
        if(localStorage.getItem('id_user')===null){
            notifiFunction('warning','You need to login !') ;
            yield put({
                type:'CLOSE_DRAWER'
            })
            history.push('/login');

            return;   
        }
        console.log(err);
        notifiFunction('error','Create category fail !') 
    }
   

}


export function* followCreateCategorySaga() {
    yield takeLatest(CREATE_CATEGORY_SAGA, createCategorySaga);
}



//Update Category
function* updateCategorySaga(action) {
    console.log('update saga',action.name);
    try {

        
        const { data, status } = yield call(() => CategoryServices.updateCategory(action.idCategory,action.categoryUpdate));

   
    
        const ca = yield call( () => CategoryServices.getAllCategory(action.name));
        yield put({
            type:GET_ALL_CATEGORY,
            categoryList:ca.data
        })
        notifiFunction('success','Update category successfully !')

   
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
        notifiFunction('error','Update category fail !') 
    }
   

}


export function* followUpdateCategorySaga() {
    yield takeLatest(UPDATE_CATEGORY_SAGA, updateCategorySaga);
}





//delete category by id
function *deleteCategorySaga(action) { 
    try {
        const {  status } = yield call(() => CategoryServices.deleteCategory(action.id));
     
   
        const ca = yield call( () => CategoryServices.getAllCategory(action.name));
        yield put({
            type:GET_ALL_CATEGORY,
            categoryList:ca.data
        })
            notifiFunction('success','Delete category successfully !')
        
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
        notifiFunction('error','Delete book fail !');
    }

}

export function* followDeleteCategorySaga() {
    yield takeLatest(DELETE_CATEGORY_SAGA, deleteCategorySaga);
}






