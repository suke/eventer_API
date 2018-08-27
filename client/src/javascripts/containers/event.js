import { connect } from 'react-redux'
import { getEvents } from '../modules/event'
import Event from '../components/event'

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
)(Event)
