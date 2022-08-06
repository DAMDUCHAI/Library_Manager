import { GET_ALL_BOOK_BY_READER } from "../constant/libraryManager/borrowConstants";
import { UPDATE_CODE_CARD,UPDATE_BOOK_CARD } from "../constant/libraryManager/bookConstant";
import {GET_ALL_BOOK_BY_ACOUNT } from "../constant/libraryManager/borrowConstants";
const stateDefault = {
  ListBookByReader: [],
  ListBorrowByAcount:[],
  readerBorrow: "",
  SoLgMuonMax: "",
  countBook: "",
  MaFieuSach: "",
  ListCountBookByMonth:[
   

  ], numberOfUnpaidBooks:'',   //số lườn quyển sách chưa được trả
  totalNumberOfBooks:'' ,   //tổng số sách có trong thư viện
  countNumberOfLostBooks:'',  // số sách làm mất
  countNumberReader:'',        // số độc giả
  countBookLate :''   , // sô sách trả muộn
  countBookEarly:''
};
const borrowBookReducers = (state = stateDefault, action) => {
  switch (action.type) {


    // eslint-disable-next-line no-duplicate-case
    case GET_ALL_BOOK_BY_READER: {
      state.ListBookByReader = action.ListBookByReader;
      state.readerBorrow = action.readerBorrow;

      return { ...state };
    }
    case GET_ALL_BOOK_BY_ACOUNT: {
      state.ListBorrowByAcount = action.ListBorrowByAcount;
      state.ListBorrowByAcount=[...state.ListBorrowByAcount]

      return { ...state };
    }
    case UPDATE_CODE_CARD: {
      state.MaFieuSach = action.MaFieuSach;
      state.SoLgMuonMax = action.SoLgMuonMax;

      return { ...state };
    }

    case UPDATE_BOOK_CARD: {
      state.countBook = action.countBook;
    

      return { ...state };
    }

    case 'GET_COUNT_BORROW_BY_MONTH': {
      state.ListCountBookByMonth = action.ListCountBookByMonth;

      return { ...state };
    }


    
      case  'NUMBER_OF_UNPAID_BOOKS': {
          state.numberOfUnpaidBooks = action.numberOfUnpaidBooks;
          
          return {...state};
  }
  case  'TOTAL_NUMBER_OF_BOOKS': {
      state.totalNumberOfBooks = action.totalNumberOfBooks;
      
      return {...state};
}
case  'COUNT_NUMBER_OF_LOST_BOOKS': {
  state.countNumberOfLostBooks = action.countNumberOfLostBooks;
  
  return {...state};
}
case  'COUNT_NUMBER_READER': {
  state.countNumberReader = action.countNumberReader;
  
  return {...state};
}
case  'COUNT_BOOK_LATE': {
  state.countBookLate = action.countBookLate;
  
  return {...state};
}
case  'COUNT_BOOK_EARLY': {
  state.countBookEarly = action.countBookEarly;
  
  return {...state};
}
    default:
      return { ...state };
  }
};

export default borrowBookReducers;
