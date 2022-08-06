import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {UPDATE_COMMENT_SAGA} from '../../../redux/constant/libraryManager/commentConstants'

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormEditComments =(props)=> {


  const dispatch = useDispatch();
     
    //   useEffect(() => {

    //     dispatch({ type: 'SET_SUBMIT', submitFunction: handleSubmit });
    // }, [])
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
    <label for="" className="form-label">NoiDung</label>
    <input type="text" className="form-control" name="NoiDung"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.NoiDung}/>
                {touched.NoiDung && errors.NoiDung ? (
  <div className="text-danger">{errors.NoiDung}</div>
       ) : null}
        
        </div>
        </div>
        <button type="button" 
        style={{fontSize:'10px',position:'absolute',right:'20px'}}
        
        onClick={handleSubmit} class="btn btn-success">Save</button>

  
    </form>


    </>
  )
}


const EditCommentsWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
    const { editComment } = props;

  return { NoiDung:editComment.NoiDung} },



  // Custom sync validation
  validationSchema: Yup.object().shape({
    NoiDung:Yup.string().required('This field is required')

}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:UPDATE_COMMENT_SAGA, 
    idComment:props.editComment.idComment,
    NoiDung:values.NoiDung,
    MaSach:props.MaSach,
  })
  

  },

  displayName: "FormEditComments",
})(FormEditComments);
const mapStateToProps = (state) => ({

    editComment: state.commentsReducers.editComment,
    MaSach: state.commentsReducers.MaSach,


})
export default connect(mapStateToProps)(EditCommentsWithFormik);