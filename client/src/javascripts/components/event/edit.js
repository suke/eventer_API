import React, { Component } from 'react'
import styled from 'styled-components'
import { EditForm } from '../form/event'
import Wrapper from '../main_wrapper_base'
import { createOptions } from '../../util'

class EventCreate extends Component {
  componentDidMount() {
    const { currentEvent, fetchCompanies } = this.props
    const { events, match } = this.props
    const event = events.find(event => {
      return event.id === parseInt(match.params.id)
    })

    fetchCompanies()
    currentEvent(event)
  }

  render() {
    const { companies } = this.props
    const options = createOptions(companies, 'id', 'name')
    return (
      <Wrapper>
        <EditForm options={options} onSubmit={this.props.handleSubmit} />
      </Wrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default EventCreate
