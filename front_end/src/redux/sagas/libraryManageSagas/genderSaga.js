import { call, put, takeLatest } from "redux-saga/effects";
import { GenderServices } from "../../../services/genderServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_GENDER,GET_ALL_GENDER_SAGA } from "../../constant/libraryManager/genderConstants";








function *getListGenderSaga(action) { 
 
    try {
     
     
        const {data,status} = yield call( () => GenderServices.getAllGender());
      
     
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_GENDER,
                genderList:data
            })
     
        }
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListGenderSaga() {
    yield takeLatest(GET_ALL_GENDER_SAGA, getListGenderSaga);
}

