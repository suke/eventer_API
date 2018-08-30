import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'

const columns = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Created_at',
    accessor: 'created_at'
  },
  {
    Header: 'Updated_at',
    accessor: 'updated_at'
  },
  {
    Header: 'Edit',
    Cell: ({ original: event }) => (
      <EditButton width="60px" height="30px">
        <StyledLink to={`/events/${event.id}`}>Edit</StyledLink>
      </EditButton>
    )
  }
]

class EventList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchEvents } = this.props
    fetchEvents()
  }

  render() {
    const { events } = this.props
    return (
      <EventWrapper>
        <H2>イベント一覧</H2>
        <ReactTable
          data={events}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
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
const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: white;
`

const Button = styled.button`
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
`

const EditButton = styled(Button)`
  margin: 0 auto;
  background: #666;
`

export default EventList
