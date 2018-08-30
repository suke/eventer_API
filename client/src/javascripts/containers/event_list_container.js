import { connect } from 'react-redux'
import { fetchEvents } from '../modules/event'
import EventList from '../components/event_list'

const mapStateToProps = state => {
  return {
    events: state.eventReducer.data
  }
}

const mapDispatchToPros = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(EventList)