import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Form from '../../components/event_schedule/form'

const DefaultForm = reduxForm({
  form: 'schedule',
  enableReinitialize: true
})(Form)

export const ScheduleForm = connect(state => ({
  initialValues: {
    id: state.eventScheduleReducer.current_event_schedule.id,
    started_at: state.eventScheduleReducer.current_event_schedule.started_at,
    ended_at: state.eventScheduleReducer.current_event_schedule.ended_at,
    address: state.eventScheduleReducer.current_event_schedule.address
  }
}))(DefaultForm)
