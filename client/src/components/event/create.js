import React, { Component } from 'react'
import styled from 'styled-components'
import { EventForm } from '../event/form'
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
        <EventForm
          history={history}
          options={options}
          handleSubmit={handleSubmit}
          initialValues={{ id: '', name: '', company_id: '', site_url: '' }}
        />
      </Wrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default EventCreate
