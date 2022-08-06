import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {UPDATE_STAFF_SAGA} from "../../../redux/constant/libraryManager/staffConstants";
import {GET_ALL_GENDER_SAGA} from "../../../redux/constant/libraryManager/genderConstants";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormEditStaff =(props)=> {

  let nowDate = new Date()
  const dispatch = useDispatch();
      //componentdidmount
      useEffect(() => {

        //Load sự kiện submit lên drawer nút submit
        dispatch({ type: 'SET_SUBMIT', submitFunction: handleSubmit });
        dispatch({ type: GET_ALL_GENDER_SAGA })

        
        dispatch({ type: 'GET_LIST_PHONE_SAGA'})
        dispatch({ type: 'GET_LIST_CCCD_SAGA' })
        dispatch({ type: 'GET_LIST_EMAIL_SAGA'})
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
  const imgPreview = useSelector(state => state.imgReducers.imgPreview);

  const listGender=useSelector(state => state.genderReducers.genderList);
  const phoneList = useSelector(state => state.validateReducers.phoneList);
  const emailList = useSelector(state => state.validateReducers.emailList);
  const cccdList = useSelector(state => state.validateReducers.cccdList);
  const staffEdit = useSelector(state => state.staffReducers.staffEdit);

    const ListEmailFilter=emailList.filter((item=>item.Email!==staffEdit.Email))
    const ListCCCDFilter=cccdList.filter((item=>item.CCCD!==staffEdit.CCCD))
    const ListPhoneFilter=phoneList.filter((item=>item.Phone!==staffEdit.Phone))


  const renderOptionGender=()=>{
    return listGender.map((gender,index)=>{
      return  <option key={index} value={gender.id}>
      {gender.NoiDung}
  </option>
    })
  }
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
    <label for="" className="form-label">Email</label>
    <input type="text" className="form-control" name="Email"     onChange={handleChange}
        onBlur={handleBlur}
        value={values.Email}/>
        
        {touched.Email && errors.Email ? (
  <div className="text-danger">{errors.Email}</div>
       ) : null}
        

        {touched.Email && !errors.Email && ListEmailFilter.some((item,key)=>item.Email==values.Email)==true ? (
  <div className="text-danger">Đã tồn tại email này trong hệ thống</div>
       ) : null}
        </div>

  
  <div className="col-6"> 
    <label for="" className="form-label">Dia Chi</label>
    <input type="text" className="form-control" name="DiaChi"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.DiaChi} />
        
        {touched.DiaChi && errors.DiaChi ? (
  <div className="text-danger">{errors.DiaChi}</div>
       ) : null}
        
        
        </div>
    <div className="col-6"> 
    <label for="" className="form-label">Phone</label>
    <input type="text" className="form-control" name="Phone"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.Phone} />
        
        {touched.Phone && errors.Phone ? (
  <div className="text-danger">{errors.Phone}</div>
       ) : null}

{touched.Phone && !errors.Phone && ListPhoneFilter.some((item,key)=>item.Phone==values.Phone)==true ? (
  <div className="text-danger">Đã tồn tại sđt này trong hệ thống</div>
       ) : null}
        
        </div>

  <div className="col-6"> 
    <label for="" className="form-label">CCCD</label>
    <input type="text" className="form-control" name="CCCD" onChange={handleChange}
        onBlur={handleBlur}
        value={values.CCCD} />
        
        {touched.CCCD && errors.CCCD ? (
  <div className="text-danger">{errors.CCCD}</div>
       ) : null}
        

        {touched.CCCD && !errors.CCCD && ListCCCDFilter.some((item,key)=>item.CCCD==values.CCCD)==true ? (
  <div className="text-danger">Đã tồn tại CCCD này trong hệ thống</div>
       ) : null}
        </div>
    


  <div className="col-6"> 
  <div>
  <label htmlFor="">Ngày Sinh</label>
  <input type="date" className="form-control" name="NgaySinh" onChange={handleChange}
        onBlur={handleBlur}
        value={values.NgaySinh} />
</div>

{touched.NgaySinh && errors.NgaySinh ? (
  <div className="text-danger">{errors.NgaySinh}</div>
       ) : null}

  </div>
  

  <div className="col-6"> 
  <div>
  <label htmlFor="">Gioi Tinh</label>
  <select className="form-control" name="MaGioiTinh" value={values.MaGioiTinh} onChange={handleChange}>
                            {renderOptionGender()}
                        </select>
</div>

  </div>


  <div className="col-6"> 
  <div>
  <label htmlFor="">Ngày HD</label>
  <input type="date" className="form-control" name="NgayHD" onChange={handleChange}  min={nowDate.toISOString().split('T')[0]}
        onBlur={handleBlur}
        value={values.NgayHD} />
</div>

{touched.NgayHD && errors.NgayHD ? (
  <div className="text-danger">{errors.NgayHD}</div>
       ) : null}

  </div>
  <div className="col-6"> 
    <label for="" className="form-label">Img avatar</label>
    
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
  <div style={{width:'150px',height:'150px',position:'absolute',right:'169px',bottom:'-69px'}}>
      <img src={imgPreview} style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Select img"></img>
      </div>
    </form>


    </>
  )
}

const phoneRegex =/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/
const EmailRegex=/^[a-zA-Z]+(he|HE|se|SE)[1-9]{6}@fpt.edu.vn$/
const CCCDRegex=/^[0-9]{12}$/

const formatDate=(dateString)=>{
    return dateString.substring(0, 10)
  }

const EditStaffWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
    const { staffEdit } = props;

  return { NgaySinh:formatDate(staffEdit.NgaySinh),Ten:staffEdit.Ten,DiaChi:staffEdit.DiaChi,Phone:staffEdit.Phone,Email:staffEdit.Email,CCCD:staffEdit.CCCD,MaGioiTinh:"1",NgayHD:formatDate(staffEdit.NgayHD),avatar:"" }},

  // Custom sync validation
  validationSchema: Yup.object().shape({
    Ten:Yup.string().required('This field  is required'),
    DiaChi:Yup.string().required('This field  is required'),
    Phone:Yup.string().required().matches(phoneRegex, 'Phone number is not valid ,length is 10'),
    Email:Yup.string().required().matches(EmailRegex, 'Email is not valid ,vd haiddhe141462@fpt.edu.vn'),
    CCCD:Yup.string().required().matches(CCCDRegex, 'CCCD is not valid ,It is number and length 12'),
    NgaySinh:Yup.string().required('This field  is required'),
    NgayHD:Yup.string().required('This field  is required'),
    avatar:Yup.string().required('This field  is required'),


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    const formData= new FormData()
formData.append('avatar',values.avatar)
formData.append('Ten',values.Ten)
formData.append('DiaChi',values.DiaChi)
formData.append('Phone',values.Phone)
formData.append('CCCD',values.CCCD)
formData.append('NgaySinh',values.NgaySinh)
formData.append('MaGioiTinh',values.MaGioiTinh)


    props.dispatch({
        type:UPDATE_STAFF_SAGA,
        staffUpdate:formData,
        MaThongTinChung:props.staffEdit.MaThongTinChung, 
        updateAcount:{
          Email:values.Email,
        },
        MaAcount:props.staffEdit.MaAcount,
        name:props.keySearch
        
    })
console.log('staffEdit',props.staffEdit);

  },

  displayName: "FormEditStaff",
})(FormEditStaff);
const mapStateToProps = (state) => ({


    staffEdit:state.staffReducers.staffEdit,
    keySearch: state.staffReducers.keySearch

  })
export default connect(mapStateToProps)(EditStaffWithFormik);