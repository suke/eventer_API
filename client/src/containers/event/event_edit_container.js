import { connect } from 'react-redux'
import { currentEvent, updateEvent } from '../../modules/event'
import { fetchCompanies } from '../../modules/company'
import EventEdit from '../../components/event/edit'

const mapStateToProps = ({ eventReducer, companyReducer }) => {
  return {
    event: eventReducer.currentEvent,
    events: eventReducer.events,
    companies: companyReducer.companies
  }
}

const mapDispatchToPros = dispatch => {
  return {
    currentEvent: data => dispatch(currentEvent(data)),
    fetchCompanies: () => dispatch(fetchCompanies()),
    handleSubmit: (data, dispatch, { history }) => {
      dispatch(updateEvent({ data, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventEdit)
