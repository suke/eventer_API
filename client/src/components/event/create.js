import React, { Component } from 'react'
import styled from 'styled-components'
import Form from '../../containers/form/form_container'
import Wrapper from '../main_wrapper'
import { createOptions } from '../../util'

class EventCreate extends Component {
  componentDidMount() {
    const { fetchCompanies } = this.props
    fetchCompanies()
  }

  render() {
    const { companies, handleSubmit, history } = this.props
    const options = createOptions(companies, 'id', 'name')
    return (
      <Wrapper>
        <H2>イベント作成</H2>
        <Form history={history} options={options} onSubmit={handleSubmit} />
      </Wrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default EventCreate
