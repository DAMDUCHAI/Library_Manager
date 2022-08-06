import { baseServices } from "./baseServices";

export class validateServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getListMaSinhVien = () => {
        return this.get(`/validate/get-list-masinhvien`);
    }
    
    getListPhone = () => {
        return this.get(`/validate/get-list-phone`);
    }
    getLisCCCD = () => {
        return this.get(`/validate/get-list-cccd`);
    }
    getListEmail = () => {
        return this.get(`/validate/get-list-email`);
    }
}


export const ValidateServices = new validateServices();
