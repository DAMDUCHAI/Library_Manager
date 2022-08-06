import { call, put, takeLatest } from "redux-saga/effects";
import { DashboardServices } from "../../../services/dashboardServices";


function* getNumberOfUnpaidBooks(action) {

    try {

        const { data } = yield call(() => DashboardServices.numberOfUnpaidBooks());


        yield put({
            type: 'NUMBER_OF_UNPAID_BOOKS',
            numberOfUnpaidBooks: data[0].numberOfUnpaidBooks
        })

        

    } catch (err) {
        console.log(err)
    }

}

export function* followGetNumberOfUnpaidBooks() {
    yield takeLatest('NUMBER_OF_UNPAID_BOOKS_SAGA', getNumberOfUnpaidBooks);
}




function* getTotalNumberOfBooks(action) {

    try {


        const { data } = yield call(() => DashboardServices.totalNumberOfBooks());

        yield put({
            type: 'TOTAL_NUMBER_OF_BOOKS',
            totalNumberOfBooks: data[0].totalNumberOfBooks
        })

    } catch (err) {
        console.log(err)
    }

}

export function* followGetTotalNumberOfBooks() {
    yield takeLatest('TOTAL_NUMBER_OF_BOOKS_SAGA', getTotalNumberOfBooks);
}






function* getCountNumberOfLostBooks(action) {

    try {

        const { data } = yield call(() => DashboardServices.countNumberOfLostBooks());

        yield put({
            type: 'COUNT_NUMBER_OF_LOST_BOOKS',
            countNumberOfLostBooks: data[0].countNumberOfLostBooks
        })
        

    } catch (err) {
        console.log(err)
    }

}

export function* followGetCountNumberOfLostBooks() {
    yield takeLatest('COUNT_NUMBER_OF_LOST_BOOKS_SAGA', getCountNumberOfLostBooks);
}





function* getCountNumberReader(action) {

    try {


        const { data } = yield call(() => DashboardServices.countNumberReader());

        yield put({
            type: 'COUNT_NUMBER_READER',
            countNumberReader: data[0].countNumberReader
        })


    } catch (err) {
        console.log(err)
    }

}

export function* followGetCountNumberReader() {
    yield takeLatest('COUNT_NUMBER_READER_SAGA', getCountNumberReader);
}




function* getCountBookLate(action) {

    try {


        const { data } = yield call(() => DashboardServices.countBookLate());



        yield put({
            type: 'COUNT_BOOK_LATE',
            countBookLate: data[0].countBookLate
        })


    } catch (err) {
        console.log(err)
    }

}

export function* followGetCountBookLate() {
    yield takeLatest('COUNT_BOOK_LATE_SAGA', getCountBookLate);
}






function* getCountBookEarly(action) {

    try {


        const { data } = yield call(() => DashboardServices.countBookEarly());



        yield put({
            type: 'COUNT_BOOK_EARLY',
            countBookEarly: data[0].countBookEarly
        })


    } catch (err) {
        console.log(err)
    }

}

export function* followGetCountBookEarly() {
    yield takeLatest('COUNT_BOOK_EARLY_SAGA', getCountBookEarly);
}

