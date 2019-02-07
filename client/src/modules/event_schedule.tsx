import { EventSchedule } from '../interfaces/event'

// action type
export const CREATE_EVENT_SCHEDULE = 'CREATE_EVENT_SCHEDULE'
export const CREATE_EVENT_SCHEDULE_SUCCESS = 'CREATE_EVENT_SCHEDULE_SUCCESS'

export const UPDATE_EVENT_SCHEDULE = 'UPDATE_EVENT_SCHEDULE'
export const UPDATE_EVENT_SCHEDULE_SUCCESS = 'UPDATE_EVENT_SCHEDULE_SUCCESS'

export const DELETE_EVENT_SCHEDULE = 'DELETE_EVENT_SCHEDULE'
export const DELETE_EVENT_SCHEDULE_SUCCESS = 'DELETE_EVENT_SCHEDULE_SUCCESS'

export const CURRENT_EVENT_SCHEDULE = 'CURRENT_EVENT_SCHEDULE'

export const FETCH_EVENT_SCHEDULES = 'FETCH_EVENT_SCHEDULES'
export const FETCH_EVENT_SCHEDULES_SUCCESS = 'FETCH_EVENT_SCHEDULES_SUCCESS'

export const FETCH_EVENT_SCHEDULE = 'FETCH_EVENT_SCHEDULE'
export const FETCH_EVENT_SCHEDULE_SUCCESS = 'FETCH_EVENT_SCHEDULE_SUCCESS'

// action creators
export const createEventSchedule = ({
  data,
  history
}: {
  data: EventSchedule
  history: History
}) => ({
  type: CREATE_EVENT_SCHEDULE as typeof CREATE_EVENT_SCHEDULE,
  payload: {
    data,
    history
  }
})

export const createEventScheduleSuccess = (data: EventSchedule) => ({
  type: CREATE_EVENT_SCHEDULE_SUCCESS as typeof CREATE_EVENT_SCHEDULE_SUCCESS,
  payload: {
    data
  }
})

export const updateEventSchedule = ({
  data,
  history
}: {
  data: EventSchedule
  history: History
}) => ({
  type: UPDATE_EVENT_SCHEDULE as typeof UPDATE_EVENT_SCHEDULE,
  payload: {
    data,
    history
  }
})

export const updateEventScheduleSuccess = (data: EventSchedule) => ({
  type: UPDATE_EVENT_SCHEDULE_SUCCESS as typeof UPDATE_EVENT_SCHEDULE_SUCCESS,
  payload: {
    data
  }
})

export const deleteEventSchedule = (id: number) => ({
  type: DELETE_EVENT_SCHEDULE as typeof DELETE_EVENT_SCHEDULE,
  payload: {
    id
  }
})

export const deleteEventScheduleSuccess = (data: EventSchedule) => ({
  type: DELETE_EVENT_SCHEDULE_SUCCESS as typeof DELETE_EVENT_SCHEDULE_SUCCESS,
  payload: {
    data
  }
})

export const currentEventSchedule = (data: EventSchedule) => ({
  type: CURRENT_EVENT_SCHEDULE as typeof CURRENT_EVENT_SCHEDULE,
  payload: {
    data
  }
})

export const fetchEventSchedules = () => ({
  type: FETCH_EVENT_SCHEDULES as typeof FETCH_EVENT_SCHEDULES
})
export const fetchEventSchedulesSuccess = (data: Array<EventSchedule>) => ({
  type: FETCH_EVENT_SCHEDULES_SUCCESS as typeof FETCH_EVENT_SCHEDULES_SUCCESS,
  payload: {
    data
  }
})

export const fetchSchedule = (event_id: number, id: number) => ({
  type: FETCH_EVENT_SCHEDULE as typeof FETCH_EVENT_SCHEDULE,
  payload: {
    data: {
      event_id,
      id
    }
  }
})

export const fetchEventScheduleSuccess = (data: EventSchedule) => ({
  type: FETCH_EVENT_SCHEDULE_SUCCESS as typeof FETCH_EVENT_SCHEDULE_SUCCESS,
  payload: {
    data
  }
})

type EventScheduleActions =
  | ReturnType<typeof createEventSchedule>
  | ReturnType<typeof createEventScheduleSuccess>
  | ReturnType<typeof updateEventSchedule>
  | ReturnType<typeof updateEventScheduleSuccess>
  | ReturnType<typeof deleteEventSchedule>
  | ReturnType<typeof deleteEventScheduleSuccess>
  | ReturnType<typeof currentEventSchedule>
  | ReturnType<typeof fetchEventSchedules>
  | ReturnType<typeof fetchEventSchedulesSuccess>
  | ReturnType<typeof fetchSchedule>
  | ReturnType<typeof fetchEventScheduleSuccess>

interface EventScheduleState {
  event_schedules: Array<EventSchedule>
  current_event_schedule: EventSchedule
}

const initialState: EventScheduleState = {
  event_schedules: [],
  current_event_schedule: {
    id: 1,
    started_at: new Date(),
    ended_at: new Date(),
    address: ''
  }
}

export default function eventScheduleReducer(
  state = initialState,
  action: EventScheduleActions
) {
  switch (action.type) {
    case CURRENT_EVENT_SCHEDULE:
      return { ...state, current_event_schedule: { ...action.payload.data } }
    case CREATE_EVENT_SCHEDULE_SUCCESS:
      return {
        ...state,
        event_schedules: [...state.event_schedules, action.payload.data]
      }
    case UPDATE_EVENT_SCHEDULE_SUCCESS:
      const updateIndex = state.event_schedules.findIndex(event_schedule => {
        return event_schedule.id === action.payload.data.id
      })
      const newEventSchedules = [...state.event_schedules]
      newEventSchedules.splice(updateIndex, 1, action.payload.data)
      return {
        ...state,
        current_event_schedule: action.payload.data,
        event_schedules: newEventSchedules
      }
    case DELETE_EVENT_SCHEDULE_SUCCESS:
      return {
        ...state,
        event_schedules: [...state.event_schedules].filter(event_schedule => {
          return event_schedule.id !== action.payload.data.id
        })
      }
    case FETCH_EVENT_SCHEDULE_SUCCESS:
      return {
        ...state,
        current_event_schedule: action.payload.data
      }
    case FETCH_EVENT_SCHEDULES_SUCCESS:
      return { ...state, event_schedules: [...action.payload.data] }
    default:
      return state
  }
}
