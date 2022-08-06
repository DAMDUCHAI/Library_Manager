import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect } from "react-redux";

import { GIVE_BOOK_BACK,PREVIEW_GIVE_BOOK_SAGA} from "../../redux/constant/libraryManager/bookConstant";
const FormGiveBackBook = (props) => {

    const  inforPreview= useSelector(state => state.giveBookBackReducers.inforPreview);
    const  MaFieuSach= useSelector(state => state.bookReducers.MaFieuSach);

   

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type:PREVIEW_GIVE_BOOK_SAGA,
            idFieuSachChiTiet:MaFieuSach,
            TinhTrang:2
          })
        //Load sự kiện submit lên drawer nút submit
        dispatch({ type: 'SET_SUBMIT_MODAL', submitFunction: handleSubmit });
    }, [])
    const {
        values,
        
        handleSubmit,
        setFieldValue
     
    } = props;

    return (

        <>
            <form onSubmit={handleSubmit}>

                <div className="row">
        
                    <div className="col-6">
                        <label for="" className="form-label">Nghiệp Vụ</label>
                        <select className="form-control" name="MaTinhTrang" value={values.MaTinhTrang} onChange={(event) => {

  setFieldValue("MaTinhTrang", event.target.value);
  dispatch({
    type:PREVIEW_GIVE_BOOK_SAGA,
    idFieuSachChiTiet:MaFieuSach,
    TinhTrang:event.target.value
  })

}}>

                            <option value="2"  selected>
                            Trả Sách
                              
                            </option>
                            <option value="3">
                            Làm Mất
                            </option>
                        </select>
                        

                    </div>
                    <div className="col-6">
             <p style={{color:'red'}}>Hẹn Trả :{inforPreview.HenTra}</p>
                        <p>{inforPreview.InforGiveBook}</p>
                        
                        <p>Tiền phạt : {inforPreview.TienFat} VND</p>
                      
                        
                    </div>
                </div>

            </form>


        </>
    )
}


const GiveBackBookWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return {  MaTinhTrang: '2' }
    },



    // Custom sync validation
    validationSchema: Yup.object().shape({


    }),

    handleSubmit: (values, { setSubmitting, props }) => {

        props.dispatch({
            type: GIVE_BOOK_BACK,
        idFieuSachChiTiet:props.MaFieuSach,
        TinhTrang:values.MaTinhTrang,
        idFieuSach:props.MaFieuSachForViewDetaildCard

        })
    },


    displayName: "FormGiveBackBook",
})(FormGiveBackBook);


const mapStateToProps = (state) => ({


    MaFieuSach:state.bookReducers.MaFieuSach,
    MaFieuSachForViewDetaildCard:state.bookReducers.MaFieuSachForViewDetaildCard,
  })

export default connect(mapStateToProps)(GiveBackBookWithFormik);