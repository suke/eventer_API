import { connect } from 'react-redux'
import { fetchEvents } from '../../modules/event'
import EventList from '../../components/event/list'

const mapStateToProps = state => {
  return {
    events: state.eventReducer.events
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
