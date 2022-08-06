import { baseServices } from "./baseServices";

export class moneyServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllMoney = (name) => {
        return this.get(`/money/get-list-money/?name=${name}`);
    }
    payment = (id) => {
        return this.put(`/money/payment/${id}`);
    }
    getListMoneyDetaildByReader = (id) => {
        return this.get(`/money/get-list-money-by-reader/${id}`);
    }
}


export const MoneyServices = new moneyServices();
