import React, { Component } from 'react'
import { ScheduleForm } from '../../containers/form/schedule_form_container'
import Wrapper from '../main_wrapper'

class EventScheduleEdit extends Component {
  componentDidMount() {
    const { fetchSchedule, match } = this.props
    fetchSchedule(match.params.event_id, match.params.id)
  }

  render() {
    const { match, handleSubmit, history } = this.props
    const event_id = match.params.id
    console.log(handleSubmit)
    return (
      <Wrapper>
        <ScheduleForm
          history={history}
          onSubmit={handleSubmit}
          event_id={event_id}
        />
      </Wrapper>
    )
  }
}

export default EventScheduleEdit
