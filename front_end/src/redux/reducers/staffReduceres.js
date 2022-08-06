import { GET_ALL_STAFF, UPDATE_INFOR_STAFF,UPDATE_MA_THONG_TIN_CHUNG_STAFF} from "../constant/libraryManager/staffConstants";


const stateDefault = {
    staffList:[],
    staffEdit: {
        id: 0,
        Ten: "",
        
      },
      MaSach:'',
      MaFieuSach:'',
      SoLgMuonMax:'',
      countBook:0,
      inforStaff:{
        "id": 0,
        "Ten": "",
        "NgaySinh": "0",
        "MaGioiTinh": 0,
        "CCCD": "",
        "Phone": "",
        "DiaChi": "",
        "img": "",
       
    },
    MaThongTinChung:'',
    keySearch:''
}

const staffReducers = (state = stateDefault,action) => {


    switch(action.type){

        case  GET_ALL_STAFF: {
                state.staffList = action.staffList;
                
                return {...state};
        }

        case  'EDIT_STAFF': {
            state.staffEdit = action.staffEditModel;
            return {...state}
    
        }

case UPDATE_INFOR_STAFF : {
      
    state.inforStaff=  action.inforStaff;
 
    return {...state};
}
case UPDATE_MA_THONG_TIN_CHUNG_STAFF : {
      
    state.MaThongTinChung=  action.MaThongTinChung;
 
    return {...state};
}
case  'KEY_SEARCH_STAFF': {
    state.keySearch = action.keySearch;
    return {...state}

}
        default: return {...state}
    }
}

export default staffReducers