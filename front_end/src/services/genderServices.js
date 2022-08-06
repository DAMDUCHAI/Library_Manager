import { baseServices } from "./baseServices";

export class genderServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllGender = () => {
        return this.get(`/gender/get-list-gender`);
    }

   
}


export const GenderServices = new genderServices();
