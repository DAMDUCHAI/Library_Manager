import { baseServices } from "./baseServices";

export class readerServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllReader = (name) => {
        return this.get(`/reader/get-list-reader/?name=${name}`);
    }
    getReader = (id) => {
        return this.get(`/reader/${id}`);
    }    
    deleteReader = (id) => {
        return this.delete(`/reader/${id}`);
    }    
    updateReader = (id,readerUpdate) => {
        return this.put(`/reader/${id}`,readerUpdate);
    }


    createReader = (readerCreate) => {
        return this.post(`/reader/create`,readerCreate);
    }
   
}


export const ReaderServices = new readerServices();
