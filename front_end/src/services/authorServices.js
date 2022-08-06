import { baseServices } from "./baseServices";

export class authorServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllAuthor = (name) => {
        return this.get(`/author/get-list-author/?name=${name}`);
    }
    getAuthor = (id) => {
        return this.get(`/author/${id}`);
    }    
    deleteAuthor = (id) => {
        return this.delete(`/author/${id}`);
    }    
    updateAuthor = (id,authorUpdate) => {
        return this.put(`/author/${id}`,authorUpdate);
    }
    createAuthor = (authorCreate) => {
        return this.post(`/author/create`,authorCreate);
    }
   
}


export const AuthorServices = new authorServices();
