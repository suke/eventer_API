import React, { Component } from 'react'
import styled from 'styled-components'

class Event extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { getEvents } = this.props
    getEvents()
  }

  render() {
    const { events } = this.props
    return (
      <EventWrapper>
        <h2>Event</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      </EventWrapper>
    )
  }
}

const EventWrapper = styled.div`
  grid-area: content;
`

export default Event
