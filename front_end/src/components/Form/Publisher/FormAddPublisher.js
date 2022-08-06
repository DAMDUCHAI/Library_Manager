import React, { useEffect } from 'react'
import { useDispatch,  } from 'react-redux';
import {CREATE_PUBLISHER_SAGA} from "../../../redux/constant/libraryManager/publisherConstants";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormAddPublisher =(props)=> {


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
    <label for="" class="form-label">Tên</label>
    <input type="text" className="form-control" name="Ten"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.Ten}/>
        
        {touched.Ten && errors.Ten ? (
  <div className="text-danger">{errors.Ten}</div>
       ) : null}
        
        
        </div>
        <div className="col-12"> 
    <label for="" class="form-label">Phone</label>
    <input type="text" className="form-control" name="Phone"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.Phone}/>
        
        {touched.Phone && errors.Phone ? (
  <div className="text-danger">{errors.Phone}</div>
       ) : null}
        
        
        </div>
           <div className="col-12"> 
    <label for="" class="form-label">Email</label>
    <input type="text" className="form-control" name="Email"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.Email}/>
        
        {touched.Email && errors.Email ? (
  <div className="text-danger">{errors.Email}</div>
       ) : null}
        
        </div>
           <div className="col-12"> 
    <label for="" class="form-label">Địa chỉ</label>
    <input type="text" className="form-control" name="DiaChi"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.DiaChi}/>
                {touched.DiaChi && errors.DiaChi ? (
  <div className="text-danger">{errors.DiaChi}</div>
       ) : null}
        
        </div>
           <div className="col-12"> 
    <label for="" class="form-label">Người đại diện</label>
    <input type="text" className="form-control" name="NguoiDaiDien"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.NguoiDaiDien}/>
        
        {touched.NguoiDaiDien && errors.NguoiDaiDien ? (
  <div className="text-danger">{errors.NguoiDaiDien}</div>
       ) : null}
        
        </div>
     </div>

    </form>


    </>
  )
}
const phoneRegex =/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/


const CreatePublisherWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {    
   
  return { Ten:"",Phone:"",Email:"",DiaChi:"",NguoiDaiDien:"",} },



  // Custom sync validation
  validationSchema: Yup.object().shape({
    Ten:Yup.string().required('This field  is required'),
    Phone:Yup.string().required().matches(phoneRegex, 'Phone number is not valid ,length is 10'),
    Email:Yup.string().required().email('Email is not valid'),
    DiaChi:Yup.string().required('This field  is required'),
    NguoiDaiDien:Yup.string().required('This field  is required'),

}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:CREATE_PUBLISHER_SAGA,
      publisherCreate:values,
      name:props.keySearch

  })
console.log("valuse", values);
  },

  displayName: "AddPublisherForm",
})(FormAddPublisher);
const mapStateToProps = (state) => ({

  keySearch: state.publisherReducers.keySearch //

})
export default connect(mapStateToProps)(CreatePublisherWithFormik);