import { connect } from 'react-redux'
import { currentEvent, updateEvent } from '../../modules/event'
import { fetchCompanies } from '../../modules/company'
import EventEdit from '../../components/event/edit'

const mapStateToProps = state => {
  return {
    event: state.eventReducer.currentEvent,
    events: state.eventReducer.events,
    companies: state.companyReducer.companies
  }
}

const mapDispatchToPros = dispatch => {
  return {
    currentEvent: data => dispatch(currentEvent(data)),
    fetchCompanies: () => dispatch(fetchCompanies()),
    handleSubmit: data => {
      dispatch(updateEvent(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventEdit)
