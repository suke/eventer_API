import { put, call, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import API from '../api'

import {
  CREATE_COMPANY,
  createCompanySuccess,
  FETCH_COMPANIES,
  fetchCompaniesSuccess,
  UPDATE_COMPANY,
  updateCompanySuccess,
  currentCompany as setCurrentCompany,
  FETCH_COMPANIES_AND_SELECT_CURRENT_COMPANY,
  DELETE_COMPANY,
  deleteCompanySuccess
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

function* createCompany(action) {
  const { result, err } = yield call(
    API.company.createCompany,
    action.payload.data
  )
  if (result && !err) {
    yield put(createCompanySuccess(result.data))
    toast.success('Created an company')
    yield call(action.payload.history.push, '/companies')
  }
}

function* updateCompany(action) {
  const { result, err } = yield call(
    API.company.updateCompany,
    action.payload.data
  )
  if (result && !err) {
    yield put(updateCompanySuccess(result.data))
    toast.success('Update completed')
    yield call(action.payload.history.push, '/companies')
  }
}

function* deleteCompany(action) {
  const { result, err } = yield call(
    API.company.deleteCompany,
    action.payload.id
  )
  if (result && !err) {
    yield put(deleteCompanySuccess(result.data))
    toast.success(`${result.data.message}`)
  }
}

const companySagas = [
  takeEvery(FETCH_COMPANIES, fetchCompanies),
  takeEvery(
    FETCH_COMPANIES_AND_SELECT_CURRENT_COMPANY,
    fetchCompaniesAndSelectCurrentCompany
  ),
  takeEvery(CREATE_COMPANY, createCompany),
  takeEvery(UPDATE_COMPANY, updateCompany),
  takeEvery(DELETE_COMPANY, deleteCompany)
]

export default companySagas
