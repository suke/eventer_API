import { connect } from 'react-redux'
import { fetchCompanies } from '../../modules/company'
import CompanyList from '../../components/company/list'

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
)(CompanyList)
