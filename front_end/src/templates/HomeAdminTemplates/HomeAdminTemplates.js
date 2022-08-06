import React from 'react'
import { Route } from 'react-router-dom';
import NavbarAdmin from '../../components/NavbarAdmin';
import SidebarAdmin from '../../components/SidebarAdmin';




export const HomeAdminTemplates =(props) =>{
    const {Component,...restParam} = props;

    return <Route  {...restParam} render={(propsRoute)=>{
        return <>
            <NavbarAdmin/>
            <SidebarAdmin/>
            <Component {...propsRoute} />
        </>
    }} />
}








