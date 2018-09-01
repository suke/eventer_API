import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import eventReducer from '../modules/event'
import companyReducer from '../modules/company'

const reducer = combineReducers({
  eventReducer,
  companyReducer,
  form: formReducer
})

export default reducer
