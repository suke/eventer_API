import React, { Component } from 'react'
import styled from 'styled-components'
import ReactTable from 'react-table'
import moment from 'moment'
import Wrapper from './main_wrapper_base'
import EditButton from './button/edit_button'
import Link from './edit_button_link'

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
    id: 'created_at',
    accessor: event => moment(event.created_at).format('YYYY-MM-DD h:mm:ss')
  },
  {
    Header: 'Updated_at',
    id: 'updated_at',
    accessor: event => moment(event.updated_at).format('YYYY-MM-DD h:mm:ss')
  },
  {
    Header: 'Show',
    Cell: ({ original: event }) => (
      <EditButton width="60px" height="30px">
        <Link to={`/events/${event.id}/show`}>Show</Link>
      </EditButton>
    )
  },
  {
    Header: 'Edit',
    Cell: ({ original: event }) => (
      <EditButton width="60px" height="30px">
        <Link to={`/events/${event.id}`}>Edit</Link>
      </EditButton>
    )
  }
]

class EventList extends Component {
  componentDidMount() {
    const { fetchEvents } = this.props
    fetchEvents()
  }

  render() {
    const { events } = this.props
    return (
      <Wrapper>
        <H2>イベント一覧</H2>
        <ReactTable
          data={events}
          columns={columns}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </Wrapper>
    )
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default EventList
