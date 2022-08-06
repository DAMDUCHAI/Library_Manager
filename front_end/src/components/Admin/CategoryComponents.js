

import React,{useState,useEffect} from 'react';
import { Table ,Button,Popconfirm} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_CATEGORY_SAGA, DELETE_CATEGORY_SAGA} from "../../redux/constant/libraryManager/categoryConstants";


import { FormOutlined, DeleteOutlined } from '@ant-design/icons'

import FormAddCategory from '../Form/Category/FormAddCategory';
import FormEditCategory from '../Form/Category/FormEditCategory';
import {UPDATE_LOGIN} from '../../redux/constant/libraryManager/loginConstants';

export default function CategoryComponents() {

  const dispatch = useDispatch(); //dispatch là tương tác với reducers

  if(localStorage.getItem('id_user')!==null){
   
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });  // thay đổi text trong btn login
    
  }


  
  const categoryList = useSelector(state => state.categoryReducers.categoryList);
  const [keyword, setKeyword] = useState('');
    
  function handleInputChange(e) {
      setKeyword(e.target.value)
      dispatch({ type: GET_ALL_CATEGORY_SAGA,
        name:e.target.value })
  }
  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })


  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '320' });  // set cái chiều dài cho cái form =320px

    dispatch({ type: GET_ALL_CATEGORY_SAGA , name:''})  // dispatch để lấy list category dựa vào cái name

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
                            title:'Edit Category',
                            Component: <FormEditCategory />,
                        }

                        //dispatch lên reducer nội dung drawer
                        dispatch(action);
                        //dispatch dữ liệu dòng hiện tai lên reducer
                        const actionEditCategory = {
                            type: 'EDIT_CATEGORY',
                            categoryEditModel: record
                        }
                        dispatch(actionEditCategory);
                    }}>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
                    <Popconfirm
                        title="Are you sure to delete this category?"
                        onConfirm={() => {
                            dispatch({ type: DELETE_CATEGORY_SAGA, id: record.id ,name:keyword})
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

    <Button ghost type="primary" style={{marginBottom:'10px'}}
    onClick={() => {
                        const action = {
                            type: 'OPEN_FORM',
                            title:'Add Category',
                            Component: <FormAddCategory />,
                        }
                        dispatch(action);
                      
                    }}>
            Thêm Category
          </Button>
          <form className="navbar-search-v1" style={{position:'absolute',right:'20px',top:'100px',width:'30%'}}>
    <input type="text" name="name" style={{border:'1px solid black'}} value={keyword}
            onChange={handleInputChange} placeholder="Search category by name..." />
   

  </form>
        <Table columns={columns} style={{marginRight:'20px'}} dataSource={categoryList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
    
      </>
    </div>
  )
}
