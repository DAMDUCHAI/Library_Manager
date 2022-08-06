

const stateDefault = {
    imgPreview:'',
 
}

const imgReducers = (state = stateDefault,action) => {


    switch(action.type){
    

        case  'IMG_PREVIEW': {
                state.imgPreview = action.imgPreview;
                
                return {...state};
        }

 

        default: return {...state}
    }
}

export default imgReducers