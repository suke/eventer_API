import { connect } from 'react-redux'
import { createCategory } from '../../modules/category'
import CategoryCreate from '../../components/category/create'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToPros = dispatch => {
  return {
    handleSubmit: (data, history) => {
      dispatch(createCategory({ data, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(CategoryCreate)
