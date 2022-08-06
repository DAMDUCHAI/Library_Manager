/* eslint-disable default-case */


const stateDefault = {
    numberOfUnpaidBooks:'',   //số lườn quyển sách chưa được trả
    totalNumberOfBooks:'' ,   //tổng số sách có trong thư viện
    countNumberOfLostBooks:'',  // số sách làm mất
    countNumberReader:'',        // số độc giả
    countBookLate :''    , // sô sách trả muộn
    countBookEarly:''
 

}

const dashboardReducers = (state = stateDefault,action) => {


    switch(action.type)
    {
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
    }
}

export default dashboardReducers