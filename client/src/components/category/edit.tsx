import * as React from 'react'
import { useOnMount } from '../../custom_fooks/index'
import Wrapper from '../main_wrapper'
import { CategoryForm } from './form'

function CategoryEdit(props) {
  useOnMount(props, ({ fetchCategoriesAndSelectCurrentCategory, match }) => {
    fetchCategoriesAndSelectCurrentCategory(parseInt(match.params.id, 10))
  })

  const { currentCategory, handleSubmit, history } = props
  return (
    <Wrapper>
      <CategoryForm
        history={history}
        handleSubmit={handleSubmit}
        initialValues={currentCategory}
      />
    </Wrapper>
  )
}

export default CategoryEdit
