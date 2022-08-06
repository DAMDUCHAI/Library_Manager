import React,{useState,useEffect} from 'react';
import { Table ,Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_READER_SAGA} from "../../redux/constant/libraryManager/readerConstants";
import { GET_ALL_BOOK_BY_READER_SAGA } from "../../redux/constant/libraryManager/borrowConstants";
import { NavLink } from 'react-router-dom'
import {  VIEW_BOOK_CARD_SAGA} from "../../redux/constant/libraryManager/bookConstant";
import {UPDATE_LOGIN} from '../../redux/constant/libraryManager/loginConstants';
import { FormOutlined, EyeOutlined ,BookOutlined ,UnlockOutlined,LockOutlined} from '@ant-design/icons'
import { BAN_ACOUNT_SAGA} from "../../redux/constant/libraryManager/acountConstants";

import FormAddReader from '../Form/Reader/FormAddReader';
import FormEditReader from '../Form/Reader/FormEditReader';
import FormViewBookByReader from '../Modal/FormViewBookByReader';


export default function ReaderComponents() {
  const dispatch = useDispatch();
  const keySearch = useSelector(state => state.readerReducers.keySearch);


  const renderBanAcount=(isStatus,id)=>{
    if(isStatus==='BAN'){
    return <>
      <button className="btn mr-2 btn-success" onClick={() => {
                           dispatch({
                             type:BAN_ACOUNT_SAGA,
                             id:id
                           })
                           dispatch({ type: GET_ALL_READER_SAGA,name:keySearch })

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
                                dispatch({ type: GET_ALL_READER_SAGA ,name:keySearch})

                          }}>
                              <LockOutlined style={{ fontSize: 17 }} />
                          </button></>
    }
    }
  if(localStorage.getItem('id_user')!==null){
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });
    
  }
  const readerList = useSelector(state => state.readerReducers.readerList);

  
  const [keyword, setKeyword] = useState('');
    
  function handleInputChange(e) {
      setKeyword(e.target.value)
      dispatch({ type: GET_ALL_READER_SAGA,
        name:e.target.value })
  }
  
  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '520' });
    dispatch({ type: GET_ALL_READER_SAGA,name:'' })
    
 

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
                            title:'Edit Reader',
                            widthDrawer:'700',
                            Component: <FormEditReader />,
                        }

                        //dispatch lên reducer nội dung drawer
                        dispatch(action);
                        //dispatch dữ liệu dòng hiện tai lên reducer
                        const actionEditReader = {
                            type: 'EDIT_READER',
                            readerEditModel: record
                        }
                        dispatch({
                          type:'IMG_PREVIEW',
                          imgPreview:record.img
                        })
                        dispatch(actionEditReader);
                    }}>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
                    
   {/* xu li xem sach cua doc gia  theo id*/}
                    <button className="btn mr-2 btn-info" onClick={() => {
                        const action = {
                            type: 'OPEN_MODAL',
                            width:850,
                            title:'View book by reader',
                            Component: <FormViewBookByReader />,

                        }
                        dispatch(action);
                   

                        const action1 = {
                            type: GET_ALL_BOOK_BY_READER_SAGA,
                           
                            MaThe:record.MaThe,

                        }
                        dispatch(action1);
                    }}>
                        <EyeOutlined  style={{ fontSize: 17 }} />
                    </button>



{/* xu ly phan tra sach */}


                    <NavLink className="btn mr-2 btn-warning" to="/book-card" onClick={() => {
                        const action = {
                            type: VIEW_BOOK_CARD_SAGA,
                  
                            idReader: record.id,

                        }
                        dispatch(action);
                   



                        
                    }}>
                        <BookOutlined  style={{ fontSize: 17 }} />

           
                    </NavLink>

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
                            title:'Add Reader',
                            widthDrawer:'700',
                            Component: <FormAddReader />,
                        }
                        dispatch(action);
                        dispatch({
                          type:'IMG_PREVIEW',
                          imgPreview:''
                        })
                      
                    }}>
            Thêm Độc Giả
          </Button>

          <form className="navbar-search-v1" style={{position:'absolute',right:'40px',top:'100px'}}>
    <input type="text" name="name" style={{border:'1px solid black'}} value={keyword}
            onChange={handleInputChange} placeholder="Search reader by name..." />
   

  </form>

        <Table columns={columns} style={{marginRight:'20px'}} dataSource={readerList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
