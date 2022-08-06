import { GET_ALL_MONEY,GET_ALL_MONEY_DETAILD_BY_READER} from "../constant/libraryManager/moneyConstants";


const stateDefault = {
    moneyList:[],
    moneyListDetaildByReader:[]

}
const moneyReducers = (state = stateDefault,action) => {


    switch(action.type){

        case GET_ALL_MONEY: {
                state.moneyList = action.moneyList;
          
                
                return {...state};
        }
        case GET_ALL_MONEY_DETAILD_BY_READER: {
            state.moneyListDetaildByReader = action.moneyListDetaildByReader;
      
            
            return {...state};
    }


        default: return {...state}
    }
}

export default moneyReducers