import { put, call, takeEvery, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import API from '../api'
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
  FETCH_EVENT_SCHEDULE,
  FETCH_EVENT_AND_SCHEDULE,
  createEventSuccess,
  updateEventSuccess,
  deleteEventSuccess,
  fetchEventSuccess,
  fetchEventsSuccess
} from '../modules/event'

import {
  CREATE_EVENT_SCHEDULE,
  UPDATE_EVENT_SCHEDULE,
  createEventScheduleSuccess,
  fetchEventScheduleSuccess,
  fetchEventSchedulesSuccess,
  updateEventScheduleSuccess
} from '../modules/event_schedule'

function* createEvent(action) {
  const { result, err } = yield call(API.event.createEvent, action.payload.data)
  if (result && !err) {
    yield put(createEventSuccess(result.data))
    toast.success('Created an event')
    yield call(action.payload.history.push, '/')
  }
}

function* updateEvent(action) {
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

function* fetchEvents() {
  const { result, err } = yield call(API.event.fetchEvents)
  if (result && !err) {
    yield put(fetchEventsSuccess(result.data))
  }
}

function* fetchEventSchedule(action) {
  const { result, err } = yield call(
    API.event.fetchEventSchedules,
    action.payload.data.event_id
  )
  if (result && !err) {
    const current_schedule = result.data.find(
      schedule => schedule.id === +action.payload.data.id
    )
    yield put(fetchEventScheduleSuccess(current_schedule))
  }
}

function* fetchEventAndSchedule(action) {
  const { result: event, err: eventErr } = yield call(
    API.event.fetchEvent,
    action.payload.id
  )
  if (event && !eventErr) {
    yield put(fetchEventSuccess(event.data))
    const { result: schedule, err: scheduleErr } = yield call(
      API.event.fetchEventSchedules,
      action.payload.id
    )
    if (schedule && !scheduleErr) {
      yield put(fetchEventSchedulesSuccess(schedule.data))
    }
  }
}

function* createEventSchedule(action) {
  const { result, err } = yield call(
    API.event.createEventSchedule,
    action.payload.data
  )
  if (result && !err) {
    yield put(createEventScheduleSuccess(result.data))
    toast.success('Created an event schedule')
    yield call(
      action.payload.history.push,
      `/events/${action.payload.data.event_id}/show`
    )
  }
}

function* updateEventSchedule(action) {
  const { result, err } = yield call(
    API.event.updateEventSchedule,
    action.payload.data
  )
  if (result && !err) {
    yield put(updateEventScheduleSuccess(result.data))
    toast.success('Update an event schedule')
    yield call(
      action.payload.history.push,
      `/events/${action.payload.data.event_id}/show`
    )
  }
}

const eventSagas = [
  takeEvery(CREATE_EVENT, createEvent),
  takeEvery(UPDATE_EVENT, updateEvent),
  takeEvery(DELETE_EVENT, deleteEvent),
  takeEvery(FETCH_EVENTS, fetchEvents),
  takeEvery(FETCH_EVENT_SCHEDULE, fetchEventSchedule),
  takeEvery(FETCH_EVENT_AND_SCHEDULE, fetchEventAndSchedule),
  takeEvery(CREATE_EVENT_SCHEDULE, createEventSchedule),
  takeEvery(UPDATE_EVENT_SCHEDULE, updateEventSchedule)
]

export default eventSagas
