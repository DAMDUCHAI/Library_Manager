import React,{useState,useEffect} from 'react';
import { Table ,Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import {GET_ALL_FEEDBACK_SAGA,UPDATE_TRANGTHAI_FEEDBACK_SAGA} from "../../redux/constant/libraryManager/feedBackConstants";
import FormViewFeebackDetaild from '../Modal/FormViewFeebackDetaild';
import {UPDATE_LOGIN} from '../../redux/constant/libraryManager/loginConstants';

const renderTrangThai=(TrangThai)=>{
    if(TrangThai===0) {
      return   <span style={{fontStyle:'italic',color:'red',fontSize:'11px'}}  >Chưa Xem</span>
      }
       else {
        return   <span style={{fontStyle:'italic',color:'green',fontSize:'11px'}}>Đã Xem</span>
      }
}




export default function FeedbackComponents() {
  const dispatch = useDispatch();  
   //return về một tham chiếu đến 
  //dispatch function từ Redux store và được sử dụng để dispatch các action


  if(localStorage.getItem('id_user')!==null){
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });
  }


  const feedbackList = useSelector(state => state.feedbackReducers.feedbackList); 
  const typeFilter = useSelector(state => state.feedbackReducers.typeFilter);

  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  useEffect(() => {
  

    dispatch({ type:GET_ALL_FEEDBACK_SAGA ,typeFilter:2})

}, [])

const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };


  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      sorter: (item2, item1) => {
          return item2.id - item1.id;
      },
      sortDirections: ['descend'],

  },
    {
      title: 'Ten',
      dataIndex: 'Ten',
      key: 'Ten',
  
   
    },

    {
      title: 'MaSinhVien',
      dataIndex: 'MaSinhVien',
      key: 'MaSinhVien',

    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',

    },
    {
      title: 'TieuDe',
      dataIndex: 'TieuDe',
      key: 'TieuDe',

    },
    {
      title: 'NoiDung',
      dataIndex: 'NoiDung',
      key: 'NoiDung',

    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => {
        const ButtonGroups = Button.Group;
          return <div>
            <ButtonGroups >
                <button type="button" className="btn btn-info" style={{marginRight:'10px',fontSize:'10px'}} onClick={()=>{
  const action = {
    type: 'OPEN_MODAL',
    title:'View Detaild',
    Component: <FormViewFeebackDetaild />,

}
dispatch(action)


dispatch({ 
    type:UPDATE_TRANGTHAI_FEEDBACK_SAGA,id:record.id,
    typeFilter:typeFilter
})
                       
              
                }} >View</button>

                
{
      renderTrangThai(record.TrangThai)
       

}     
                </ButtonGroups>
          </div>
      },
  }
  ];

  return (
    <div className="wrapper" >
    <>
<div className="btn-group" role="group" aria-label="Basic example" style={{marginBottom:'20px'}} >
<button type="button" style={{fontSize:'10px'}} 
  onClick={()=>{
    dispatch({ type:GET_ALL_FEEDBACK_SAGA ,typeFilter:2})
  }}
  className="btn btn-primary">Tất cả</button>

  <button type="button" style={{fontSize:'10px'}} 
  onClick={()=>{
    dispatch({ type:GET_ALL_FEEDBACK_SAGA ,typeFilter:1})
  }}
  className="btn btn-success">Đã xem</button>
  <button type="button" style={{fontSize:'10px'}} 
  
  onClick={()=>{
    dispatch({ type:GET_ALL_FEEDBACK_SAGA ,typeFilter:0})
  }}
  className="btn btn-danger">Chưa xem</button>
</div>

    
        <Table columns={columns} style={{marginRight:'20px'}} dataSource={feedbackList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
