import React,{useState,useEffect} from 'react';
import { Table ,} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_MONEY_SAGA,GET_ALL_MONEY_DETAILD_BY_READER_SAGA} from "../../redux/constant/libraryManager/moneyConstants";
import { EyeOutlined } from '@ant-design/icons'

import {UPDATE_LOGIN} from '../../redux/constant/libraryManager/loginConstants';
import FormViewMoneyDetaild from '../Form/Money/FormViewMoneyDetaild';

export default function MoneyComponents() {
  const dispatch = useDispatch();

  if(localStorage.getItem('id_user')!==null){
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });
    
  }
  const moneyList = useSelector(state => state.moneyReducers.moneyList);
  const [keyword, setKeyword] = useState('');
    
  function handleInputChange(e) {
      setKeyword(e.target.value)
      dispatch({ type: GET_ALL_MONEY_SAGA,
        name:e.target.value })
  }

  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  
  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '820' });

    dispatch({ type: GET_ALL_MONEY_SAGA ,name:''})

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
      title: 'img',
      dataIndex: 'img',
      key: 'img',
      render: (text, record, index) => {

      return  <div style={{width:'50px',height:'60px',borderRadius:'3px'}}>
        <img src={text} style={{width:'100%',height:'100%',objectFit:'cover'}} alt=''></img>
      </div>
      }
    
    },
    {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'Phone',
  
     
    },
    {
      title: 'TongTien',
      dataIndex: 'TongTien',
      key: 'TongTien',
  
     
    },


   
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => {
          return <div>
            
            <button className="btn mr-2 btn-info" onClick={() => {
                          const action = {
                            type: 'OPEN_FORM',
                            widthDrawer:900,
                            title:'View Money Detaild',
                            Component: <FormViewMoneyDetaild />,

                        }
                        dispatch(action);

                        dispatch ({
                          type: GET_ALL_MONEY_DETAILD_BY_READER_SAGA,
                          id:record.id,
                        

                      }
               )


                    }}>
                        <EyeOutlined  style={{ fontSize: 17 }} />
                    </button>
         
              
   
             
              

          </div>
      },
  }
  ];

  return (
    <div className="wrapper" >
    <>
    <form className="navbar-search-v1" style={{width:'30%',margin:'10px 0'}}>
    <input type="text" name="name" style={{border:'1px solid black'}} value={keyword}
            onChange={handleInputChange} placeholder="Search reader by name..." />
   

  </form>
  
        <Table columns={columns} style={{marginRight:'20px'}} dataSource={moneyList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
