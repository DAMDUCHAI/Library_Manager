import { call, put, takeLatest ,delay} from "redux-saga/effects";
import { BookServices } from "../../../services/bookServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_BOOK,GET_ALL_BOOK_SAGA,PREVIEW_GIVE_BOOK_SAGA,GIVE_BOOK_BACK,DELETE_BOOK_SAGA ,GET_ALL_BOOK_BY_FIEUSACH,VIEW_BOOK_CARD_SAGA,VIEW_DETAILD_BOOK_CARD_SAGA,GET_ALL_BOOK_CARD_BY_READER,UPDATE_BOOK_SAGA,CREATE_BOOK_SAGA,CREATE_BOOK_CARD_SAGA,ADD_BOOK_INTO_CARD_SAGA,UPDATE_CODE_CARD,GET_BOOK_SAGA} from "../../constant/libraryManager/bookConstant";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";
import { UPDATE_BOOK_CARD } from "../../constant/libraryManager/bookConstant";
import { history } from "../../../util/history";

function *getListBookSaga(action) { 
    try {
      
            yield put({
                type: DISPLAY_LOADING
            })
            yield delay (500);
        
        yield put({
            type: 'KEY_SEARCH_BOOK',
            keySearch:action.name
        })
        const {data,status} = yield call( () => BookServices.getAllBook(action.name));
  
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_BOOK,
                bookList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListBookSaga() {
    yield takeLatest(GET_ALL_BOOK_SAGA, getListBookSaga);
}


//delete book by id
function *deleteBookSaga(action) { 
    try {
        const { data, status } = yield call(() => BookServices.deleteBook(action.id));
 
        const b = yield call( () => BookServices.getAllBook(action.name));
        yield put({
            type:GET_ALL_BOOK,
            bookList:b.data
        })
        notifiFunction('success','Delete book successfully !')
    }catch(err) {
        if(localStorage.getItem('id_user')===null){
            notifiFunction('warning','You need to login !') ;
            history.push('/login');
            return;   
        }
        console.log(err)
        notifiFunction('error','Delete book fail !');
    }

}

export function* followDeleteBookSaga() {
    yield takeLatest(DELETE_BOOK_SAGA, deleteBookSaga);
}





//UpdateProject
function* updateBookSaga(action) {
    try {


        const { data, status } = yield call(() => BookServices.updateBook(action.idBook,action.bookUpdate));

  
        const b = yield call( () => BookServices.getAllBook(action.name));
        yield put({
            type:GET_ALL_BOOK,
            bookList:b.data
        })
        notifiFunction('success','Update book successfully !')
   
        yield put({
            type:'CLOSE_DRAWER'
        })
 
    } catch (err) {
        if(localStorage.getItem('id_user')===null){
            notifiFunction('warning','You need to login !') ;
            yield put({
                type:'CLOSE_DRAWER'
            })
            history.push('/login');

            return;     
        }
        console.log(err);
        notifiFunction('error','Update book fail !');

    }
   

}


export function* followUpdateBookSaga() {
    yield takeLatest(UPDATE_BOOK_SAGA, updateBookSaga);
}






function* createBookSaga(action) {

    try {

        
        const { data, status } = yield call(() => BookServices.createBook(action.bookCreate));
     

            const b = yield call( () => BookServices.getAllBook(action.name));
            yield put({
                type:GET_ALL_BOOK,
                bookList:b.data
            })
            notifiFunction('success','Add book successfully !')  ;  
            

              
                

        yield put({
            type:'CLOSE_DRAWER'
        })
    } catch (err) {
        if(localStorage.getItem('id_user')===null){
            notifiFunction('warning','You need to login !') ;
            yield put({
                type:'CLOSE_DRAWER'
            })
            history.push('/login');

            return;   
        }
        
        console.log(err);
        notifiFunction('error','Create book  fail !');

    }
   

}

export function* followCreateBookSaga() {
    yield takeLatest(CREATE_BOOK_SAGA, createBookSaga);
}





// CREATE_BOOK_CARD_SAGA

function* createBookCardSaga(action) {
    try {
        const { data } = yield call(() => BookServices.createBookCard(action.bookCardCreate));

        const b = yield call( () => BookServices.getAllBook(action.name));
        yield put({
            type:GET_ALL_BOOK,
            bookList:b.data
        })
        notifiFunction('success','Add book card successfully !, you can add book into card')
 
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield put({
            type:UPDATE_CODE_CARD,
            MaFieuSach:data.id,
            SoLgMuonMax:data.SoLgMuonMax
        })
        yield put({ type: UPDATE_BOOK_CARD ,countBook:0});
    } catch (err) {
        if(localStorage.getItem('id_user')===null){
            notifiFunction('warning','You need to login !') ;
            yield put({
                type:'CLOSE_DRAWER'
            })
            history.push('/login');

            return;   
        }
        console.log(err);
        notifiFunction('error','Create book card fail !');

    }
   

}


export function* followCreateBookCardSaga() {
    yield takeLatest(CREATE_BOOK_CARD_SAGA, createBookCardSaga);
}




function* createBorrowBookSaga(action) {
        try {
            if(action.MaFieuSach===''){
                notifiFunction('warning','You need create card !')
                return;
            }
            let borrowBook={MaSach:action.MaSach,MaFieuSach:action.MaFieuSach}
            let SoLgMuonMax =action.SoLgMuonMax
            let countBook=action.countBook+1
            
            yield put({ type: UPDATE_BOOK_CARD ,countBook:countBook});
        

            if(countBook<=SoLgMuonMax){
                if(countBook>SoLgMuonMax){
                    delay(1500)
                    notifiFunction('warning',`Số lượng mượn sách tối đa là :${SoLgMuonMax}`)
                }
                if(countBook==SoLgMuonMax){

                
                    yield put({
                        type:UPDATE_CODE_CARD,
                        MaFieuSach:'',
                        SoLgMuonMax:''
                    })
                    yield put({ type: UPDATE_BOOK_CARD ,countBook:0});

                }
                const {status,data} = yield call(() => BookServices.createBorowbook(borrowBook));
    
                if (data == 'Không còn sách để mượn') {
                    countBook=countBook-1;
                    yield put({ type: UPDATE_BOOK_CARD ,countBook:countBook});

                    notifiFunction('warning','No more books to borrow !')
                     return;
                }
                console.log('SoLgMuonMax',SoLgMuonMax);
                console.log('countBook',countBook);
                const b = yield call( () => BookServices.getAllBook(action.name));
                yield put({
                    type:GET_ALL_BOOK,
                    bookList:b.data
                })
                notifiFunction('success','Add book into card successfully !')
                return;
            }
        
        } catch (err) {
            if(localStorage.getItem('id_user')===null){
                notifiFunction('warning','You need to login !') ;
                yield put({
                    type:'CLOSE_DRAWER'
                })
                history.push('/login');
    
                return;    
            }
            console.log(err);
            notifiFunction('error','Create borrow book fail !')    

        }
       
    
    }
    
    
    export function* followCreateBorrowBookSaga() {
        yield takeLatest(ADD_BOOK_INTO_CARD_SAGA, createBorrowBookSaga);
    }
    



    function *getBookSaga(action) { 
        try {
            yield put({
                type: DISPLAY_LOADING
            })
            yield delay (500);
    
            const {data,status} = yield call( () => BookServices.getBook(action.idBook));
  
       
         if(status === STATUS_CODE.SUCCESS) {
                yield put({
                    type:'DETAILD_BOOK',
                    bookDetaild:data[0]
                })
            }
            yield put({
                type: HIDE_LOADING
            })
        }catch(err) {
            console.log(err)
        }
    
    }
    
    export function* followGetBookSaga() {
        yield takeLatest(GET_BOOK_SAGA, getBookSaga);
    }
    



    // view book card


    function* viewBookCardSaga(action) {
            try {
                const { data } = yield call(() => BookServices.viewBookCard(action.idReader));
        

                yield put({
                    type:'CLOSE_DRAWER'
                })
                yield put({
                    type:GET_ALL_BOOK_CARD_BY_READER,
                    bookCardByReaderList:data,

                })
              
            } catch (err) {
                console.log(err);
            }
           
        
        }
        
        
        export function* followViewBookCardSaga() {
            yield takeLatest(VIEW_BOOK_CARD_SAGA, viewBookCardSaga);
        }
        


        //view detaild book card saga
        function* viewDetaildBookCardSaga(action) {
            try {
                const { data } = yield call(() => BookServices.viewDetaildBookCard(action.idFieuSach));
        
           
                yield put({
                    type:GET_ALL_BOOK_BY_FIEUSACH,
                    bookByFieuSachList:data,

                })
              
            } catch (err) {
                console.log(err);
            }
           
        
        }
        
        
        export function* followViewDetaildBookCardSaga() {
            yield takeLatest(VIEW_DETAILD_BOOK_CARD_SAGA, viewDetaildBookCardSaga);
        }





        //xu ly tra sach
        function* giveBookBackSaga(action) {
            try {


                const { data,status} = yield call(() => BookServices.giveBookBack(action.idFieuSachChiTiet,{MaTinhTrang:action.TinhTrang}));
                if(status === STATUS_CODE.SUCCESS) {
                    notifiFunction('success',data)
                    const listDetaildBook = yield call(() => BookServices.viewDetaildBookCard(action.idFieuSach));
        
           
                    yield put({
                        type:GET_ALL_BOOK_BY_FIEUSACH,
                        bookByFieuSachList:listDetaildBook.data,
    
                    })
                    yield put({
                        type:'GIVE_BOOK',
                        inforPreview:{
                            HenTra:'',
                            InforGiveBook:'',
                            TienFat:''
                          }

                    })
                }
                yield put({
                    type:'CLOSE_MODAL'
                })
       

            } catch (err) {
                if(localStorage.getItem('id_user')===null){
                    notifiFunction('warning','You need to login !') ;
                    yield put({
                        type:'CLOSE_DRAWER'
                    })
                    history.push('/login');
        
                    return;   
                }
                console.log(err);
                notifiFunction('error','Give book back fail !')    
            }
           
        
        }
        
        
        export function* followGiveBookBackSaga() {
            yield takeLatest(GIVE_BOOK_BACK, giveBookBackSaga);
        }






        function* previewGiveBookSaga(action) {
            try {
  console.log('action.TinhTrang',action.TinhTrang);
  console.log('action.idFieuSachChiTiet',action.idFieuSachChiTiet); 

                const { data ,status} = yield call(() => BookServices.previewGiveBook(action.idFieuSachChiTiet,{MaTinhTrang:action.TinhTrang}));
                if(status === STATUS_CODE.SUCCESS) {
                    yield put({
                        type:'GIVE_BOOK',
                        inforPreview:{
                            HenTra:data.HenTra,
                            InforGiveBook:data.InforGiveBook,
                            TienFat:data.TienFat
                        }

                    })
                    console.log('dataPreview',data);
                }

       

            } catch (err) {
                if(localStorage.getItem('id_user')===null){
                    notifiFunction('warning','You need to login !') ;
                    yield put({
                        type:'CLOSE_DRAWER'
                    })
                    history.push('/login');
        
                    return;   
                }
                console.log(err);
                notifiFunction('error','Give book back fail !')    
            }
           
        
        }
        
        
        export function* followPreviewGiveBookSaga() {
            yield takeLatest(PREVIEW_GIVE_BOOK_SAGA, previewGiveBookSaga);
        }