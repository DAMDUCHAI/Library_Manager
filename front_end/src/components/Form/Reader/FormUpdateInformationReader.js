import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { UPDATE_READER_INFOR_SAGA,GET_READER_SAGA } from "../../../redux/constant/libraryManager/readerConstants";
import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormUpdateInformationReader =(props)=> {
  const imgPreview = useSelector(state => state.imgReducers.imgPreview);

  const dispatch = useDispatch();
      //componentdidmount
      useEffect(() => {
        dispatch({ type: 'SET_SUBMIT', submitFunction: handleSubmit });
        dispatch({ type: 'GET_LIST_PHONE_SAGA'})
        dispatch({ type: 'GET_LIST_CCCD_SAGA' })
   
    }, [])
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      setFieldValue
  } = props;
  const phoneList = useSelector(state => state.validateReducers.phoneList);
  const cccdList = useSelector(state => state.validateReducers.cccdList);
  const readerEdit = useSelector(state => state.readerReducers.readerEdit);

  const ListCCCDFilter=cccdList.filter((item=>item.CCCD!==readerEdit.CCCD))
  const ListPhoneFilter=phoneList.filter((item=>item.Phone!==readerEdit.Phone))
  return (

    <>
    <form onSubmit={handleSubmit} enctype="multipart/form-data" style={{position:'relative'}}>
  
  <div className="row">
    <div className="col-6"> 
    <label for="" className="form-label">Tên</label>
    <input type="text" className="form-control" name="Ten"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.Ten}/>
        
        {touched.Ten && errors.Ten ? (
  <div className="text-danger">{errors.Ten}</div>
       ) : null}
        
        
        </div>
         <div className="col-6"> 
    <label for="" className="form-label">Ngày Sinh</label>
    <input  type="date" className="form-control" name="NgaySinh"  rows="10"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.NgaySinh}/>
        
        {touched.NgaySinh && errors.NgaySinh ? (
  <div className="text-danger">{errors.NgaySinh}</div>
       ) : null}
        
        
        </div>
                <div className="col-6"> 
    <label for="" className="form-label">CCCD</label>
    <input  type="text" className="form-control" name="CCCD"  rows="10"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.CCCD}/>
        
        {touched.CCCD && errors.CCCD ? (
  <div className="text-danger">{errors.CCCD}</div>
       ) : null}
        
        {touched.CCCD && !errors.CCCD && ListCCCDFilter.some((item,key)=>item.CCCD==values.CCCD)==true ? (
  <div className="text-danger">Đã tồn tại CCCD này trong hệ thống</div>
       ) : null}
        
        </div>
                <div className="col-6"> 
    <label for="" className="form-label">Phone</label>
    <input  type="text" className="form-control" name="Phone"  rows="10"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.Phone}/>
        
        {touched.Phone && errors.Phone ? (
  <div className="text-danger">{errors.Phone}</div>
       ) : null}
        
        {touched.Phone && !errors.Phone && ListPhoneFilter.some((item,key)=>item.Phone==values.Phone)==true ? (
  <div className="text-danger">Đã tồn tại sđt này trong hệ thống</div>
       ) : null}
        
        </div>
                <div className="col-6"> 
    <label for="" className="form-label">Địa Chỉ</label>
    <input  type="text" className="form-control" name="DiaChi"    onChange={handleChange}
        onBlur={handleBlur}
        value={values.DiaChi}/>
        
        {touched.DiaChi && errors.DiaChi ? (
  <div className="text-danger">{errors.DiaChi}</div>
       ) : null}
        
        
        </div>
                <div className="col-6"> 
    <label  className="form-label">Giới tính</label>
    <select name="MaGioiTinh"  style={{width:'200px'}} className="form-control" onChange={handleChange}
        onBlur={handleBlur}
        value={values.MaGioiTinh}>
      <option value="1" className="form-control">Nam</option>
      <option value="2" className="form-control">Nữ</option>
      <option value="3" className="form-control">Không Xác Định</option>
    </select>
   </div>
                <div className="col-6"> 
                <label for="" className="form-label">img avatar</label>
    
    <input className="form-control" name="avatar" type="file" onChange={(event) => {
          dispatch({
            type:'IMG_PREVIEW',
            imgPreview:URL.createObjectURL(event.target.files[0])
          })
      setFieldValue("avatar", event.currentTarget.files[0]);
    }} />
            {touched.avatar && errors.avatar ? (
      <div className="text-danger">{errors.avatar}</div>
           ) : null}
        
        </div>
     </div>
     <div style={{width:'150px',height:'150px',position:'absolute',right:'114px',bottom:'-69px'}}>
      <img src={imgPreview} style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Select img"></img>
      </div>
    </form>


    </>
  )
}
const formatDate=(dateString)=>{
  return dateString.substring(0, 10)
}
const phoneRegex =/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/
const CCCDRegex=/^[0-9]{12}$/

const UpdateInformationReaderWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
    const { inforReader } = props;
  
  return { Ten:inforReader.Ten,DiaChi:inforReader.DiaChi,Phone:inforReader.Phone,CCCD:inforReader.CCCD,NgaySinh:formatDate(inforReader.NgaySinh),MaGioiTinh:inforReader.MaGioiTinh,avatar:''} },



  // Custom sync validation
  validationSchema: Yup.object().shape({
    Ten:Yup.string().required('This field  is required'),
    DiaChi:Yup.string().required('This field  is required'),
    Phone:Yup.string().required().matches(phoneRegex, 'Phone number is not valid ,length is 10'),
    CCCD:Yup.string().required().matches(CCCDRegex, 'CCCD is not valid ,It is number and length 12'),
    NgaySinh:Yup.string().required('This field  is required'),
    avatar:Yup.string().required('This field  is required'),
}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    const formData= new FormData()

    formData.append('Ten',values.Ten)
    formData.append('DiaChi',values.DiaChi)
    formData.append('Phone',values.Phone)
    formData.append('CCCD',values.CCCD)
    formData.append('NgaySinh',values.NgaySinh)
    formData.append('avatar',values.avatar)
    
    props.dispatch({
      type:UPDATE_READER_INFOR_SAGA,
      readerUpdate:formData,
      MaThongTinChung:props.MaThongTinChung
  })

  },

  displayName: "EditReaderWithFormik",
})(FormUpdateInformationReader);
const mapStateToProps = (state) => ({

  inforReader: state.readerReducers.inforReader,
  MaThongTinChung: state.readerReducers.MaThongTinChung

})
export default connect(mapStateToProps)(UpdateInformationReaderWithFormik);