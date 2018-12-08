import { connect } from 'react-redux'
import {
  updateCategory,
  fetchCategoriesAndSelectCurrentCategory
} from '../../modules/category'
import CategoryEdit from '../../components/category/edit'

const mapStateToProps = ({ companyReducer }) => {
  return {
    companies: companyReducer.companies,
    currentCompany: companyReducer.currentCompany
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchCategoriesAndSelectCurrentCategory: id =>
      dispatch(fetchCategoriesAndSelectCurrentCategory(id)),
    handleSubmit: (data, dispatch, { history }) => {
      dispatch(updateCategory({ data, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(CategoryEdit)
