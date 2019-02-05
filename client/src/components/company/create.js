import React, { Component } from 'react'
import styled from 'styled-components'
import { CompanyForm } from '../company/form'
import Wrapper from '../main_wrapper'

class CompanyCreate extends Component {
  render() {
    const { handleSubmit, history } = this.props
    console.log(history)
    return (
      <Wrapper>
        <H2>企業作成</H2>
        <CompanyForm
          history={history}
          handleSubmit={handleSubmit}
          initialValues={{ id: '', name: '' }}
        />
      </Wrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default CompanyCreate
