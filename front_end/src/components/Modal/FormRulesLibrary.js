import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_RULES_SAGA} from "../../redux/constant/libraryManager/rulesConstants";

export default function FormRulesLibrary() {
    const rulesList = useSelector(state => state.rulesReducers.rulesList);
const dispatch = useDispatch();
useEffect(() => {

  dispatch({ type: GET_ALL_RULES_SAGA })

}, [])

const renderRule=()=>{
   return rulesList.map((rule,index)=>{
return <p key={index}>-{rule.NoiDung}</p>

    })
}



  return (
    <div>

{renderRule()}



    </div>
  )
}
