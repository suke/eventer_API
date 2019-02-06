import { connect } from 'react-redux'
import { fetchCompanies, deleteCompany } from '../../modules/company'
import CompanyList from '../../components/company/list'

const mapStateToProps = state => {
  return {
    companies: state.companyReducer.companies
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchCompanies: () => dispatch(fetchCompanies()),
    onClickDelete: id => dispatch(deleteCompany(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(CompanyList)
