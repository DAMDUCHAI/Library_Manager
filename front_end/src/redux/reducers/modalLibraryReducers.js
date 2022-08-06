
const initialState = {
    visibleModal:false,
    ComponentContenModal:<p>Modal default</p>,
    title:'',
    heightModal:'',
    width:1000,
    callBackSubmit: (propsValue) => { alert('click demo!') }
}


const modalLibraryReducers= (state = initialState, action) => {
  switch (action.type) {



case 'OPEN_MODAL': {
  state.visibleModal = true;
  state.ComponentContenModal = action.Component;
  state.width = action.width;
  state.title = action.title;
  return { ...state }

}
  case 'CLOSE_MODAL':{
    state.visibleModal=false;
    return { ...state}
  }

  case 'SET_SUBMIT_MODAL': {
    state.callBackSubmit = action.submitFunction;
    return {...state};
}

  default:
    return { ...state}
  }
}


export default modalLibraryReducers