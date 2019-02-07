import { connect } from 'react-redux'
import { createCompany } from '../../modules/company'
import CompanyCreate from '../../components/company/create'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToPros = dispatch => {
  return {
    handleSubmit: (data, history) => {
      dispatch(createCompany({ data, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(CompanyCreate)
