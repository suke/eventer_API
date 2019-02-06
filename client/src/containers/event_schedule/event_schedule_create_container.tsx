import { connect } from 'react-redux'
import { createEventSchedule } from '../../modules/event_schedule'
import EventScheduleCreate from '../../components/event_schedule/create'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToPros = dispatch => {
  return {
    handleSubmit: (data, history) => {
      dispatch(createEventSchedule({ data, history }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventScheduleCreate)
