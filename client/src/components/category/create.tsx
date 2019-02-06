import * as React from 'react'
import styled from 'styled-components'
import { CategoryForm } from './form'
import Wrapper from '../main_wrapper'

class CategoryCreate extends React.Component<any> {
  render() {
    const { handleSubmit, history } = this.props
    return (
      <Wrapper>
        <H2>カテゴリー作成</H2>
        <CategoryForm history={history} handleSubmit={handleSubmit} initialValues={ {id: '', name: ''} } />
      </Wrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default CategoryCreate
