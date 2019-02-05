import React, { Component } from 'react'
import { ScheduleForm } from '../event_schedule/form'
import Wrapper from '../main_wrapper'

class EventScheduleEdit extends Component {
  componentDidMount() {
    const { fetchSchedule, match } = this.props
    fetchSchedule(match.params.event_id, match.params.id)
  }

  render() {
    const { schedule, match, handleSubmit, history } = this.props
    const initialValues = { ...schedule, event_id: match.params.event_id }
    return (
      <Wrapper>
        <ScheduleForm
          history={history}
          handleSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </Wrapper>
    )
  }
}

export default EventScheduleEdit
