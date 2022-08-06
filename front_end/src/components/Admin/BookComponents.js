import React,{useState,useEffect} from 'react';
import { Table ,Button,Popconfirm} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_BOOK_SAGA, DELETE_BOOK_SAGA,ADD_BOOK_INTO_CARD_SAGA} from "../../redux/constant/libraryManager/bookConstant";
import { FormOutlined, DeleteOutlined ,BookOutlined } from '@ant-design/icons'
import FormEditBook from '../Form/Book/FormEditBook';
import FormAddBook from '../Form/Book/FormAddBook';
import FormAddBookCard from '../Form/Book/FormAddBookCard';
import {UPDATE_LOGIN} from '../../redux/constant/libraryManager/loginConstants';
import {GET_NAME_USER_SAGA} from '../../redux/constant/libraryManager/acountConstants';


export default function BookComponents() {
  const dispatch = useDispatch();


  if(localStorage.getItem('id_user')!==null){
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });
    
  }
  const bookList = useSelector(state => state.bookReducers.bookList);

  const MaFieuSach = useSelector(state => state.borrowBookReducers.MaFieuSach);
  const countBook = useSelector(state => state.borrowBookReducers.countBook);
  const  SoLgMuonMax= useSelector(state => state.borrowBookReducers.SoLgMuonMax);

  const [keyword, setKeyword] = useState('');
    
  function handleInputChange(e) {
      setKeyword(e.target.value)
      dispatch({ type: GET_ALL_BOOK_SAGA,
        name:e.target.value })
  }

  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  
  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '820' });
    dispatch({ type: GET_NAME_USER_SAGA });
    
    dispatch({ type: GET_ALL_BOOK_SAGA,
      name:'' })

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
      title: 'AnhSach',
      dataIndex: 'AnhSach',
      key: 'x',
      render: (text, record, index) => {

      return  <div style={{width:'50px',height:'60px',borderRadius:'3px'}}>
        <img src={text} style={{width:'100%',height:'100%',objectFit:'cover'}} alt=''></img>
      </div>
      }

    },
    {
      title: 'TacGia',
      dataIndex: 'TacGia',
      key: 'TacGia',
    
    },
    {
      title: 'TheLoai',
      dataIndex: 'TheLoai',
      key: 'TheLoai',
  
      filteredValue: filteredInfo.TheLoai || null,
      onFilter: (value, record) => record.TheLoai.includes(value),
      sorter: (a, b) => a.TheLoai.length - b.TheLoai.length,
      sortOrder: sortedInfo.columnKey === 'TheLoai' && sortedInfo.order,
      ellipsis: true,
    },



    {
      title: 'SoLgHienTai',
      dataIndex: 'SoLgHienTai',
      key: 'SoLgHienTai',
      sorter: (a, b) => a.SoLgHienTai - b.SoLgHienTai,
      sortOrder: sortedInfo.columnKey === 'SoLgHienTai' && sortedInfo.order,
      ellipsis: true,

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
                            title:'Edit Book',
                            Component: <FormEditBook />,
                        }

                        //dispatch lên reducer nội dung drawer
                        dispatch(action);

                        //dispatch dữ liệu dòng hiện tai lên reducer
                        const actionEditBook = {
                            type: 'EDIT_BOOK',
                            bookEditModel: record
                        }
                        dispatch(actionEditBook);
                        dispatch({
                          type:'IMG_PREVIEW',
                          imgPreview:record.AnhSach
                        })
                        dispatch({ type: 'SET_WIDTH', widthDrawer: '820' });

                    }}>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>

                    <Popconfirm
                    
                        title="Are you sure to delete this book?"
                        onConfirm={() => {
                            dispatch({ type: DELETE_BOOK_SAGA, id: record.id,name:keyword })
                        }}

                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="btn btn-danger">
                            <DeleteOutlined style={{ fontSize: 17 ,}} />
                        </button>
                    </Popconfirm>


   {/* xử lý mượn sách */}

   <Popconfirm
                        title="Are you sure add book into book card?"
                        onConfirm={() => {
                    
                            dispatch({ type: ADD_BOOK_INTO_CARD_SAGA, MaSach: record.id ,countBook:countBook,MaFieuSach: MaFieuSach,SoLgMuonMax:SoLgMuonMax,name:keyword});
                        }}

                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="btn btn-info" style={{ marginLeft: '7px' }}>
                            <BookOutlined  style={{ fontSize: 17 }} />
                        </button>
                    </Popconfirm>

   
             
                </ButtonGroups>
            
           

          </div>
      },
  }
  ];
  return (
    <div className="wrapper" >
    <>
 <div className='d-flex' style={{position:'relative'}}>
 <Button ghost type="primary" style={{marginBottom:'10px'}}
    onClick={() => {
                        const action = {
                            type: 'OPEN_FORM',
                            title:'Add Book',
                            Component: <FormAddBook />,
                        }
                        dispatch(action);
                        
                        dispatch({
                          type:'IMG_PREVIEW',
                          imgPreview:''
                        })
                        dispatch({ type: 'SET_WIDTH', widthDrawer: '820' });

                    }}>
            Thêm sách
          </Button>

{/* button fieu tao sach */}
          <Button ghost type="primary" style={{marginBottom:'10px',marginLeft:'10px'}}
    onClick={() => {
                        const action = {
                            type: 'OPEN_FORM',
                            title:'Create Book Card',
                            Component: <FormAddBookCard />,
                        }
                        dispatch(action);
                      
                        dispatch({ type: 'SET_WIDTH', widthDrawer: '320' });


                    }}>
            Tạo phiếu sách
          </Button>
          <form className="navbar-search-v1" style={{position:'absolute',right:'20px'}}>
    <input type="text" name="name" style={{border:'1px solid black'}} value={keyword}
            onChange={handleInputChange} placeholder="Search book book name..." />
   

  </form>
 </div>

        <Table columns={columns} style={{marginRight:'20px'}} dataSource={bookList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
