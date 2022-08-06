import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {UPDATE_BOOKSHELF_SAGA} from '../../../redux/constant/libraryManager/bookshelfConstants'

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormEditBookshelf =(props)=> {


  const dispatch = useDispatch();
     
      useEffect(() => {



        
        //Load sự kiện submit lên drawer nút submit
        dispatch({ type: 'SET_SUBMIT', submitFunction: handleSubmit });
    }, [])
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,

  } = props;


  return (

    <>
    <form onSubmit={handleSubmit}>
  
  <div className="row">
    <div className="col-12"> 
    <label for="" className="form-label">Tên</label>
    <input type="text" className="form-control" name="Ten"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.Ten}/>
                {touched.Ten && errors.Ten ? (
  <div className="text-danger">{errors.Ten}</div>
       ) : null}
        
        </div>
        </div>
  
    </form>


    </>
  )
}


const EditBookshelfWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
    const { bookshelfEditModel } = props;
    console.log(bookshelfEditModel);
  return { Ten:bookshelfEditModel.Ten} },



  // Custom sync validation
  validationSchema: Yup.object().shape({
    Ten:Yup.string().required('This field is required')

}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:UPDATE_BOOKSHELF_SAGA,
      bookshelfUpdate:values,
      idBookshelf: props.bookshelfEditModel.id,
      name:props.keySearch
  })
 
  },

  displayName: "EditBookshelfForm",
})(FormEditBookshelf);
const mapStateToProps = (state) => ({

    bookshelfEditModel: state.bookshelfReducers.bookshelfEditModel,
    keySearch: state.bookshelfReducers.keySearch


})
export default connect(mapStateToProps)(EditBookshelfWithFormik);