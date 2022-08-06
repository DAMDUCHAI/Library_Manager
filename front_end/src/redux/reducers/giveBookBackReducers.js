const stateDefault = {

  inforPreview:{
    HenTra:'',
    InforGiveBook:'',
    TienFat:''
  }
}

const giveBookBackReducers = (state = stateDefault,action) => {


    switch(action.type){
        case  'GIVE_BOOK': {
            state.inforPreview = action.inforPreview;
            state.inforPreview ={...state.inforPreview}
            return {...state} 
        }

        default: return {...state}
    }
}

export default giveBookBackReducers