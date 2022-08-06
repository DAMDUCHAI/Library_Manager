import { baseServices } from "./baseServices";
export class bookServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllBook = (name) => {
        return this.get(`/book/get-list-book?name=${name}`);
    }
    getBook = (id) => {
        return this.get(`/book/${id}`);
    }    
    deleteBook = (id) => {
        return this.delete(`/book/${id}`);
    }    
    updateBook = (id,bookUpdate) => {
        return this.put(`/book/${id}`,bookUpdate);
        
    }

    createBook = (bookCreate) => {
        return this.post(`/book/create`,bookCreate);

   
}

createBookCard= (bookCardCreate) =>{
    return this.post(`/book/create-borrow-books`,bookCardCreate);


}

viewBookCard= (id) =>{
    return this.get(`/book/view-book-card/${id}`);


}
viewDetaildBookCard= (id) =>{
    return this.get(`/book/view-detaild-book-card/${id}`);


}
createBorowbook= (bookBorrowCreate) =>{
    return this.post(`/book/create-borrow-detaild`,bookBorrowCreate);


}
giveBookBack= (id,TinhTrang) =>{
    return this.put(`/book/give-book-back/${id}`,TinhTrang);


}
previewGiveBook= (id,TinhTrang) =>{
    return this.put(`/book/preview-give-book/${id}`,TinhTrang);


}

}




export const BookServices = new bookServices();
