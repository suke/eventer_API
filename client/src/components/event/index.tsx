import * as React from 'react'
import { useOnMount } from '../../custom_fooks/index'
import styled from 'styled-components'
import ReactTable from 'react-table'
import Wrapper from '../main_wrapper'
import { EditButton, CreateButton } from '../button'
import Link from '../edit_button_link'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')

function Event(props) {
  useOnMount(props, ({ match, fetchEventAndSchedule }) => {
    fetchEventAndSchedule(match.params.id)
  })

  const { events, match, schedules } = props
  const event = events.find(event => {
    return event.id === parseInt(match.params.id)
  })
  return (
    <Wrapper>
      <EventPresenter event={event} schedules={schedules} />
    </Wrapper>
  )
}

const EventPresenter = ({ event, schedules }) => {
  if (event) {
    return (
      <React.Fragment>
        <H2>{event.name}</H2>
        <Header>
          <H3>スケジュール</H3>
          <StyledCreateButton width="60px" height="30px">
            <Link
              to={`/events/${event.id}/schedules/create`}
              height="26px"
              color="white"
            >
              CreateSchedule
            </Link>
          </StyledCreateButton>
        </Header>
        <ReactTable
          data={schedules}
          columns={[
            {
              Header: 'Started_at',
              id: 'started_at',
              accessor: schedule =>
                dayjs(schedule.started_at).format('YYYY-MM-DD HH:mm')
            },
            {
              Header: 'Ended_at',
              id: 'ended_at',
              accessor: schedule =>
                dayjs(schedule.ended_at).format('YYYY-MM-DD HH:mm')
            },
            {
              Header: 'Venue',
              accessor: 'venue'
            },
            {
              Header: 'ZipCode',
              accessor: 'zip_code'
            },

            {
              Header: 'Address',
              accessor: 'address'
            },
            {
              Header: 'Edit',
              Cell: ({ original: schedule }) => (
                <EditButton width="60px" height="30px">
                  <Link
                    to={`/events/${schedule.event_id}/schedules/${
                      schedule.id
                    }/edit`}
                    height="30px"
                  >
                    Edit
                  </Link>
                </EditButton>
              )
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </React.Fragment>
    )
  } else {
    return <div>...loading</div>
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
`

const H3 = styled.h3`
  margin-bottom: 10px;
`

const StyledCreateButton = styled(CreateButton)`
  margin-right: 40px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Event
