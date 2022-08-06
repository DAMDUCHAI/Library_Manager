import React,{useEffect} from 'react';
import {UPDATE_LOGIN} from '../../redux/constant/libraryManager/loginConstants';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from '@ant-design/charts';
import {  Tag } from 'antd';

export default function DashboardComponents() {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch({ type: 'GET_COUNT_BORROW_BY_MONTH_SAGA'})

    dispatch({ type: 'NUMBER_OF_UNPAID_BOOKS_SAGA'})
    dispatch({ type: 'TOTAL_NUMBER_OF_BOOKS_SAGA'})
    dispatch({ type: 'COUNT_NUMBER_OF_LOST_BOOKS_SAGA'})

    dispatch({ type: 'COUNT_NUMBER_READER_SAGA'})
    dispatch({ type: 'COUNT_BOOK_LATE_SAGA'})
    dispatch({ type: 'COUNT_BOOK_EARLY_SAGA'})

}, [])

const data = useSelector(state => state.borrowBookReducers.ListCountBookByMonth);

const numberOfUnpaidBooks = useSelector(state => state.borrowBookReducers.numberOfUnpaidBooks);
const totalNumberOfBooks = useSelector(state => state.borrowBookReducers.totalNumberOfBooks);
const countNumberOfLostBooks = useSelector(state => state.borrowBookReducers.countNumberOfLostBooks);

const countNumberReader = useSelector(state => state.borrowBookReducers.countNumberReader);
const countBookLate = useSelector(state => state.borrowBookReducers.countBookLate);
const countBookEarly = useSelector(state => state.borrowBookReducers.countBookEarly);


  if(localStorage.getItem('id_user')!==null){
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });
    
  }

const configuraction={
  data,
  height: 200,
  title:{
    visible:true,
    text:'Số lượng sách mượn theo tháng'
  },
  xField:'Thang',
  yField:'SoLuongMuon',
  color:'black',
  point:{
    visible:true,
    size:5,
    shape:'diamond',
    style:{
      fill:'white',
      stroke:'black',
      lineWidth:2
    }
  }
}



  return (
    <div className="wrapper"><span style={{marginLeft:'37%'}}>Số Sách Đã Mượn Theo Tháng Trong Năm 2022</span>

    <Line {...configuraction}/>
   <div style={{marginLeft:'30px',marginTop:'20px'}}>
   <Tag color="geekblue" 
   style={{width:'30%',height:'80px',marginBottom:'20px',padding:'5px 5px',fontSize:'15px',position:'relative'}}>Số độc giả
  <span style={{fontSize:'30px',position:'absolute',top:'35px',left:'40px'}}> {countNumberReader}</span>
</Tag>
   <Tag color="purple" style={{width:'30%',height:'80px',marginBottom:'20px',padding:'5px 5px',fontSize:'15px',position:'relative'}}>Tổng Số Sách  <span style={{fontSize:'30px',position:'absolute',top:'35px',left:'40px'}}>{numberOfUnpaidBooks} </span></Tag>
   <Tag color="magenta" style={{width:'30%',height:'80px',marginBottom:'20px',padding:'5px 5px',fontSize:'15px',position:'relative'}}>Tổng Số Sách Trong Thư Viện  <span style={{fontSize:'30px',position:'absolute',top:'35px',left:'40px'}}>{totalNumberOfBooks}</span></Tag>
   <Tag color="volcano" style={{width:'30%',height:'80px',marginBottom:'20px',padding:'5px 5px',fontSize:'15px',position:'relative'}}>Số sách làm mất<span style={{fontSize:'30px',position:'absolute',top:'35px',left:'40px'}}>{countNumberOfLostBooks} </span></Tag>
   <Tag color="orange" style={{width:'30%',height:'80px',marginBottom:'20px',padding:'5px 5px',fontSize:'15px',position:'relative'}}>Số sách trả muộn  <span style={{fontSize:'30px',position:'absolute',top:'35px',left:'40px'}}>{countBookLate} </span></Tag>
   <Tag color="cyan" style={{width:'30%',height:'80px',marginBottom:'20px',padding:'5px 5px',fontSize:'15px',position:'relative'}}>Số sách trả sớm  <span style={{fontSize:'30px',position:'absolute',top:'35px',left:'40px'}}>{countBookEarly}</span></Tag>
   </div>
    </div>
   
  )
}
