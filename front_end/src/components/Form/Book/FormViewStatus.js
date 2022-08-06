
import React,{useState,useEffect} from 'react';
import { Table ,Button,} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { FormOutlined,  } from '@ant-design/icons'
export default function FormViewStatus() {


    const [state,setState]=useState({
      filteredInfo: null,
      sortedInfo: null,
    })

    const ListBorrowByAcount = useSelector(state => state.borrowBookReducers.ListBorrowByAcount);
    console.log('ListBorrowByAcount :',ListBorrowByAcount);
 
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
        title: 'Ten Sach',
        dataIndex: 'Ten',
        key: 'Ten',
    
        filteredValue: filteredInfo.Ten || null,
        onFilter: (value, record) => record.Ten.includes(value),
        sorter: (a, b) => a.Ten.length - b.Ten.length,
        sortOrder: sortedInfo.columnKey === 'Ten' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Anh Sach',
        dataIndex: 'AnhSach',
        key: 'AnhSach',
      },
      {
        title: 'Tac gia',
        dataIndex: 'TacGia',
        key: 'TacGia',
      },
      {
        title: 'The Loai',
        dataIndex: 'TheLoai',
        key: 'TheLoai',
      },
      {
        title: 'Ngay Muon',
        dataIndex: 'NgayMuon',
        key: 'NgayMuon',
    
      },
      {
        title: 'Hen Tra',
        dataIndex: 'HenTra',
        key: 'HenTra',
    
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
          const ButtonGroups = Button.Group;
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
      <div  >
      <>
          <Table columns={columns}  style={{marginLeft: '-20px',paddingLeft:'0px',}} dataSource={ListBorrowByAcount} onChange={handleChange} pagination={{ defaultPageSize: 3, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
        </>
      </div>
    )
}
