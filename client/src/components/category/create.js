import React, { Component } from 'react'
import styled from 'styled-components'
import { CategoryFormV2 } from './form.js'
import Wrapper from '../main_wrapper'

class CategoryCreate extends Component {
  render() {
    const { handleSubmit, history } = this.props
    return (
      <Wrapper>
        <H2>カテゴリー作成</H2>
        <CategoryFormV2 history={history} handleSubmit={handleSubmit} />
      </Wrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default CategoryCreate
