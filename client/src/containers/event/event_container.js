import { connect } from 'react-redux'
import { fetchEventAndSchedule } from '../../modules/event'
import Event from '../../components/event/index'

const mapStateToProps = ({ eventReducer, eventScheduleReducer }) => {
  return {
    events: eventReducer.events,
    schedules: eventScheduleReducer.event_schedules
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchEventAndSchedule: id => dispatch(fetchEventAndSchedule(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Event)
