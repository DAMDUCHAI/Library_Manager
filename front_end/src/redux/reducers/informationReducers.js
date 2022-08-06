const stateDefault = {

    informationEdit: {
        id: 0,
        Ten: "",
        NgaySinh: "",
        MaGioiTinh: "",
        CCCD: "",
        Phone: "",
        DiaChi: "",
        img: "",

        
      }
}

const informationReducers = (state = stateDefault,action) => {


    switch(action.type){
        case  'EDIT_INFORMATION': {
            state.informationEdit = action.informationEditModel;
            return {...state} 
        }

        default: return {...state}
    }
}

export default informationReducers