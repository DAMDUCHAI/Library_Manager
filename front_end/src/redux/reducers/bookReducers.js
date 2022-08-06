import { GET_ALL_BOOK,GET_ALL_BOOK_CARD_BY_READER, GET_ALL_BOOK_BY_FIEUSACH } from "../constant/libraryManager/bookConstant";


const stateDefault = {

    bookList:[],
    bookEdit: {
        id: 0,
        Ten: "",
        MaTacGia: 0,
        MaTheLoai: 0,
        MaNXB:0,
        AnhSach: "",
        NamXB: "",
        Gia: "",
        SoLgDauSach: 0,
        SoLgHienTai: 0,
        NoiDung: "",
      }
      ,
      bookDetaild: {
        AnhSach: "",
Gia: 0,
KeSach: "",
NXB: "",
NamXB: "",
NoiDung: "",
SoLgDauSach: 0,
SoLgHienTai: 0,
TacGia: "",
Ten: "",
TheLoai: "",
id: 5,
      },
      bookCardByReaderList:[],
      bookByFieuSachList:[],

      MaFieuSach:''    ,   //dùng đe lưu lại id mã phiếu sách để dùng cho trả sách
      MaFieuSachForViewDetaildCard:'',
      keySearch:''
      
}
const bookReducers = (state = stateDefault,action) => {


    switch(action.type){

        case GET_ALL_BOOK: {
                state.bookList = action.bookList;
                
                return {...state};
        }

        case  'EDIT_BOOK': {
  
            state.bookEdit = action.bookEditModel;
            return {...state}
    
        }
        case  'DETAILD_BOOK': {
  
            state.bookDetaild = action.bookDetaild;
          
            return {...state}
    
        }
        case GET_ALL_BOOK_CARD_BY_READER: {
            state.bookCardByReaderList = action.bookCardByReaderList;
            
            return {...state};
    }

    case  GET_ALL_BOOK_BY_FIEUSACH: {
        state.bookByFieuSachList = action.bookByFieuSachList;
        
        return {...state};
}
case 'SET_MA_FIEU_SACH': {
    state.MaFieuSach = action.MaFieuSach;
    
    return {...state};
}
case 'SET_MA_FIEU_SACH_FOR_VIEW_DETAILD_CARD': {
    state.MaFieuSachForViewDetaildCard = action.MaFieuSachForViewDetaildCard;
    
    return {...state};
}
case  'KEY_SEARCH_BOOK': {
    state.keySearch = action.keySearch;
    return {...state}

}

   
        default: return {...state}
    }
}

export default bookReducers