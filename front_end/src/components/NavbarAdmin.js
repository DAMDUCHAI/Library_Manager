import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {NOTIFICATION_LOGIN} from "../redux/constant/libraryManager/loginConstants";
import React,{Fragment} from 'react';
import FormUpdateInformationReader from './Form/Reader/FormUpdateInformationReader';
import {GET_READER_SAGA} from "../redux/constant/libraryManager/readerConstants";
import FormChangePassWorld from './Form/Acount/FormChangePassWorld';
import FormUpdateInformationStaff from './Form/Staff/FormUpdateInformationStaff';


export default function NavbarAdmin() {
  const  login= useSelector(state => state.loginReducers.login);
  const  nameUser= useSelector(state => state.acountReducers.nameUser);

  const dispatch = useDispatch();

  return (
    <Fragment>

<div className="container-fluid" style={{backgroundColor: '#1e272e',position: 'fixed',zIndex:999}}>
<div className="row d-flex align-items-center">
  <div className="col-3 d-flex align-items-center">
  <i className="fas fa-bars text-white" ></i>
  <h5 className="ml-4 mt-2 text-white">Library Manager</h5>
    </div>
  <div className="col-5">
  <form className="navbar-search" style={{width:'100%'}}>
    <input type="text" name="Search" className="navbar-search-input" placeholder="What you looking for..." />
   
    <i className="fas fa-search" />
  </form>
    </div>
    <div className="col-3">
    <img src={require('../assets/imgProfile/imgProfile.jpg')} alt="User image" style={{borderRadius:'65%',width:'25px',marginLeft:'40px'}}/>

<select onChange={(e)=>{

     const value =e.target.value;
     if(value==='1'){
     if(localStorage.getItem('role')==='USER'){
      const action = {
        type: 'OPEN_FORM',
        widthDrawer:'600',
        title:'Update Information Reader',
        Component: <FormUpdateInformationReader />,
    }
    dispatch(action);
     }
     else{
      const action = {
        type: 'OPEN_FORM',
        widthDrawer:'600',
        title:'Update Information Staff',
        Component: <FormUpdateInformationStaff />,
    }
    dispatch(action);
     }
    }
     if(value==='2'){
      const action = {
        type: 'OPEN_FORM',
        title:'Change Passworld',
        Component: <FormChangePassWorld />,
    }
    dispatch(action);
     } 
     else{
      if(localStorage.getItem('role')==='USER'){
        const action = {
          type: 'OPEN_FORM',
          widthDrawer:'600',
          title:'Update Information Reader',
          Component: <FormUpdateInformationReader />,
      }
      dispatch(action);
       }
       else{
        const action = {
          type: 'OPEN_FORM',
          widthDrawer:'600',
          title:'Update Information Staff',
          Component: <FormUpdateInformationStaff />,
      }
      dispatch(action);
       }

     }
  }} 
  
  style={{outline:'none',border:'none',marginLeft:'20px',marginTop:'0.5px',padding:'0 5px',height:'33px',borderRadius:'3px'}}>
  <option value='1' >Hi ,{nameUser}</option>
  <option value='2' >Change PassWord</option>

  <option value='3'>Update Information</option>

</select>



<NavLink 
style={{backgroundColor:'#ccc', marginTop:'0.5px',padding:'5px 10px', height:'33px',borderRadius:'3px',color:'#000', position:'absolute', right:'-70px'}} to="/login"
onClick={()=>{
  if(login==='LOGOUT'){
    localStorage.clear();
  }
  dispatch({
    type:NOTIFICATION_LOGIN,
    notificationLogin:''
   
  })
}}


>{login}</NavLink>


    </div>

</div>
</div>
</Fragment>
  )
}
