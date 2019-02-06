import { combineReducers } from 'redux'
import eventReducer from './event'
import companyReducer from './company'
import categoryReducer from './category'
import eventScheduleReducer from './event_schedule'
const reducer = combineReducers({
  eventReducer,
  companyReducer,
  categoryReducer,
  eventScheduleReducer
})

export default reducer
