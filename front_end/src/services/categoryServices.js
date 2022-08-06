import { baseServices } from "./baseServices";

export class categoryServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllCategory = (name) => {
        return this.get(`/category/get-list-category/?name=${name}`);
    }

    getCategory = (id) => {
        return this.get(`/category/${id}`);
    }    
    deleteCategory = (id) => {
        return this.delete(`/category/${id}`);
    }    

    
    updateCategory = (id,categoryUpdate) => {
        return this.put(`/category/${id}`,categoryUpdate);
    }
  
    createCategory = (categoryCreate) => {
        return this.post(`/category/create`,categoryCreate);
    }
   
}


export const CategoryServices = new categoryServices();
