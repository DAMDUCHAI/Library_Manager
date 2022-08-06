import React from 'react'
import { Route } from 'react-router-dom';
import BannerReader from '../../components/Reader/BannerReader';
import FooterReader from '../../components/Reader/FooterReader';






export const HomeReaderTemplates =(props) =>{
    const {Component,...restParam} = props;

    return <Route  {...restParam} render={(propsRoute)=>{
        return <>
            <BannerReader/>
     
            <Component {...propsRoute} />
            <FooterReader/>
        </>
    }} />
}








