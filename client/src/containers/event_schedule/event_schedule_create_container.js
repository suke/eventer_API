import { connect } from 'react-redux'
import { createEventSchedule } from '../../modules/event_schedule'
import EventScheduleCreate from '../../components/event_schedule/create'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToPros = dispatch => {
  return {
    handleSubmit: (data, dispatch, { event_id, history }) => {
      const newData = { event_id: +event_id, ...data }
      dispatch(createEventSchedule({ data: newData, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventScheduleCreate)
