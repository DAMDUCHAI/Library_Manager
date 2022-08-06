import React, { useEffect } from 'react'
import { useDispatch,  } from 'react-redux';
import { CREATE_AUTHOR_SAGA} from "../../../redux/constant/libraryManager/authorConstants";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormAddAuthor =(props)=> {


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
        <div className="col-12"> 
    <label for="" className="form-label">Phone</label>
    <input type="text" className="form-control" name="Phone"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.Phone}/>
        
        {touched.Phone && errors.Phone ? (
  <div className="text-danger">{errors.Phone}</div>
       ) : null}
        
        </div>
           <div className="col-12"> 
    <label for="" className="form-label">Email</label>
    <input type="text" className="form-control" name="Email"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.Email}/>
        
        {touched.Email && errors.Email ? (
  <div className="text-danger">{errors.Email}</div>
       ) : null}
        
        </div>
           <div className="col-12"> 
    <label for="" className="form-label">Địa chỉ</label>
    <input type="text" className="form-control" name="DiaChi"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.DiaChi}/>
        
        {touched.DiaChi && errors.DiaChi ? (
  <div className="text-danger">{errors.DiaChi}</div>
       ) : null}
        
        </div>
           <div className="col-12"> 
    <label for="" className="form-label">Tieu Su</label>
    <input type="text" className="form-control" name="TieuSu"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.TieuSu}/>
        
        
        {touched.TieuSu && errors.TieuSu ? (
  <div className="text-danger">{errors.TieuSu}</div>
       ) : null}
        
        </div>
     </div>
    </form>


    </>
  )
}
const phoneRegex =/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/


const CreateAuthorWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {    
   
  return   { Ten:"",Phone:"",Email:"",DiaChi:"",TieuSu:"",}
 },



  // Custom sync validation
  
  validationSchema: Yup.object().shape({
    Ten:Yup.string().required('This field  is required'),
    Phone:Yup.string().required().matches(phoneRegex, 'Phone number is not valid ,length is 10'),
    Email:Yup.string().required().email('Email is not valid'),
    DiaChi:Yup.string().required('This field  is required'),
    TieuSu:Yup.string().required('This field  is required'),

}),

  handleSubmit: (values , { setSubmitting ,props}) => {
  
    props.dispatch({
      type:CREATE_AUTHOR_SAGA,
      authorCreate:values,
      name:props.keySearch

  })
console.log("valuse", values);
  },

  displayName: "AddAuthorForm",
})(FormAddAuthor);
const mapStateToProps = (state) => ({

  keySearch: state.authorReducers.keySearch

})
export default connect(mapStateToProps)(CreateAuthorWithFormik);