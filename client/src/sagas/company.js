import { put, call, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import API from '../api'

import {
  FETCH_COMPANIES,
  fetchCompaniesSuccess,
  UPDATE_COMPANY,
  updateCompanySuccess,
  currentCompany as setCurrentCompany,
  FETCH_COMPANIES_AND_SELECT_CURRENT_COMPANY,
} from '../modules/company'

function* fetchCompanies() {
  const { result, err } = yield call(API.company.fetchCompanies)
  if (result && !err) {
    yield put(fetchCompaniesSuccess(result.data))
  }
}

function* fetchCompaniesAndSelectCurrentCompany(action) {
  const { result, err } = yield call(API.company.fetchCompanies)
  if (result && !err) {
    yield put(fetchCompaniesSuccess(result.data))
    const currentcompany = result.data.find(
      company => company.id === action.payload.id
    )
    yield put(setCurrentCompany(currentcompany))
  }
}

function* updateCompany(action) {
  console.log(action.payload.data)
  const { result, err } = yield call(API.company.updateCompany, action.payload.data)
  if (result && !err) {
    yield put(updateCompanySuccess(result.data))
    toast.success('Update completed')
    yield call(action.payload.history.push, '/companies')
  }
}

const companySagas = [
  takeEvery(FETCH_COMPANIES, fetchCompanies),
  takeEvery(
    FETCH_COMPANIES_AND_SELECT_CURRENT_COMPANY,
    fetchCompaniesAndSelectCurrentCompany
  ),
  takeEvery(UPDATE_COMPANY, updateCompany)
]

export default companySagas
