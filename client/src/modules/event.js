// action tyoe
export const CREATE_EVENT = 'CREATE_EVENT'
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS'

export const UPDATE_EVENT = 'UPDATE_EVENT'
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS'

export const DELETE_EVENT = 'DELETE_EVENT'
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS'

export const CURRENT_EVENT = 'CURRENT_EVENT'

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'

export const FETCH_EVENT_SCHEDULE = 'FETCH_EVENT_SCHEDULE'
export const FETCH_EVENT_SCHEDULE_SUCCESS = 'FETCH_EVENT_SCHEDULE_SUCCESS'

// action creators
export const createEvent = data => ({
  type: CREATE_EVENT,
  payload: {
    data
  }
})

export const createEventSuccess = data => ({
  type: CREATE_EVENT_SUCCESS,
  payload: {
    data
  }
})

export const updateEvent = data => ({
  type: UPDATE_EVENT,
  payload: {
    data
  }
})

export const updateEventSuccess = data => ({
  type: UPDATE_EVENT_SUCCESS,
  payload: {
    data
  }
})

export const deleteEvent = id => ({
  type: DELETE_EVENT,
  payload: {
    id
  }
})

export const deleteEventSuccess = data => ({
  type: DELETE_EVENT_SUCCESS,
  payload: {
    data
  }
})

export const currentEvent = data => ({
  type: CURRENT_EVENT,
  payload: {
    data
  }
})

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
  currentEvent: {},
  schedules: []
}

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_EVENT:
      return { ...state, currentEvent: { ...action.payload.data } }
    case CREATE_EVENT_SUCCESS:
      return { ...state, events: [...state.events, action.payload.data] }
    case UPDATE_EVENT_SUCCESS:
      const updateIndex = state.events.findIndex(event => {
        return event.id === action.payload.data.id
      })
      const newEvents = [...state.events]
      newEvents.splice(updateIndex, 1, action.payload.data)
      return { ...state, currentEvent: action.payload.data, events: newEvents }
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events].filter(event => {
          return event.id !== action.payload.data.id
        })
      }
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
