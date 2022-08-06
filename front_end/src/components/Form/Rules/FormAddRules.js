import React, { useEffect } from 'react'
import { useDispatch,  } from 'react-redux';
import {CREATE_RULES_SAGA} from "../../../redux/constant/libraryManager/rulesConstants";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormAddRules =(props)=> {


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
    <label htmlFor="">Nội dung</label>
  <textarea className="form-control" name="NoiDung" rows={10} defaultValue={""}  onChange={handleChange}
        onBlur={handleBlur}
        value={values.NoiDung} />

{touched.NoiDung && errors.NoiDung ? (
  <div className="text-danger">{errors.NoiDung}</div>
       ) : null}

        </div>
     
     </div>

    </form>





    </>
  )
}


const CreateRulesWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {    
   
  return { NoiDung:""} },



  // Custom sync validation
  validationSchema: Yup.object().shape({
    NoiDung:Yup.string().required(),


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:CREATE_RULES_SAGA,
      rulesCreate:values,
  })

  },

  displayName: "AddRulesForm",
})(FormAddRules);

export default connect()(CreateRulesWithFormik);