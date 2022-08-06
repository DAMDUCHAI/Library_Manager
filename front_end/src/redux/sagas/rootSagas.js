import { all } from "redux-saga/effects";
import * as bookSaga from './libraryManageSagas/bookSagas'
import * as authorSaga from './libraryManageSagas/authorSagas'
import * as bookshelfSaga from './libraryManageSagas/bookshelfSagas'
import * as publisherSaga from './libraryManageSagas/publisherSagas'
import * as categorySaga from './libraryManageSagas/categorySagas'
import * as readerSaga from './libraryManageSagas/readerSaga'
import * as genderSaga from './libraryManageSagas/genderSaga'
import * as borrowSagas from './libraryManageSagas/borrowSagas'
import * as acountSaga from './libraryManageSagas/acountSaga'
import * as feedBackSaga from './libraryManageSagas/feedBackSaga'
import * as commentSaga from './libraryManageSagas/commentSaga'
import * as moneySaga from './libraryManageSagas/moneySaga'
import * as rulesSaga from './libraryManageSagas/rulesSaga'
import * as staffSaga from './libraryManageSagas/staffSaga'
import * as validateSaga from './libraryManageSagas/validateSaga'
import * as dasboardSaga from './libraryManageSagas/dasboardSaga'


export function* rootSagas() {

  yield all([
    //Nghiệp vụ theo dõi các action saga todolist
    bookSaga.followGetListBookSaga(),
    bookSaga.followDeleteBookSaga(),
  bookSaga.followUpdateBookSaga(),
  bookSaga.followCreateBookSaga(),
    authorSaga.followGetListAuthorSaga(),
    authorSaga.followCreateAuthorSaga(),
    authorSaga.followUpdateAuthorSaga(),
    authorSaga.followDeleteAuthorSaga(),
    bookshelfSaga.followGetListBookshelfSaga(),
    publisherSaga.followGetListPublisherSaga(),
    publisherSaga.followCreatePublisherSaga(),
    publisherSaga.followDeletePublisherSaga(),
    publisherSaga.followUpdatePublisherSaga(),
    categorySaga.followGetListCategorySaga(),
    categorySaga.followCreateCategorySaga(),
    categorySaga.followUpdateCategorySaga(),
    categorySaga.followDeleteCategorySaga(),
    bookSaga.followCreateBookCardSaga(),
    bookSaga.followCreateBorrowBookSaga(),

    readerSaga.followGetListReaderSaga(),
    readerSaga.followCreateReaderSaga(),
    readerSaga.followUpdateReaderSaga(),
    
    genderSaga.followGetListGenderSaga(),

    borrowSagas.followGetBookByReaderSaga(),
    
    acountSaga.followloginAcount(),
    bookSaga.followGetBookSaga(),

    borrowSagas.followGetBorrowBookByIdAcountSaga(),
    feedBackSaga.followCreateFeedbackSaga(),
    readerSaga.followGetReaderSaga(),
    readerSaga.followUpdateInforReaderSaga(),
    feedBackSaga.followGetListFeedbackSaga(),
    feedBackSaga.followUpdateTrangThaiSaga(),

    commentSaga.followGetListCommentSaga(),

    commentSaga.followCreateCommentSaga(),
    acountSaga.followChangePass(),
    bookSaga.followViewBookCardSaga(),


    bookSaga.followViewDetaildBookCardSaga(),
    bookSaga.followGiveBookBackSaga(),

    moneySaga.followGetListMoneySaga(),

    
    moneySaga.followPaymentSagaSaga(),

    rulesSaga.followGetListRulesSaga(),
    rulesSaga.followCreateRulesSaga(),
    rulesSaga.followUpdateRulesSaga(),
    rulesSaga.followDeleteRulesSaga(),

    acountSaga.followGetNameUser(),


    staffSaga.followGetListStaffSaga(),


    staffSaga.followCreateStaffSaga(),


    staffSaga.followGetStaffSaga(),
    staffSaga.followUpdateInforStaffSaga(),
    staffSaga.followUpdateStaffSaga(),
    acountSaga.followBanAcount(),
    bookshelfSaga.followDeleteBookshelfSaga(),
    bookshelfSaga.followUpdateBookshelfSaga(),
    bookshelfSaga.followCreateBookshelfSaga(),
    commentSaga.followUpdateCommentSaga(),
    commentSaga.followDeleteCommentSaga(),
    bookSaga.followPreviewGiveBookSaga(),

    moneySaga.followGetListMoneyDetaildByReaderSaga(),

    borrowSagas.followGetcountBorrowBookByMonthSaga(),



    validateSaga.followGetListMaSinhVienSaga(),
    validateSaga.followGetListEmailSaga(),
    validateSaga.followGetListCCCDSaga(),
    validateSaga.followGetListPhoneSaga(),



    dasboardSaga.followGetNumberOfUnpaidBooks(),
    dasboardSaga.followGetTotalNumberOfBooks(),
    dasboardSaga.followGetCountNumberOfLostBooks(),
    dasboardSaga.followGetCountNumberReader(),
    dasboardSaga.followGetCountBookLate(),
    dasboardSaga.followGetCountBookEarly(),
  ])

  
}