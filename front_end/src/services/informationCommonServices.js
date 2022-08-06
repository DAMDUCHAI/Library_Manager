import { baseServices } from "./baseServices";

export class informationCommonServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllInformationCommon = () => {
        return this.get(`/common-information/get-list-common-information`);
    }
    getInformationCommon = (id) => {
        return this.get(`/common-information/${id}`);
    }    
    deleteInformationCommon = (id) => {
        return this.delete(`/common-information/${id}`);
    }    
    updateInformationCommon = (id,informationUpdate) => {
        return this.put(`/common-information/${id}`,informationUpdate);
    }
  
    createInformationCommon = (informationCreate) => {
        return this.post(`/common-information/create`,informationCreate);
    }
   
}


export const InformationCommonServices = new informationCommonServices();
