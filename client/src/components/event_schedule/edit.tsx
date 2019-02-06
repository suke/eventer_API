import * as React from 'react'
import { ScheduleForm } from './form'
import Wrapper from '../main_wrapper'

class EventScheduleEdit extends React.Component<any> {
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
