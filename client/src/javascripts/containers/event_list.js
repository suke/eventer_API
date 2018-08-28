import { connect } from 'react-redux'
import { getEvents } from '../modules/event'
import EventList from '../components/event_list'

const mapStateToProps = state => {
  return {
    events: state.eventReducer.data
  }
}

const mapDispatchToPros = dispatch => {
  return {
    getEvents: () => dispatch(getEvents())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventList)
