import { connect } from 'react-redux'
import {
  updateCompany,
  fetchCompaniesAndSelectCurrentCompany
} from '../../modules/company'
import CompanyEdit from '../../components/company/edit'

const mapStateToProps = ({ companyReducer }) => {
  return {
    companies: companyReducer.companies,
    currentCompany: companyReducer.currentCompany
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchCompaniesAndSelectCurrentCompany: id =>
      dispatch(fetchCompaniesAndSelectCurrentCompany(id)),
    handleSubmit: (data, dispatch, { history }) => {
      dispatch(updateCompany({ data, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(CompanyEdit)
