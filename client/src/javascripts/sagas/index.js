import { put, call, take, fork } from 'redux-saga/effects'
import API from '../api'
import { FETCH_EVENTS, fetchEventsSuccess } from '../modules/Event'

function* fetchEvents() {
  while (true) {
    const action = yield take(FETCH_EVENTS)
    const { result, err } = yield call(API.event.fetchEvents)
    if (result && !err) {
      yield put(fetchEventsSuccess(result.data))
    }
  }
}

export default function* rootSaga() {
  yield fork(fetchEvents)
}
