import { connect } from 'react-redux'
import {
  fetchSchedule,
  updateEventSchedule
} from '../../modules/event_schedule'
import EventScheduleEdit from '../../components/event_schedule/edit'

const mapStateToProps = ({ eventScheduleReducer }) => {
  return {
    schedule: eventScheduleReducer.current_event_schedule
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchSchedule: (event_id, id) => {
      dispatch(fetchSchedule(event_id, id))
    },
    handleSubmit: (data, history) => {
      dispatch(updateEventSchedule({ data, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventScheduleEdit)
