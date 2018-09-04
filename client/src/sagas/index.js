import { put, call, take, fork } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import history from '../history'
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
import { FETCH_COMPANIES, fetchCompaniesSuccess } from '../modules/company'

function* createEvent() {
  while (true) {
    const action = yield take(CREATE_EVENT)
    const { result, err } = yield call(
      API.event.createEvent,
      action.payload.data
    )
    if (result && !err) {
      yield put(createEventSuccess(result.data))
      toast.success('Created an event')
    }
  }
}

function* updateEvent() {
  while (true) {
    const action = yield take(UPDATE_EVENT)
    const { result, err } = yield call(
      API.event.updateEvent,
      action.payload.data
    )
    if (result && !err) {
      yield put(updateEventSuccess(result.data))
      toast.success('Update completed')
    }
  }
}

function* deleteEvent() {
  while (true) {
    const action = yield take(DELETE_EVENT)
    const { result, err } = yield call(API.event.deleteEvent, action.payload.id)
    if (result && !err) {
      yield put(deleteEventSuccess(result.data))
      toast.success(`${result.data.message}`)
    }
  }
}

function* fetchEvents() {
  while (true) {
    yield take(FETCH_EVENTS)
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

function* fetchCompanies() {
  while (true) {
    yield take(FETCH_COMPANIES)
    const { result, err } = yield call(API.company.fetchCompanies)
    if (result && !err) {
      yield put(fetchCompaniesSuccess(result.data))
    }
  }
}

export default function* rootSaga() {
  yield fork(createEvent)
  yield fork(updateEvent)
  yield fork(deleteEvent)
  yield fork(fetchEvents)
  yield fork(fetchEventSchedule)
  yield fork(fetchCompanies)
}
