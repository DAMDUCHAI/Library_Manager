import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {UPDATE_CATEGORY_SAGA} from '../../../redux/constant/libraryManager/categoryConstants'

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormEditCategory =(props)=> {


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
      setValues,
      setFieldValue
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


const EditCategoryWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
    const { categoryEdit } = props;
    console.log(categoryEdit);
  return { Ten:categoryEdit.Ten} },



  // Custom sync validation
  validationSchema: Yup.object().shape({
    Ten:Yup.string().required('This field is required')

}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:UPDATE_CATEGORY_SAGA,
      categoryUpdate:values,
      idCategory: props.categoryEdit.id,
      name:props.keySearch
  })
 
  },

  displayName: "EditCategoryForm",
})(FormEditCategory);
const mapStateToProps = (state) => ({

  categoryEdit: state.categoryReducers.categoryEdit,
  keySearch: state.categoryReducers.keySearch


})
export default connect(mapStateToProps)(EditCategoryWithFormik);