import React, { Component } from 'react'
import styled from 'styled-components'
import { ScheduleForm } from '../event_schedule/form'
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
          handleSubmit={handleSubmit}
          event_id={event_id}
          initialValues={{
            id: '',
            event_id: event_id,
            started_at: '',
            ended_at: '',
            address: ''
          }}
        />
      </Wrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default EventScheduleCreate
