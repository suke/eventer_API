import { connect } from 'react-redux'
import { fetchCompanies } from '../../modules/company'
import EventCreate from '../../components/event/create'

const mapStateToProps = state => {
  return {
    companies: state.companyReducer.companies
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchCompanies: () => dispatch(fetchCompanies())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventCreate)
