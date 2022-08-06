import {React,Fragment} from 'react'
import { NavLink } from 'react-router-dom'

export default function SidebarAdmin() {
  
const renderManageStaff=()=>{
  if(localStorage.getItem('role')==='SUPER_ADMIN'){
   return <li className="sidebar-nav-item " >
   <NavLink activeClassName="sidebar-nav-item active-sidebar"  style={{color:'green'}}
 className="nav-link" to="/staff-manager" >   <i className="fas fa-book " style={{marginRight:'20px'}}  />Manage Staff</NavLink>
  
   </li>
  }
  else{
    return <></>
  }
}


  return (
    <Fragment>
    <div className="sidebar" style={{backgroundColor: '#b2bec3'}}>
<ul className="sidebar-nav">
<li className="sidebar-nav-item " >
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/dashboard" >   <i className="fas fa-book " style={{marginRight:'20px'}}  />Dashboard</NavLink>
 
  </li>
  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/book-manager">   <i className="fas fa-book " style={{marginRight:'20px'}}  />Book Manager</NavLink>
 
  </li>
  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/category-manager"><i className="fab fa-accusoft" style={{marginRight:'20px'}}  />Category Manager</NavLink>

  </li>

  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/bookshelf-manager"><i className="fab fa-accusoft" style={{marginRight:'20px'}}  />BookShelf Manager</NavLink>

  </li>
  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/punishment-money"><i className="fab fa-accusoft" style={{marginRight:'20px'}}  />Money Manager</NavLink>

  </li>
  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/author-manager"><i className="fas fa-address-card" style={{marginRight:'20px'}}  ></i>Author Manager</NavLink>

  </li>

  <li className="sidebar-nav-item" >
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/publisher-manager"><i className="fas fa-spinner" style={{marginRight:'20px'}}  />Publisher Manager</NavLink>
  </li>
 

  <li className="sidebar-nav-item" >
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/reader-manager"><i className="fas fa-user" style={{marginRight:'20px'}}  />Reader Manager</NavLink>
  </li>

  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link"  to="/feedback-manager"><i className="fas fa-user" style={{marginRight:'20px'}}  />Feedback Manager</NavLink>

  </li>
  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link"  to="/rules-manager"><i className="fas fa-user" style={{marginRight:'20px'}}  />Rules Manager</NavLink>

  </li>

  {
renderManageStaff()

  }

  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link"  to="/about-us"><i className="fas fa-users" style={{marginRight:'20px'}}  />About us</NavLink>

  </li>
</ul>
</div>
  </Fragment>
  )
}
