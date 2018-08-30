// action tyoe
export const FETCH_EVENTS = 'FETCH_EVENTS'
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'

// action creators
export const fetchEvents = () => ({ type: FETCH_EVENTS })
export const fetchEventsSuccess = data => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: {
    data
  }
})

const initialState = {
  data: []
}

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return { data: [...action.payload.data] }
    default:
      return state
  }
}
