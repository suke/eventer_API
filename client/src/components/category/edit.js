import React, { Component } from 'react'
import { CategoryForm } from '../../containers/form/category_form_container'
import Wrapper from '../main_wrapper'

class CategoryEdit extends Component {
  componentDidMount() {
    const { fetchCategoriesAndSelectCurrentCategory, match } = this.props
    fetchCategoriesAndSelectCurrentCategory(parseInt(match.params.id, 10))
  }

  render() {
    const { handleSubmit, history } = this.props
    return (
      <Wrapper>
        <CategoryForm history={history} onSubmit={handleSubmit} />
      </Wrapper>
    )
  }
}

export default CategoryEdit
