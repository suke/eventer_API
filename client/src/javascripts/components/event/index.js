import React, { Component } from 'react'
import styled from 'styled-components'
import ReactTable from 'react-table'
import moment from 'moment'
import Wrapper from '../main_wrapper_base'
import { EditButton } from '../button'
import Link from '../edit_button_link'

const columns = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Started_at',
    id: 'started_at',
    accessor: schedule =>
      moment(schedule.started_at).format('YYYY-MM-DD h:mm:ss')
  },
  {
    Header: 'Ended_at',
    id: 'ended_at',
    accessor: schedule => moment(schedule.ended_at).format('YYYY-MM-DD h:mm:ss')
  },
  {
    Header: 'Created_at',
    id: 'created_at',
    accessor: schedule =>
      moment(schedule.created_at).format('YYYY-MM-DD h:mm:ss')
  },
  {
    Header: 'Updated_at',
    id: 'updated_at',
    accessor: schedule =>
      moment(schedule.updated_at).format('YYYY-MM-DD h:mm:ss')
  },
  {
    Header: 'Address',
    accessor: 'address'
  },
  {
    Header: 'Edit',
    Cell: ({ original: schedule }) => (
      <EditButton width="60px" height="30px">
        <Link to={`/events_schedules/${schedule.id}`} height="30px">
          Edit
        </Link>
      </EditButton>
    )
  }
]

class Event extends Component {
  componentDidMount() {
    const { match, fetchEventSchedule } = this.props
    fetchEventSchedule(match.params.id)
  }

  render() {
    const { events, match, schedules } = this.props
    const event = events.find(event => {
      return event.id === parseInt(match.params.id)
    })
    return (
      <Wrapper>
        <H2>{event.name}</H2>
        <H3>スケジュール一覧</H3>
        <ReactTable
          data={schedules}
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

const H3 = styled.h3`
  margin-bottom: 10px;
`

export default Event
