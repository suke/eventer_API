import { connect } from 'react-redux'
import { createEvent } from '../../modules/event'
import { fetchCompanies } from '../../modules/company'
import { fetchCategories } from '../../modules/category'

import EventCreate from '../../components/event/create'

const mapStateToProps = state => {
  return {
    companies: state.companyReducer.companies,
    categories: state.categoryReducer.categories
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchCompanies: () => dispatch(fetchCompanies()),
    fetchCategories: () => dispatch(fetchCategories()),
    handleSubmit: (data, history) => {
      dispatch(createEvent({ data, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventCreate)
