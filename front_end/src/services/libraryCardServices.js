import { baseServices } from "./baseServices";

export class libraryCardServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllLibraryCard = () => {
        return this.get(`/library-card/get-list-library-card`);
    }
    getLibraryCard = (id) => {
        return this.get(`/library-card/${id}`);
    }    
    deleteLibraryCard = (id) => {
        return this.delete(`/library-card/${id}`);
    }    
    updateLibraryCard = (id,libraryCardUpdate) => {
        return this.put(`/library-card/${id}`,libraryCardUpdate);
    }
  
    createLibraryCard = (libraryCardCreate) => {
        return this.post(`/library-card/create`,libraryCardCreate);
    }
   
}


export const LibraryCardServices = new libraryCardServices();
