import React,{useState,useEffect} from 'react';
import { Table ,Popconfirm} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import {  PAYMENT_SAGA} from "../../../redux/constant/libraryManager/moneyConstants";
import { MoneyCollectOutlined } from '@ant-design/icons'

import {UPDATE_LOGIN} from '../../../redux/constant/libraryManager/loginConstants';

export default function FormViewMoneyDetaild() {
  const dispatch = useDispatch();

  if(localStorage.getItem('id_user')!==null){
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });
    
  }
  const moneyListDetaildByReader = useSelector(state => state.moneyReducers.moneyListDetaildByReader);

console.log('moneyListDetaildByReader',moneyListDetaildByReader);
  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  

const renderTrangThai=(TrangThai,idPhat,idDocGia)=>{
  if(TrangThai===null) {
    return   <>
    <Popconfirm
                    
    title="Are you sure to pay the penalty?"
    onConfirm={() => {
        dispatch({ type: PAYMENT_SAGA, id: idPhat,idDocGia:idDocGia })
    }}

    okText="Yes"
    cancelText="No"
>
    <button className="btn btn-danger">
        <MoneyCollectOutlined style={{ fontSize: 17 ,}} />
    </button>
</Popconfirm>
<span style={{fontStyle:'italic',color:'red',fontSize:'11px',marginLeft:'10px'}}  >Chưa Nộp</span>

    </>
  }
     else {
      return   <span style={{fontStyle:'italic',color:'green',fontSize:'11px',marginLeft:'55px'}}>Đã Nộp</span>
    }
}
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
  
      filteredValue: filteredInfo.Ten || null,
      onFilter: (value, record) => record.Ten.includes(value),
      sorter: (a, b) => a.Ten.length - b.Ten.length,
      sortOrder: sortedInfo.columnKey === 'Ten' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'MaSinhVien',
      dataIndex: 'MaSinhVien',
      key: 'MaSinhVien',
  

    },
    {
      title: 'TienFat',
      dataIndex: 'TienFat',
      key: 'TienFat',
    
    },
    {
      title: 'LyDo',
      dataIndex: 'LyDo',
      key: 'LyDo',
  
     
    },



   
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => {
          return <div>
            
         
         
              
   
             
              
                {renderTrangThai(record.TinhTrang,record.id,record.idDocGia)}           

          </div>
      },
  }
  ];

  return (
    <div  >
    <>

  
        <Table columns={columns}  dataSource={moneyListDetaildByReader} onChange={handleChange} pagination={{ defaultPageSize: 4, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
