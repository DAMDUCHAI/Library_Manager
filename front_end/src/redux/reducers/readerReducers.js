import { GET_ALL_READER, UPDATE_INFOR_READER,UPDATE_MA_THONG_TIN_CHUNG} from "../constant/libraryManager/readerConstants";

import { UPDATE_CODE_BOOK } from "../constant/libraryManager/bookConstant";

import { UPDATE_BOOK_CARD ,UPDATE_CODE_CARD} from "../constant/libraryManager/bookConstant";
const stateDefault = {
    readerList:[],
    readerEdit: {
        id: 0,
        Ten: "",
        
      },
      MaSach:'',
      MaFieuSach:'',
      SoLgMuonMax:'',
      countBook:0,
      inforReader:{
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

const readerReducers = (state = stateDefault,action) => {


    switch(action.type){

        case  GET_ALL_READER: {
                state.readerList = action.readerList;
                
                return {...state};
        }

        case  'EDIT_READER': {
            state.readerEdit = action.readerEditModel;
            return {...state}
    
        }
        
        case UPDATE_CODE_BOOK : {
            state.MaSach = action.MaSach;
            return {...state};
    }
    case UPDATE_CODE_CARD : {
        state.MaFieuSach = action.MaFieuSach;
        state.SoLgMuonMax = action.SoLgMuonMax;
        
        return {...state};
}
    case UPDATE_BOOK_CARD : {
      
        state.countBook=  action.countBook;
     
        return {...state};
}    
case UPDATE_MA_THONG_TIN_CHUNG : {
      
    state.MaThongTinChung=  action.MaThongTinChung;
 
    return {...state};
}
case UPDATE_INFOR_READER : {
      
    state.inforReader=  action.inforReader;
 
    return {...state};
}
case  'KEY_SEARCH_READER': {
    state.keySearch = action.keySearch;
    return {...state}

}
      
        default: return {...state}
    }
}

export default readerReducers