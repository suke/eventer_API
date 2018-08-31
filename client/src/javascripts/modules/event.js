// action tyoe
export const FETCH_EVENTS = 'FETCH_EVENTS'
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'

export const FETCH_EVENT_SCHEDULE = 'FETCH_EVENT_SCHEDULE'
export const FETCH_EVENT_SCHEDULE_SUCCESS = 'FETCH_EVENT_SCHEDULE_SUCCESS'

// action creators
export const fetchEvents = () => ({ type: FETCH_EVENTS })
export const fetchEventsSuccess = data => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: {
    data
  }
})

export const fetchEventSchedule = id => ({
  type: FETCH_EVENT_SCHEDULE,
  payload: { id }
})

export const fetchEventScheduleSuccess = data => ({
  type: FETCH_EVENT_SCHEDULE_SUCCESS,
  payload: {
    data
  }
})

const initialState = {
  events: [],
  schedules: []
}

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return { ...state, events: [...action.payload.data] }
    case FETCH_EVENT_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedules: [...action.payload.data]
      }
    default:
      return state
  }
}
