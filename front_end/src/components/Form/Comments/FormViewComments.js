import React,{ useEffect } from 'react'
import { useDispatch,  useSelector} from 'react-redux';
import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";
import {CREATE_COMMENT_SAGA,DELETE_COMMENT_SAGA} from "../../../redux/constant/libraryManager/commentConstants";
import FormEditComments from './FormEditComments';
import { Popconfirm} from 'antd';

const  FormViewComments=(props)=> {
  const commentList = useSelector(state => state.commentsReducers.commentList);
  const MaSach = useSelector(state => state.commentsReducers.MaSach);
const formatDate=(str)=>{
 
const event = new Date(str);
return event.toLocaleString('en-GB', { timeZone: 'UTC' });
}
 
  const renderCommentList=()=>{

    return commentList.map((comment,index)=>{
      if(comment.id==localStorage.getItem('id_user')){
        return     <> <div className='d-flex' key={index} style={{ position:'relative'}}>
        <h5>{comment.Ten}</h5>
        <div className='d-flex'>
        <p style={{ position:'absolute',right:'40px'}}>{formatDate(comment.createdAt)}</p>
        <div style={{position:'absolute',right:'10px',bottom:'-30px'}}>
        <button type="button" class="btn btn-success" style={{ fontSize:'8px',marginRight:'5px'}}
        
        onClick={()=>{
          console.log('comment.NoiDung',comment.NoiDung);
          dispatch({ type: 'CHILDRENT_DRAWER' ,
          ComponentChild:<FormEditComments/>
        });


        const action1 = {
          type: 'EDIT_COMMENT',
          editComment:{
            NoiDung:comment.NoiDung,
            idComment:comment.idComment,
          },
      
      }
      dispatch(action1);
        }}
        
        >Edit</button>
           <Popconfirm
                    
                    title="Are you sure to delete this book?"
                    onConfirm={() => {
                        dispatch({ type: DELETE_COMMENT_SAGA, 
                          idComment: comment.idComment ,
                          MaSach:MaSach
                        })
                    }}

                    okText="Yes"
                    cancelText="No"
                >
                    <button className="btn btn-danger" style={{ fontSize:'8px'}}>
                        Delete
                    </button>
                </Popconfirm>
        </div>
        </div>
      

        </div>
          <p className='ml-5'>{comment.NoiDung}</p>
          <hr/></>
      }
      else{
        return     <> <div className='d-flex' key={index} style={{ position:'relative'}}>
        <h5>{comment.Ten}</h5>
      
        <p style={{ position:'absolute',right:'40px'}}>{formatDate(comment.createdAt)}</p>
   
  
      

        </div>
          <p className='ml-5'>{comment.NoiDung}</p>
          <hr/></>
      }
        
    })}



  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
} = props;
const dispatch = useDispatch();
useEffect(() => {

  dispatch({ type: 'SET_SUBMIT', submitFunction: handleSubmit });

  
}, [])
  return (



    <div style={{position:'relative'}}>

<form onSubmit={handleSubmit} className="mb-4" >
<button type="button" className="btn btn-primary" 
 onClick={handleSubmit} style={{fontSize:'10px',position:'absolute',right:'0',top:'8%'}}>Add</button>

<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{width:'85%'}}
name="NoiDung"   onChange={handleChange}
onBlur={handleBlur}
value={values.NoiDung}
></textarea>
{touched.NoiDung && errors.NoiDung ? (
  <div className="text-danger">{errors.NoiDung}</div>
       ) : null}
</form>


   {renderCommentList()}
    </div>
  )
}


const CreateCommentWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {    
   
  return { NoiDung:""} },



  // Custom sync validation
  validationSchema: Yup.object().shape({
    NoiDung:Yup.string().required(),


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:CREATE_COMMENT_SAGA,
      commentCreate:{
        NoiDung:values.NoiDung,
        MaAcount:localStorage.getItem('id_user'),
        MaSach:props.MaSach
      },
  })

  },

  displayName: "AddCategoryForm",
})(FormViewComments);
const mapStateToProps = (state) => ({

  MaSach: state.commentsReducers.MaSach,
  

})
export default connect(mapStateToProps)(CreateCommentWithFormik);