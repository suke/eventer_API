import { connect } from 'react-redux'
import { fetchEventSchedule } from '../modules/event'
import Event from '../components/event'

const mapStateToProps = state => {
  return {
    events: state.eventReducer.events,
    schedules: state.eventReducer.schedules
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchEventSchedule: id => dispatch(fetchEventSchedule(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Event)
