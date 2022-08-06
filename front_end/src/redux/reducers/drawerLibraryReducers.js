import React from 'react'
const initialState = {
    visible: false,
    title:'',
    ComponentContentDrawer: <p>default drawer</p>,
    widthDrawer:'',
    callBackSubmit: (propsValue) => { alert('click demo!') },
    childrenDrawer:false,
    ComponentContentChildDrawer: <p>child drawer</p>,
}

const drawerLibraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WIDTH':
           
            return { ...state, widthDrawer: action.widthDrawer }
       
        case 'CLOSE_DRAWER':
            return { ...state, visible: false }
        case 'CHILDRENT_DRAWER': {
            state.childrenDrawer = !state.childrenDrawer;
            state.ComponentContentChildDrawer=action.ComponentChild;
            return { ...state }

        }

        case 'OPEN_FORM': {
            state.visible = true;
            state.ComponentContentDrawer = action.Component;
            state.title = action.title;
            state.widthDrawer = action.widthDrawer;
            return { ...state }

        }
        case 'SET_SUBMIT': {
            state.callBackSubmit = action.submitFunction;
            return {...state};
        }

        case 'SET_SUBMIT_CREATE_BOOK' : {
            return {...state,callBackSubmit:action.submitFunction}
        }

        case 'OPEN_FORM_CREATE_TASK' : {
            state.visible = true;
            state.title = action.title;
            state.ComponentContentDrawer = action.Component;
            return {...state};

        }

        

        default:
            return state
    }
}
export default drawerLibraryReducer