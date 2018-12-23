import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import eventReducer from '../modules/event'
import companyReducer from '../modules/company'
import categoryReducer from '../modules/category'
import eventScheduleReducer from '../modules/event_schedule'
const reducer = combineReducers({
  eventReducer,
  companyReducer,
  categoryReducer,
  eventScheduleReducer,
  form: formReducer
})

export default reducer
