const stateDefault = {

    libraryCardEdit: {
        id: 0,
        MaSinhVien: "",
        NgayCap: "",
        HSD: "",
        
      }
}

const libraryCardReducers = (state = stateDefault,action) => {


    switch(action.type){
        case  'EDIT_LIBRARY_CARD': {
            state.libraryCardEdit = action.libraryCardEditModel;
            console.log(state.libraryCardEdit);
            return {...state} 
        }

        default: return {...state}
    }
}

export default libraryCardReducers