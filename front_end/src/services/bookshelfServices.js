import { baseServices } from "./baseServices";

export class bookshelfServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllBookshelf = (name) => {
        return this.get(`/bookshelf/get-list-bookshelf/?name=${name}`);
    }
    getBookshelf = (id) => {
        return this.get(`/bookshelf/${id}`);
    }    
    deleteBookshelf = (id) => {
        return this.delete(`/bookshelf/${id}`);
    }    
    updateBookshelf = (id,bookshelfUpdate) => {
        return this.put(`/bookshelf/${id}`,bookshelfUpdate);
    }
  
    createBookshelf = (bookshelfCreate) => {
        return this.post(`/bookshelf/create`,bookshelfCreate);
    }
   
}


export const BookshelfServices = new bookshelfServices();
