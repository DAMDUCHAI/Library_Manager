import { baseServices } from "./baseServices";

export class dashboardServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    numberOfUnpaidBooks = () => {
        return this.get(`/dashboard/numberOfUnpaidBooks`);
    }
   
    totalNumberOfBooks = () => {
        return this.get(`/dashboard/totalNumberOfBooks`);
    }
    countNumberOfLostBooks = () => {
        return this.get(`/dashboard/countNumberOfLostBooks`);
    }
    countNumberReader = () => {
        return this.get(`/dashboard/countNumberReader`);
    }
    countBookLate = () => {
        return this.get(`/dashboard/countBookLate`);
    }
    countBookEarly = () => {
        return this.get(`/dashboard/countBookEarly`);
    }
}


export const DashboardServices = new dashboardServices();
