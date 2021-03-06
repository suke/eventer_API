import * as React from 'react'
import styled from 'styled-components'
import { ScheduleForm } from './form'
import Wrapper from '../main_wrapper'

class EventScheduleCreate extends React.Component<any> {
  render() {
    const { match, handleSubmit, history } = this.props
    const event_id = match.params.event_id
    return (
      <Wrapper>
        <H2>スケジュール作成</H2>
        <ScheduleForm
          history={history}
          handleSubmit={handleSubmit}
          initialValues={{
            id: '',
            event_id: event_id,
            started_at: '',
            ended_at: '',
            venue: '',
            zip_code: '',
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
