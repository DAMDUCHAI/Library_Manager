import React,{useState,useEffect} from 'react';
import { Table ,Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_STAFF_SAGA} from "../../redux/constant/libraryManager/staffConstants";
import { BAN_ACOUNT_SAGA} from "../../redux/constant/libraryManager/acountConstants";

import {UPDATE_LOGIN} from '../../redux/constant/libraryManager/loginConstants';
import { FormOutlined ,LockOutlined,UnlockOutlined } from '@ant-design/icons'


import FormAddStaff from '../Form/Staff/FormAddStaff';
import FormEditStaff from '../Form/Staff/FormEditStaff';



export default function StaffComponents() {
  const dispatch = useDispatch();
  const keySearch = useSelector(state => state.staffReducers.keySearch);

  const renderBanAcount=(isStatus,id)=>{
    if(isStatus==='BAN'){
    return <>
      <button className="btn mr-2 btn-success" onClick={() => {
                           dispatch({
                             type:BAN_ACOUNT_SAGA,
                             id:id
                           })
                           dispatch({ type: GET_ALL_STAFF_SAGA,name:keySearch })

                          }}>
                              <UnlockOutlined style={{ fontSize: 17 }} />
                          </button>
                          <span style={{color:'red',fontStyle:'italic'}}>Ban</span></>
    }
    else{
    return <>
      <button className="btn mr-2 btn-danger" onClick={() => {
                                 dispatch({
                                  type:BAN_ACOUNT_SAGA,
                                  id:id
                                })
                                dispatch({ type: GET_ALL_STAFF_SAGA,name:keySearch })

                          }}>
                              <LockOutlined style={{ fontSize: 17 }} />
                          </button></>
    }
    }
  if(localStorage.getItem('id_user')!==null){
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });
    
  }
  const staffList = useSelector(state => state.staffReducers.staffList);
  const [keyword, setKeyword] = useState('');
    
  function handleInputChange(e) {
      setKeyword(e.target.value)
      dispatch({ type: GET_ALL_STAFF_SAGA,
        name:e.target.value })
  }
  
  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '520' });

    dispatch({ type: GET_ALL_STAFF_SAGA,name:'' })

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
  
      filteredValue: filteredInfo.Ten || null,
      onFilter: (value, record) => record.Ten.includes(value),
      sorter: (a, b) => a.Ten.length - b.Ten.length,
      sortOrder: sortedInfo.columnKey === 'Ten' && sortedInfo.order,
      ellipsis: true,
    },

    {
      title: 'Img',
      dataIndex: 'img',
      key: 'img',
      render: (text, record, index) => {

        return  <div style={{width:'50px',height:'60px',borderRadius:'3px'}}>
          <img src={text} style={{width:'100%',height:'100%',objectFit:'cover'}} alt=''></img>
        </div>
        }
  
      },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',

    },
    {
      title: 'DiaChi',
      dataIndex: 'DiaChi',
      key: 'DiaChi',

    },
    {
      title: 'GioiTinh',
      dataIndex: 'GioiTinh',
      key: 'GioiTinh',

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
                            type: 'OPEN_FORM',
                            title:'Edit Staff',
                            widthDrawer:'700',
                            Component: <FormEditStaff />,
                        }

                        //dispatch lên reducer nội dung drawer
                        dispatch(action);
                        //dispatch dữ liệu dòng hiện tai lên reducer
                        const actionEditReader = {
                            type: 'EDIT_STAFF',
                            staffEditModel: record
                        }
                        dispatch(actionEditReader);
                        dispatch({
                          type:'IMG_PREVIEW',
                          imgPreview:record.img
                        })
                    }}>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
   
 {renderBanAcount(record.isStatus,record.MaAcount)}
                </ButtonGroups>
            
           

          </div>
      },
  }
  ];

  return (
    <div className="wrapper"  >
    <>

    <Button ghost type="primary" style={{marginBottom:'10px'}}
    onClick={() => {
                        const action = {
                            type: 'OPEN_FORM',
                            title:'Add Staff',
                            widthDrawer:'700',
                            Component: <FormAddStaff />,
                        }
                        dispatch(action);
                        dispatch({
                          type:'IMG_PREVIEW',
                          imgPreview:''
                        })
                      
                    
                      
                    }}>
            Thêm Nhân Viên
          </Button>

          <form className="navbar-search-v1" style={{position:'absolute',right:'40px',top:'100px'}}>
    <input type="text" name="name" style={{border:'1px solid black'}} value={keyword}
            onChange={handleInputChange} placeholder="Search staff by name..." />
   

  </form>

        <Table columns={columns} style={{marginRight:'20px'}} dataSource={staffList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
