import { put, call, take, fork } from 'redux-saga/effects'
import API from '../api'
import { GET_EVENTS, successGetEvents } from '../modules/event'

function* getEvents() {
  while (true) {
    const action = yield take(GET_EVENTS)
    console.log('success')
    const { result, err } = yield call(API.event.getEvents)
    if (result && !err) {
      yield put(successGetEvents(result.data))
    }
  }
}

export default function* rootSaga() {
  yield fork(getEvents)
}
