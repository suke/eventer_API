import React, { Component } from 'react'
import styled from 'styled-components'
import { ScheduleForm } from '../../containers/form/schedule_form_container'
import Wrapper from '../main_wrapper'

class EventScheduleCreate extends Component {
  render() {
    const { match, handleSubmit, history } = this.props
    const event_id = match.params.event_id
    return (
      <Wrapper>
        <H2>スケジュール作成</H2>
        <ScheduleForm
          history={history}
          onSubmit={handleSubmit}
          event_id={event_id}
        />
      </Wrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default EventScheduleCreate
