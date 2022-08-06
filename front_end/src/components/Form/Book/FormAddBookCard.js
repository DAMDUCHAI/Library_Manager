import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { CREATE_BOOK_CARD_SAGA} from "../../../redux/constant/libraryManager/bookConstant";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormAddBookCard =(props)=> {
  let nowDate = new Date()


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
    <label for="" className="form-label">Mã Sinh Viên</label>
    <input type="text" className="form-control" name="MaSinhVien"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.MaSinhVien}/>
        
        {touched.MaSinhVien && errors.MaSinhVien ? (
  <div className="text-danger">{errors.MaSinhVien}</div>
       ) : null}

        </div>
     <div className="col-12"> 
    <label for="" className="form-label">Hạn Trả</label>
    <input type="date" className="form-control" name="HenTra"     onChange={handleChange}
        onBlur={handleBlur}
        value={values.HenTra}/>
        
        {touched.HenTra && errors.HenTra ? (
  <div className="text-danger">{errors.HenTra}</div>
       ) : null}
        
        </div>
  </div>
  <div className="row">
  <div className="col-12"> 
    <label for="" className="form-label">Số Lượng Mượn</label>
    <input type="text" className="form-control" name="SoLgMuonMax"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.SoLgMuonMax} />
        
        {touched.SoLgMuonMax && errors.SoLgMuonMax ? (
  <div className="text-danger">{errors.SoLgMuonMax}</div>
       ) : null}
        
        </div>

    </div>


   
    

    </form>


    </>
  )
}
const numberRegex= /^[1-9]+$/
const MaSinhVienRegex=/^(HE|SE|he|se)[1-9]{1}[0-9]{5}$/


const AddBookCardWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
  return {MaSinhVien:'',HenTra:'',SoLgMuonMax:'' } 
},



  // Custom sync validation
  validationSchema: Yup.object().shape({
    MaSinhVien:Yup.string().required().matches(MaSinhVienRegex, 'MaSinhVien is not valid ,vd HE141462'),
    HenTra:Yup.string().required(),
    SoLgMuonMax:Yup.string().required().matches(numberRegex, 'This field  is natural number, start 1'),

}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:CREATE_BOOK_CARD_SAGA,
      bookCardCreate:values,
      name:props.keySearch

  })
  },

  displayName: "FormAddBookCard",
})(FormAddBookCard);
const mapStateToProps = (state) => ({

  keySearch: state.bookReducers.keySearch


})
export default connect(mapStateToProps)(AddBookCardWithFormik);