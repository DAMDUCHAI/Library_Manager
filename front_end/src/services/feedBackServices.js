import { baseServices } from "./baseServices";

export class feedbackServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllFeddBack = (id) => {
        return this.get(`/feedback/get-all-feedback/${id}`);
    }
    getFeddBack = (id) => {
        return this.get(`/feedback/${id}`);
    }    
   
    createFeddBack = (feedbackCreate) => {
        return this.post(`/feedback/create`,feedbackCreate);
    }
    updateFeddBack = (id) => {
        return this.put(`/feedback/${id}`);
    }
}


export const FeedbackServices = new feedbackServices();
