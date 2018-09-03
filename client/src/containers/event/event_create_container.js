import { connect } from 'react-redux'
import { createEvent } from '../../modules/event'
import { fetchCompanies } from '../../modules/company'
import EventCreate from '../../components/event/create'

const mapStateToProps = state => {
  return {
    companies: state.companyReducer.companies
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchCompanies: () => dispatch(fetchCompanies()),
    handleSubmit: data => {
      dispatch(createEvent(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventCreate)
