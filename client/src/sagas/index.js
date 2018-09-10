import { all } from 'redux-saga/effects'
import eventSagas from './event'
import companySagas from './company'
export default function* rootSaga() {
  yield all([...eventSagas, ...companySagas])
}
