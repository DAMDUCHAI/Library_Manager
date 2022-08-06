import React, { useEffect } from 'react'
import {CHANGE_PASS_SAGA} from "../../../redux/constant/libraryManager/acountConstants";
import {SHOW_PASS} from "../../../redux/constant/libraryManager/loginConstants";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'


const FormChangePassWorld =(props)=> {
  const  showPass= useSelector(state => state.loginReducers.showPass);


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
    <label htmlfor="" className="form-label">Mật khẩu*</label>
    <input type={showPass} className="form-control" name="MatKhau"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.MatKhau}/>
        {touched.MatKhau && errors.MatKhau ? (
  <div className="text-danger">{errors.MatKhau}</div>
       ) : null}
        </div>
            <div className="col-12"> 
    <label htmlfor="" className="form-label">Mật khẩu mới *</label>
    <input type={showPass} className="form-control" name="MatKhauMoi"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.MatKhauMoi}/>
        {touched.MatKhauMoi && errors.MatKhauMoi ? (
  <div className="text-danger">{errors.MatKhauMoi}</div>
       ) : null}
        </div>
                    <div className="col-12"> 
    <label htmlfor="" className="form-label">Xác nhận mật khẩu *</label>
    <input type={showPass} className="form-control" name="XacNhanMatKhau"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.XacNhanMatKhau}/>
        {touched.XacNhanMatKhau && errors.XacNhanMatKhau ? (
  <div className="text-danger">{errors.XacNhanMatKhau}</div>
       ) : null}
        </div>
     
     </div>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" 
  onClick={()=>{
    dispatch({
      type:SHOW_PASS,
     

    })
  }}
  
  />
  <label className="form-check-label" htmlFor="flexCheckDefault" style={{color:'green'}}>
    Show password
  </label>
</div>

    </form>


    </>
  )
}


const ChangePassWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {    
   
  return { MatKhau:"",MatKhauMoi:"",XacNhanMatKhau:""} },



  // Custom sync validation
  validationSchema: Yup.object().shape({
    MatKhau:Yup.string().required().min(6,'Password must have min 6 characters').max(32,'PassWord  have max 32 characters'),
    MatKhauMoi:Yup.string().required().min(6,'New password must have min 6 characters').max(32,'PassWord  have max 32 characters'),
    XacNhanMatKhau:Yup.string().required().min(6,'Confirm password must have min 6 characters').max(32,'PassWord  have max 32 characters')

}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:CHANGE_PASS_SAGA,
      dataPass:values,
  })

  },

  displayName: "ChangePassWithFormik",
})(FormChangePassWorld);

export default connect()(ChangePassWithFormik);