import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

 const FormViewFeedbackDetaild =(props)=> {

  const feedback = useSelector(state => state.feedbackReducers.feedback);

  console.log('feedback',feedback);
  return (

    <>
    <form >
  
  <div className="row">
    <div className="col-12"> 
    <label for="" className="form-label">Tiêu Đề</label>
    <input type="text" className="form-control" name="TieuDe"   
      
        value={feedback.TieuDe}/></div>
         <div className="col-12"> 
    <label for="" className="form-label">Nội Dung</label>
    <textarea  type="text" className="form-control" name="NoiDung"  rows="5" 
       
        value={feedback.NoiDung}></textarea></div>
     </div>

    </form>


    </>
  )
}



export default FormViewFeedbackDetaild