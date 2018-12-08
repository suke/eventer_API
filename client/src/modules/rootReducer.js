import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import eventReducer from '../modules/event'
import companyReducer from '../modules/company'
import categoryReducer from '../modules/category'
const reducer = combineReducers({
  eventReducer,
  companyReducer,
  categoryReducer,
  form: formReducer
})

export default reducer
