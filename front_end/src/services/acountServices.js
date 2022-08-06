import { baseServices } from "./baseServices";

export class acountServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllAcount = () => {
        return this.get(`/acount/get-list-acount`);
    }
    getAcount = (id) => {
        return this.get(`/acount/${id}`);
    }    
    deleteAcount = (id) => {
        return this.delete(`/acount/${id}`);
    }    
    updateAcount = (id,acountUpdate) => {
        return this.put(`/acount/${id}`,acountUpdate);
    }
  
    createAcount = (acountCreate) => {
        return this.post(`/acount/create/user`,acountCreate);
    }
    createAcountAdmin = (acountCreate) => {
        return this.post(`/acount/create/admin`,acountCreate);
    }

    loginAcount = (loginCreate) => {
        return this.post(`/acount/login`,loginCreate);
    }
    
    changePass = (id,changePassCreate) => {
        return this.put(`/acount/change-pass/${id}`,changePassCreate);
    }
    getNameUser = (id) => {
        return this.get(`/acount/get-name-user/${id}/admin`);
    }
    banAcount = (id) => {
        return this.put(`/acount/ban/${id}`);
    }
  
}


export const AcountServices = new acountServices();
