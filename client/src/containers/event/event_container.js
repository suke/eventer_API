import { connect } from 'react-redux'
import { fetchEventSchedule } from '../../modules/event'
import Event from '../../components/event/index'

const mapStateToProps = ({ eventReducer }) => {
  return {
    events: eventReducer.events,
    schedules: eventReducer.schedules
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
