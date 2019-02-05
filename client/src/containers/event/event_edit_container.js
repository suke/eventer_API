import { connect } from 'react-redux'
import { currentEvent, updateEvent } from '../../modules/event'
import { fetchCategories } from '../../modules/category'
import { fetchCompanies } from '../../modules/company'
import EventEdit from '../../components/event/edit'

const mapStateToProps = ({ eventReducer, companyReducer, categoryReducer }) => {
  return {
    event: eventReducer.currentEvent,
    events: eventReducer.events,
    companies: companyReducer.companies,
    categories: categoryReducer.categories
  }
}

const mapDispatchToPros = dispatch => {
  return {
    currentEvent: data => dispatch(currentEvent(data)),
    fetchCompanies: () => dispatch(fetchCompanies()),
    fetchCategories: () => dispatch(fetchCategories()),
    handleSubmit: (data, history) => {
      dispatch(updateEvent({ data, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventEdit)
