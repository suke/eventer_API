import { put, call, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import API from '../api'

import {
  CREATE_CATEGORY,
  createCategorySuccess,
  FETCH_CATEGORIES,
  fetchCategoriesSuccess,
  UPDATE_CATEGORY,
  updateCategorySuccess,
  DELETE_CATEGORY,
  deleteCategorySuccess
} from '../modules/category'

function* fetchCategories() {
  const { result, err } = yield call(API.Category.fetchCategories)
  if (result && !err) {
    yield put(fetchCategoriesSuccess(result.data))
  }
}

function* createCategory(action) {
  const { result, err } = yield call(
    API.Category.createCategory,
    action.payload.data
  )
  if (result && !err) {
    yield put(createCategorySuccess(result.data))
    toast.success('Created an Category')
    yield call(action.payload.history.push, '/Categories')
  }
}

function* updateCategory(action) {
  const { result, err } = yield call(
    API.Category.updateCategory,
    action.payload.data
  )
  if (result && !err) {
    yield put(updateCategorySuccess(result.data))
    toast.success('Update completed')
    yield call(action.payload.history.push, '/Categories')
  }
}

function* deleteCategory(action) {
  const { result, err } = yield call(
    API.Category.deleteCategory,
    action.payload.id
  )
  if (result && !err) {
    yield put(deleteCategorySuccess(result.data))
    toast.success(`${result.data.message}`)
  }
}

const CategorySagas = [
  takeEvery(FETCH_CATEGORIES, fetchCategories),
  takeEvery(CREATE_CATEGORY, createCategory),
  takeEvery(UPDATE_CATEGORY, updateCategory),
  takeEvery(DELETE_CATEGORY, deleteCategory)
]

export default CategorySagas