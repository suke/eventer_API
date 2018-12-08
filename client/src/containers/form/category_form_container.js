import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Form from '../../components/category/form'

const DefaultForm = reduxForm({
  form: 'category',
  enableReinitialize: true
})(Form)

export const CategoryForm = connect(state => ({
  initialValues: {
    id: state.categoryReducer.currentCategory.id,
    name: state.categoryReducer.currentCategory.name
  }
}))(DefaultForm)
