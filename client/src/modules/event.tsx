import { Event, EventSchedule } from '../interfaces/event'

// action type
export const CREATE_EVENT = 'CREATE_EVENT'
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS'

export const UPDATE_EVENT = 'UPDATE_EVENT'
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS'

export const DELETE_EVENT = 'DELETE_EVENT'
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS'

export const CURRENT_EVENT = 'CURRENT_EVENT'

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'

export const FETCH_EVENT = 'FETCH_EVENT'
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS'

export const FETCH_EVENT_SCHEDULE = 'FETCH_EVENT_SCHEDULE'
export const FETCH_EVENT_SCHEDULE_SUCCESS = 'FETCH_EVENT_SCHEDULE_SUCCESS'

export const FETCH_EVENT_AND_SCHEDULE = 'FETCH_EVENT_AND_SCHEDULE'
export const FETCH_EVENT_AND_SCHEDULE_SUCCESS =
  'FETCH_EVENT_AND_CHEDULE_SUCCESS'

// action creators
export const createEvent = ({
  data,
  history
}: {
  data: Event
  history: History
}) => ({
  type: CREATE_EVENT as typeof CREATE_EVENT,
  payload: {
    data,
    history
  }
})

export const createEventSuccess = (data: Event) => ({
  type: CREATE_EVENT_SUCCESS as typeof CREATE_EVENT_SUCCESS,
  payload: {
    data
  }
})

export const updateEvent = ({
  data,
  history
}: {
  data: Event
  history: History
}) => ({
  type: UPDATE_EVENT as typeof UPDATE_EVENT,
  payload: {
    data,
    history
  }
})

export const updateEventSuccess = (data: Event) => ({
  type: UPDATE_EVENT_SUCCESS as typeof UPDATE_EVENT_SUCCESS,
  payload: {
    data
  }
})

export const deleteEvent = (id: number) => ({
  type: DELETE_EVENT as typeof DELETE_EVENT,
  payload: {
    id
  }
})

export const deleteEventSuccess = (data: Event) => ({
  type: DELETE_EVENT_SUCCESS as typeof DELETE_EVENT_SUCCESS,
  payload: {
    data
  }
})

export const currentEvent = (data: Event) => ({
  type: CURRENT_EVENT as typeof CURRENT_EVENT,
  payload: {
    data
  }
})

export const fetchEvents = () => ({ type: FETCH_EVENTS })
export const fetchEventsSuccess = (data: Array<Event>) => ({
  type: FETCH_EVENTS_SUCCESS as typeof FETCH_EVENTS_SUCCESS,
  payload: {
    data
  }
})

export const fetchEvent = () => ({ type: FETCH_EVENT as typeof FETCH_EVENT })
export const fetchEventSuccess = (data: Event) => ({
  type: FETCH_EVENT_SUCCESS as typeof FETCH_EVENT_SUCCESS,
  payload: {
    data
  }
})

export const fetchEventAndSchedule = (id: number) => ({
  type: FETCH_EVENT_AND_SCHEDULE as typeof FETCH_EVENT_AND_SCHEDULE,
  payload: { id }
})

type EventActions =
  | ReturnType<typeof createEvent>
  | ReturnType<typeof createEventSuccess>
  | ReturnType<typeof updateEventSuccess>
  | ReturnType<typeof deleteEventSuccess>
  | ReturnType<typeof currentEvent>
  | ReturnType<typeof fetchEventSuccess>
  | ReturnType<typeof fetchEventsSuccess>

interface EventState {
  events: Array<Event>
  currentEvent: Event
  schedules: Array<EventSchedule>
}

const initialState: EventState = {
  events: [],
  currentEvent: {
    id: 1,
    name: '',
    company_id: 1,
    site_url: ''
  },
  schedules: []
}

export default function eventReducer(
  state = initialState,
  action: EventActions
) {
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
    case FETCH_EVENT_SUCCESS:
      return { ...state, events: [...state.events, action.payload.data] }
    case FETCH_EVENTS_SUCCESS:
      return { ...state, events: [...action.payload.data] }
    default:
      return state
  }
}
