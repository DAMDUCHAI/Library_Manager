import React, { useEffect } from 'react'
import { useDispatch,  } from 'react-redux';
import {CREATE_FEEDBACK_SAGA} from "../../../redux/constant/libraryManager/feedBackConstants";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormAddFeedBack =(props)=> {


  const dispatch = useDispatch();
      //componentdidmount
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
    <label for="" className="form-label">Tiêu Đề</label>
    <input type="text" className="form-control" name="TieuDe"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.TieuDe}/>
        
        {touched.TieuDe && errors.TieuDe ? (
  <div className="text-danger">{errors.TieuDe}</div>
       ) : null}
        
        </div>
         <div className="col-12"> 
    <label for="" className="form-label">Nội Dung</label>
    <textarea  type="text" className="form-control" name="NoiDung"  rows="10"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.NoiDung}></textarea>
        
        {touched.NoiDung && errors.NoiDung ? (
  <div className="text-danger">{errors.NoiDung}</div>
       ) : null}
        
        </div>
     </div>

    </form>


    </>
  )
}


const CreateFeedBackWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {    
   
  return { TieuDe:"",NoiDung:""} },



  // Custom sync validation
  validationSchema: Yup.object().shape({
    TieuDe:Yup.string().required(),
    NoiDung:Yup.string().required(),

}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    const feedBackCreate ={
        TieuDe:values.TieuDe,
        NoiDung:values.NoiDung,
        MaAcount:localStorage.getItem('id_user')
    }
    props.dispatch({
      type:CREATE_FEEDBACK_SAGA,
      feedBackCreate:feedBackCreate,
  })

  },

  displayName: "FormAddFeedBack",
})(FormAddFeedBack);

export default connect()(CreateFeedBackWithFormik);