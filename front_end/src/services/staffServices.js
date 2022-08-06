import { baseServices } from "./baseServices";

export class staffServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllStaff = (name) => {
        return this.get(`/staff/get-list-staff/?name=${name}`);
    }
    getStaff = (id) => {
        return this.get(`/staff/${id}`);
    }    
    deleteStaff = (id) => {
        return this.delete(`/staff/${id}`);
    }    
    updateStaff = (id,staffUpdate) => {
        return this.put(`/staff/${id}`,staffUpdate);
    }


    createStaff = (staffCreate) => {
        return this.post(`/staff/create`,staffCreate);
    }
   
}


export const StaffServices = new staffServices();
