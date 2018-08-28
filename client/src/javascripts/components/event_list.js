import React, { Component } from 'react'
import styled from 'styled-components'
import { Route, Link, Switch } from 'react-router-dom'
import Event from './event'

class EventList extends Component {
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
        <H2>イベント一覧</H2>
        <ul>
          {events.map(event => (
            <ItemList key={event.id}>
              <Link to={`/events/${event.id}`}>{event.name}</Link>
            </ItemList>
          ))}
        </ul>
      </EventWrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

const EventWrapper = styled.div`
  grid-area: content;
  width: calc(100% - 30%);
  background: white;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px 0px;
`
const ItemList = styled.li`
  margin-bottom: 10px;
`

export default EventList
