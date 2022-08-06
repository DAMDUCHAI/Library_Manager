import React, { useEffect } from 'react'
import { useDispatch,  } from 'react-redux';
import {CREATE_BOOKSHELF_SAGA} from "../../../redux/constant/libraryManager/bookshelfConstants";
import * as Yup from 'yup';

import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormAddBookshelf =(props)=> {


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


const CreateBookshelfWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {    
   
  return { Ten:""} },



  // Custom sync validation
  validationSchema: Yup.object().shape({
    Ten:Yup.string().required('This field is required')


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:CREATE_BOOKSHELF_SAGA,
      bookshelfCreate:values,
      name:props.keySearch
  })
  },

  displayName: "AddBookshelfForm",
})(FormAddBookshelf);
const mapStateToProps = (state) => ({

  keySearch: state.bookshelfReducers.keySearch

})
export default connect(mapStateToProps)(CreateBookshelfWithFormik);