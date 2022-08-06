
import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import FormViewComments from '../Form/Comments/FormViewComments';

export default function FormViewBookDetaild() {


    const bookDetaild = useSelector(state => state.bookReducers.bookDetaild);
    const dispatch = useDispatch();


    return (
      <div className="wrapper" style={{marginLeft: '-2px',paddingTop:'0px'}} >
      <>
          <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="box-detaild-img">
                    <img className="img-detaild" src={bookDetaild.AnhSach} alt="sample38" />
                    </div>
                </div>
         
                <div className="col-8">
                    <div className="row">
                    <div className="col-5 infor-detaild"><span >Tên: </span>{bookDetaild.Ten}</div>
                    <div className="col-5 infor-detaild"><span >Tác Gỉa: </span>{bookDetaild.TacGia}</div>
                    <div className="col-5 infor-detaild"><span >Thể Loại: </span>{bookDetaild.TheLoai}</div>
                    <div className="col-5 infor-detaild"><span >Số Lượng Hiện Tại: </span>{bookDetaild.SoLgHienTai}</div>
                    <div className="col-5 infor-detaild"><span >Nhà Xuất Bản: </span>{bookDetaild.NXB}</div>
                    <div className="col-5 infor-detaild"><span >Kệ Sách: </span>{bookDetaild.KeSach}</div>
                    <div className="col-5 infor-detaild"><span >Năm Xuất Bản: </span>{bookDetaild.NamXB}</div>
                    <div className="col-5 infor-detaild"><span >Giá: </span>{bookDetaild.Gia}</div>
                    <div className="col-11 infor-detaild infor-detaild-t"><span >Nội Dung: </span>{bookDetaild.NoiDung}</div>
                    </div>
                    <div className="col-12">
                    <div className="row">
                     
               
           <button className="col-10 infor-detaild btn btn-success" style={{marginLeft:'80px'}}
           
           onClick={() => {
            const action = {
                type: 'OPEN_FORM',
                title:'View Comment by Book',
                widthDrawer:500,
                Component: <FormViewComments/>,
         

            }
            dispatch(action);

         
       

      
        }}
           
           >View Comment</button>

               </div>
             
               </div>
                </div>
       
            </div>
          </div>
        </>
      </div>
    )
}
