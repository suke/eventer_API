import { connect } from 'react-redux'
import { fetchEventAndSchedule } from '../../modules/event'
import Event from '../../components/event/index'

const mapStateToProps = ({ eventReducer }) => {
  return {
    events: eventReducer.events,
    schedules: eventReducer.schedules
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
