import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom'
import "./readerStyle.css";
import { useSelector, useDispatch } from 'react-redux'
import {NOTIFICATION_LOGIN} from "../../redux/constant/libraryManager/loginConstants";

import FormAddFeedBack from "../Form/FeedBack/FormAddFeedBack";
import FormUpdateInformationReader from "../Form/Reader/FormUpdateInformationReader";
import {GET_READER_SAGA} from "../../redux/constant/libraryManager/readerConstants";
import FormChangePassWorld from "../Form/Acount/FormChangePassWorld";
import FormViewStatus from "../Form/Book/FormViewStatus";
import FormRulesLibrary from "../Modal/FormRulesLibrary";
export default function BannerReader() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '520' });



}, [])

const  login= useSelector(state => state.loginReducers.login);

  return (
    <div className="banner_top" id="home">
     
        <div className="header_agileits">
    
        <div className="nav-bar-reader">
        <a href="#view-book">View book</a>
        <a href="# "  
        onClick={()=>{
          const action = {
                            type: 'OPEN_FORM',
                            title:'View Status',
                            widthDrawer:900,
                            Component: <FormViewStatus/>,

                        }
                        dispatch(action)

                        const action1 = {
                            type: 'GET_BORROW_BY_ID_ACOUNT_SAGA',
                        }
                        dispatch(action1)
          
        }}>View book status</a>
        <a href="# "     onClick={()=>{
          const action = {
                            type: 'OPEN_FORM',
                            title:'Update Information',
                            widthDrawer:600,
                            Component: <FormUpdateInformationReader />,
                        }
                        dispatch(action);

                        const action1 = {
                            type: GET_READER_SAGA,
                           
                        }
                        dispatch(action1);

                    
          
        }}>profile</a>
    
        <a href="# "  
        onClick={()=>{
          const action = {
                            type: 'OPEN_FORM',
                            title:'FeddBack for Us',
                            Component: <FormAddFeedBack />,
                        }
                        dispatch(action);

               
          
        }}>feed back</a>


<a href="# "  
        onClick={()=>{
          const action = {
                            type: 'OPEN_FORM',
                            title:'Change Passworld',
                            Component: <FormChangePassWorld />,
                        }
                        dispatch(action);

               
          
        }}>change passworld</a>



<a href="# "   style={{position:'absolute',top:'60px'}}
        onClick={()=>{
          const action = {
                            type: 'OPEN_MODAL',
                            title:'Rules Library',
                            width:900,
                            Component: <FormRulesLibrary/>,
                        }
                        dispatch(action);

               
          
        }}>rules</a>

          <NavLink style={{ backgroundColor:'#ccc', padding:'5px 10px', borderRadius:'3px',color:'#000',position:'absolute',right:'50px',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} to='/login'
       onClick={()=>{
        if(login==='LOGOUT'){
          localStorage.clear();
        }
        dispatch({
          type:NOTIFICATION_LOGIN,
          notificationLogin:''
         
        })
      }}>{login}</NavLink>
        </div>
        
          <div className="callbacks_container">
         
            
                <div className="banner-top2">
                  <div className="banner-info-wthree">
                    <h3>Library</h3>
                    <p>See how good they feel.</p>
                  </div>
             
            
          </div>
        </div>
      </div>
    </div>
  );
}
