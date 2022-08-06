import { baseServices } from "./baseServices";

export class commentServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllComment = (MaSach) => {
        return this.get(`/comment/get-list-comment/${MaSach}`);
    }
    getComment = (id) => {
        return this.get(`/comment/${id}`);
    }    
    deleteComment = (id) => {
        return this.delete(`/comment/${id}`);
    }    
    updateComment = (id,commentUpdate) => {
        return this.put(`/comment/${id}`,commentUpdate);
    }

  
    createComment = (commentCreate) => {
        return this.post(`/comment/create`,commentCreate);
    }
   
}


export const CommentServices = new commentServices();
