import { connect } from 'react-redux'
import {
  fetchSchedule,
  updateEventSchedule
} from '../../modules/event_schedule'
import EventScheduleEdit from '../../components/event_schedule/edit'

const mapStateToProps = ({ eventScheduleReducer }) => {
  return {
    schedule: eventScheduleReducer.currentSchedule
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchSchedule: (event_id, id) => {
      dispatch(fetchSchedule(event_id, id))
    },
    handleSubmit: (data, dispatch, { event_id, history }) => {
      const newData = { event_id: +event_id, ...data }
      dispatch(updateEventSchedule({ data: newData, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventScheduleEdit)
