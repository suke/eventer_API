import { put, call, take, fork } from 'redux-saga/effects'
import API from '../api'
import {
  FETCH_EVENTS,
  FETCH_EVENT_SCHEDULE,
  fetchEventScheduleSuccess,
  fetchEventsSuccess
} from '../modules/Event'

function* fetchEvents() {
  while (true) {
    const action = yield take(FETCH_EVENTS)
    const { result, err } = yield call(API.event.fetchEvents)
    if (result && !err) {
      yield put(fetchEventsSuccess(result.data))
    }
  }
}

function* fetchEventSchedule() {
  while (true) {
    const action = yield take(FETCH_EVENT_SCHEDULE)
    const { result, err } = yield call(
      API.event.fetchEventSchedule,
      action.payload.id
    )
    if (result && !err) {
      yield put(fetchEventScheduleSuccess(result.data))
    }
  }
}

export default function* rootSaga() {
  yield fork(fetchEvents)
  yield fork(fetchEventSchedule)
}
