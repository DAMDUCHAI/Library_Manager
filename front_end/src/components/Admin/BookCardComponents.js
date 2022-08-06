import React,{useState,useEffect} from 'react';
import { Table ,Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { VIEW_DETAILD_BOOK_CARD_SAGA} from "../../redux/constant/libraryManager/bookConstant";
import { FormOutlined,} from '@ant-design/icons'
import {UPDATE_LOGIN} from '../../redux/constant/libraryManager/loginConstants';
import FormViewDetaildBookCard from '../Form/Book/FormViewDetaildBookCard';
import { NavLink } from 'react-router-dom'



export default function BookCardComponents() {

  const formatDate=(str)=>{
 
    const event = new Date(str);
    return event.toLocaleString('en-GB', { timeZone: 'UTC' });
    }
  const dispatch = useDispatch();
  if(localStorage.getItem('id_user')!==null){
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });
    
  }
  const  bookCardByReaderList= useSelector(state => state.bookReducers.bookCardByReaderList);


  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  
  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '820' });



}, [])

const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };




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
    title: 'NgayMuon',
    dataIndex: 'NgayMuon',
    key: 'NgayMuon',  
     render: (text, record, index) => {
        return  formatDate(record.NgayMuon)
  
      }
      }

    ,


  
    {
      title: 'HenTra',
      dataIndex: 'HenTra',
      key: 'HenTra',
      
     render: (text, record, index) => {
        return  formatDate(record.HenTra)
  
      }
  
      
    },

    {
      title: 'SoLgMuonMax',
      dataIndex: 'SoLgMuonMax',
      key: 'SoLgMuonMax',
    
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
                            title:'Form View Detaild Book Card',
                            Component: <FormViewDetaildBookCard/>,
                        }

                        dispatch(action);

                        dispatch({ type: 'SET_WIDTH', widthDrawer: '920' });

   
                  const action123 = {
                  type: VIEW_DETAILD_BOOK_CARD_SAGA,
                   idFieuSach: record.id
                      }
                   dispatch(action123);

                   const action1234 = {
                    type: 'SET_MA_FIEU_SACH_FOR_VIEW_DETAILD_CARD',
                    MaFieuSachForViewDetaildCard: record.id
                        }
                     dispatch(action1234);

                        
                        

                    }}>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
             
                </ButtonGroups>
            
           

          </div>
      },
  }
  ];

  return (
    <div className="wrapper" >
    <>


        <Table columns={columns} style={{marginRight:'20px'}} dataSource={bookCardByReaderList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
        <NavLink style={{fontSize:'10px',marginTop:'10px',marginLeft:'10px'}}  className="btn btn-primary"  to='/reader-manager'
     >Back</NavLink>
      </>
    </div>
  )
}
