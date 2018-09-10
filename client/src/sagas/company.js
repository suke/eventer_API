import { put, call, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import API from '../api'

import { FETCH_COMPANIES, fetchCompaniesSuccess } from '../modules/company'

function* fetchCompanies(action) {
  const { result, err } = yield call(API.company.fetchCompanies)
  if (result && !err) {
    yield put(fetchCompaniesSuccess(result.data))
  }
}

const companySagas = [takeEvery(FETCH_COMPANIES, fetchCompanies)]

export default companySagas
