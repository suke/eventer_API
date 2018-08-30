// action tyoe
export const GET_EVENTS = 'GET_EVENTS'
export const SUCCESS_GET_EVENTS = 'SUCCESS_GET_EVENTS'

// action creators
export const getEvents = () => ({ type: GET_EVENTS })
export const successGetEvents = data => ({
  type: SUCCESS_GET_EVENTS,
  data
})

const initialState = {
  data: []
}

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_GET_EVENTS:
      return { data: [...action.data] }
    default:
      return state
  }
}
