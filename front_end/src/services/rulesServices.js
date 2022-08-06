import { baseServices } from "./baseServices";

export class rulesServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllRules = () => {
        return this.get(`/rules/get-list-rules`);
    }
    getRules = (id) => {
        return this.get(`/rules/${id}`);
    }    
    deleteRules = (id) => {
        return this.delete(`/rules/${id}`);
    }    
    updateRules = (id,rulesUpdate) => {
        return this.put(`/rules/${id}`,rulesUpdate);
    }
  
    createRules = (rulesCreate) => {
        return this.post(`/rules/create`,rulesCreate);
    }
   
}


export const RulesServices = new rulesServices();
