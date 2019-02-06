import { connect } from 'react-redux'
import { fetchCategories, deleteCategory } from '../../modules/category'
import CategoryList from '../../components/category/list'

const mapStateToProps = state => {
  return {
    categories: state.categoryReducer.categories
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    onClickDelete: id => dispatch(deleteCategory(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(CategoryList)
