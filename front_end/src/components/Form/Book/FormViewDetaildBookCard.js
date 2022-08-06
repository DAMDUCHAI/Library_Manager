

import React,{useState,useEffect} from 'react';
import { Table ,Button,Popconfirm} from 'antd';
import { useSelector, useDispatch } from 'react-redux'

import {
  BookOutlined

} from '@ant-design/icons';
import FormGiveBackBook from '../../Modal/FormGiveBackBook';





export default function FormViewDetaildBookCard() {
  const bookByFieuSachList = useSelector(state => state.bookReducers.bookByFieuSachList);

  const dispatch = useDispatch();
  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })


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
      title: 'Anh Sach',
      dataIndex: 'AnhSach',
      key: 'AnhSach',  
       render: (text, record, index) => {

        return  <div style={{width:'50px',height:'60px',borderRadius:'3px'}}>
          <img src={text} style={{width:'100%',height:'100%',objectFit:'cover'}} alt=''></img>
        </div>
        }
  
      },

 
  
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => {
        const ButtonGroups = Button.Group;
          return <div>
            <ButtonGroups >
            <button className="btn mr-2 btn-primary" onClick={() => {
                        const action = {
                            type: 'OPEN_MODAL',
                            title:'Give Book Back',
                            Component: <FormGiveBackBook/>,
                        }           
                        dispatch(action);
                   
                
                        const action1 = {
                          type: 'SET_MA_FIEU_SACH',
                          MaFieuSach:record.id,
                  
                      }           
                      dispatch(action1);

                    }}>
                        <BookOutlined style={{ fontSize: 17 }} />
                    </button>
               
                </ButtonGroups>
            
           

          </div>
      },
  }
  ];

  return (
    <div  >
    <>


        <Table columns={columns} style={{marginRight:'20px'}} dataSource={bookByFieuSachList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
