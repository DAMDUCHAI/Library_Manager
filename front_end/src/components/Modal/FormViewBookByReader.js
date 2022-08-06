
import React,{useState,useEffect} from 'react';
import { Table ,Button,} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { FormOutlined,  } from '@ant-design/icons'
export default function FormViewBookByReader() {
  const formatDate=(str)=>{
 
    const event = new Date(str);
    return event.toLocaleString('en-GB', { timeZone: 'UTC' });
    }

    const [state,setState]=useState({
      filteredInfo: null,
      sortedInfo: null,
    })

    const ListBookByReader = useSelector(state => state.borrowBookReducers.ListBookByReader);
    console.log('ListBookByReader :',ListBookByReader);
 
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
        title: 'NgayMuon',
        dataIndex: 'NgayMuon',
        key: 'NgayMuon',
        
     render: (text, record, index) => {
        return  formatDate(record.NgayMuon)
  
      }
    
  
    },
      {
        title: 'Ten Sach',
        dataIndex: 'TenSach',
        key: 'TenSach',
    
        filteredValue: filteredInfo.Ten || null,
        onFilter: (value, record) => record.Ten.includes(value),
        sorter: (a, b) => a.Ten.length - b.Ten.length,
        sortOrder: sortedInfo.columnKey === 'Ten' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Tac gia',
        dataIndex: 'TacGia',
        key: 'TacGia',
      },

      {
        title: 'Hen Tra',
        dataIndex: 'HenTra',
        key: 'HenTra',
        
        render: (text, record, index) => {
           return  formatDate(record.HenTra)
     
         }
      },

      {
        title: 'Tinh Trang',
        dataIndex: 'TinhTrang',
        key: 'TinhTrang',
    
      },
      
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text, record, index) => {
            return <div>
         
              <button className="btn mr-2 btn-primary" onClick={() => {
                         
                      }}>
                          <FormOutlined style={{ fontSize: 17 }} />
                      </button>
                    
                 
              
             
  
            </div>
        },
    }
    ];
  
    return (
      <div className="wrapper" style={{marginLeft: '-2px',paddingTop:'0px'}} >
      <>
          <Table columns={columns} style={{marginRight:'20px'}} dataSource={ListBookByReader} onChange={handleChange} pagination={{ defaultPageSize: 3, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
        </>
      </div>
    )
}
