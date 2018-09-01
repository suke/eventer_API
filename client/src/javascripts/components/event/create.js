import React, { Component } from 'react'
import styled from 'styled-components'
import Form from '../form/event'
import Wrapper from '../main_wrapper_base'
import { createOptions } from '../../util'

class EventCreate extends Component {
  componentDidMount() {
    const { fetchCompanies } = this.props
    fetchCompanies()
  }
  render() {
    const { companies } = this.props
    const options = createOptions(companies, 'id', 'name')
    return (
      <Wrapper>
        <H2>イベント作成</H2>
        <Form options={options} />
      </Wrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default EventCreate
