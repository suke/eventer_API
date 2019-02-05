import { connect } from 'react-redux'
import {
  updateCategory,
  fetchCategoriesAndSelectCurrentCategory
} from '../../modules/category'
import CategoryEdit from '../../components/category/edit'

const mapStateToProps = ({ categoryReducer }) => {
  return {
    currentCategory: categoryReducer.currentCategory,
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchCategoriesAndSelectCurrentCategory: id =>
      dispatch(fetchCategoriesAndSelectCurrentCategory(id)),
    handleSubmit: (data, history ) => {
      dispatch(updateCategory({ data, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(CategoryEdit)
