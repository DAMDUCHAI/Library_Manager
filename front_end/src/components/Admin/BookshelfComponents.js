

import React,{useState,useEffect} from 'react';
import { Table ,Button,Popconfirm} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_BOOKSHELF_SAGA, DELETE_BOOKSHELF_SAGA} from "../../redux/constant/libraryManager/bookshelfConstants";


import { FormOutlined, DeleteOutlined } from '@ant-design/icons'

import FormAddBookshelf from '../Form/Bookshelf/FormAddBookshelf';
import FormEditBookshelf from '../Form/Bookshelf/FormEditBookshelf';
import {UPDATE_LOGIN} from '../../redux/constant/libraryManager/loginConstants';

export default function BookshelfComponents() {
  const dispatch = useDispatch();
  if(localStorage.getItem('id_user')!==null){
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });
    
  }
  const bookshelfList = useSelector(state => state.bookshelfReducers.bookshelfList);
  const [keyword, setKeyword] = useState('');
    
  function handleInputChange(e) {
      setKeyword(e.target.value)
      dispatch({ type: GET_ALL_BOOKSHELF_SAGA,
        name:e.target.value })
  }
  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '320' });

    dispatch({ type: GET_ALL_BOOKSHELF_SAGA ,name:''})

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
                            title:'Edit Bookshelf',
                            Component: <FormEditBookshelf />,
                        }

                        //dispatch lên reducer nội dung drawer
                        dispatch(action);
                        //dispatch dữ liệu dòng hiện tai lên reducer
                        const actionEditBookshelf = {
                            type: 'EDIT_BOOKSHELF',
                            bookshelfEditModel: record
                        }
                        dispatch(actionEditBookshelf);
                    }}>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
                    <Popconfirm
                        title="Are you sure to delete this bookshelf?"
                        onConfirm={() => {
                            dispatch({ type: DELETE_BOOKSHELF_SAGA, id: record.id ,name:keyword})
                        }}

                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="btn btn-danger">
                            <DeleteOutlined style={{ fontSize: 17 }} />
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
                            title:'Add Bookshelf',
                            Component: <FormAddBookshelf />,
                        }
                        dispatch(action);
                      
                    }}>
            Thêm Bookshelf
          </Button>

          <form className="navbar-search-v1" style={{position:'absolute',right:'40px'}}>
    <input type="text" name="Search" style={{border:'1px solid black'}} value={keyword}
            onChange={handleInputChange} placeholder="Search bookshelf by name..." />
   
    <i className="fas fa-search" />
  </form>
</div>

        <Table columns={columns} style={{marginRight:'20px'}} dataSource={bookshelfList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
