import { put, call, takeEvery, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import API from '../api'
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
  FETCH_EVENT_SCHEDULE,
  createEventSuccess,
  updateEventSuccess,
  deleteEventSuccess,
  fetchEventScheduleSuccess,
  fetchEventsSuccess
} from '../modules/event'

function* createEvent(action) {
  const { result, err } = yield call(API.event.createEvent, action.payload.data)
  if (result && !err) {
    yield put(createEventSuccess(result.data))
    toast.success('Created an event')
    yield call(action.payload.history.push, '/')
  }
}

function* updateEvent(action) {
  console.log(action)
  const { result, err } = yield call(API.event.updateEvent, action.payload.data)
  if (result && !err) {
    yield put(updateEventSuccess(result.data))
    toast.success('Update completed')
    yield call(action.payload.history.push, '/')
  }
}

function* deleteEvent(action) {
  const { result, err } = yield call(API.event.deleteEvent, action.payload.id)
  if (result && !err) {
    yield put(deleteEventSuccess(result.data))
    toast.success(`${result.data.message}`)
  }
}

function* fetchEvents(action) {
  const { result, err } = yield call(API.event.fetchEvents)
  if (result && !err) {
    yield put(fetchEventsSuccess(result.data))
  }
}

function* fetchEventSchedule(action) {
  const { result, err } = yield call(
    API.event.fetchEventSchedule,
    action.payload.id
  )
  if (result && !err) {
    yield put(fetchEventScheduleSuccess(result.data))
  }
}

const eventSagas = [
  takeEvery(CREATE_EVENT, createEvent),
  takeEvery(UPDATE_EVENT, updateEvent),
  takeEvery(DELETE_EVENT, deleteEvent),
  takeEvery(FETCH_EVENTS, fetchEvents),
  takeEvery(FETCH_EVENT_SCHEDULE, fetchEventSchedule)
]

export default eventSagas

// export default function* eventSaga() {
//   yield all([
//     takeEvery(CREATE_EVENT, createEvent),
//     takeEvery(UPDATE_EVENT, updateEvent),
//     takeEvery(DELETE_EVENT, deleteEvent),
//     takeEvery(FETCH_EVENTS, fetchEvents),
//     takeEvery(FETCH_EVENT_SCHEDULE, fetchEventSchedule)
//   ])
// }
