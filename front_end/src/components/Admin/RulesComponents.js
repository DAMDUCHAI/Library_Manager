

import React,{useState,useEffect} from 'react';
import { Table ,Button,Popconfirm} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_RULES_SAGA, DELETE_RULES_SAGA} from "../../redux/constant/libraryManager/rulesConstants";
import {UPDATE_LOGIN} from '../../redux/constant/libraryManager/loginConstants';

import { FormOutlined, DeleteOutlined } from '@ant-design/icons'

import FormAddRules from '../Form/Rules/FormAddRules';
import FormEditRules from '../Form/Rules/FormEditRules';


export default function RulesComponents() {
  const dispatch = useDispatch();

  if(localStorage.getItem('id_user')!==null){
    dispatch({ type: UPDATE_LOGIN, text: 'LOGOUT' });
    
  }
  const rulesList = useSelector(state => state.rulesReducers.rulesList);

  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  useEffect(() => {

    dispatch({ type: GET_ALL_RULES_SAGA })

}, [])

const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };


  let { sortedInfo, filteredInfo } = state;

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',


  },
    {
      title: 'NoiDung',
      dataIndex: 'NoiDung',
      key: 'NoiDung',
  
    
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
                            title:'Edit Rules',
                            Component: <FormEditRules />,
                        }

                        //dispatch lên reducer nội dung drawer
                        dispatch(action);
                        //dispatch dữ liệu dòng hiện tai lên reducer
                        const actionEditRules = {
                            type: 'EDIT_RULES',
                            rulesEditModel: record
                        }
                        dispatch(actionEditRules);
                    }}>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>


                    
                    <Popconfirm
                        title="Are you sure to delete this rules?"
                        onConfirm={() => {
                            dispatch({ type: DELETE_RULES_SAGA, id: record.id })
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
                            title:'Add Rules',
                            Component: <FormAddRules />,
                        }
                        dispatch(action);
                      
                    }}>
            Thêm Rules
          </Button>
        <Table columns={columns} style={{marginRight:'20px'}} dataSource={rulesList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
