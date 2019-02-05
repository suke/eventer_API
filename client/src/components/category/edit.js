import React, { Component } from 'react'
import Wrapper from '../main_wrapper'
import { CategoryForm } from './form.js'
class CategoryEdit extends Component {
  componentDidMount() {
    const { fetchCategoriesAndSelectCurrentCategory, match } = this.props
    fetchCategoriesAndSelectCurrentCategory(parseInt(match.params.id, 10))
  }

  render() {
    const { currentCategory, handleSubmit, history } = this.props
    return (
      <Wrapper>
        <CategoryForm history={history} handleSubmit={handleSubmit} initialValues={currentCategory} />
      </Wrapper>
    )
  }
}

export default CategoryEdit
