import React, { Component } from 'react'
import styled from 'styled-components'
import ReactTable from 'react-table'
import moment from 'moment'
import Wrapper from '../main_wrapper'
import { EditButton, CreateButton } from '../button'
import ButtonLink from '../edit_button_link'

class EventList extends Component {
  componentDidMount() {
    const { fetchEvents } = this.props
    fetchEvents()
  }

  render() {
    const { events, onClickDelete } = this.props
    return (
      <Wrapper>
        <Header>
          <H2>イベント一覧</H2>
          <StyledCreateButton width="60px" height="30px">
            <ButtonLink to={`/events/create`} height="26px" color="white">
              Create
            </ButtonLink>
          </StyledCreateButton>
        </Header>
        <ReactTable
          data={events}
          columns={[
            {
              Header: 'Name',
              accessor: 'name'
            },
            {
              Header: 'SiteURL',
              accessor: 'site_url'
            },
            {
              Header: 'Created_at',
              id: 'created_at',
              accessor: event =>
                moment(event.created_at).format('YYYY-MM-DD h:mm:ss')
            },
            {
              Header: 'Updated_at',
              id: 'updated_at',
              accessor: event =>
                moment(event.updated_at).format('YYYY-MM-DD h:mm:ss')
            },
            {
              Header: 'Show',
              Cell: ({ original: event }) => (
                <EditButton width="60px" height="30px" borderColoer="#666">
                  <ButtonLink to={`/events/${event.id}/show`} height="26px">
                    Show
                  </ButtonLink>
                </EditButton>
              )
            },
            {
              Header: 'Edit',
              Cell: ({ original: event }) => (
                <EditButton width="60px" height="30px" borderColoer="#666">
                  <ButtonLink to={`/events/${event.id}/edit`} height="26px">
                    Edit
                  </ButtonLink>
                </EditButton>
              )
            },
            {
              Header: 'Delete',
              Cell: ({ original: event }) => {
                return (
                  <EditButton
                    width="60px"
                    height="30px"
                    borderColoer="#666"
                    onClick={() => onClickDelete(event.id)}
                  >
                    Delete
                  </EditButton>
                )
              }
            }
          ]}
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledCreateButton = styled(CreateButton)`
  margin-right: 40px;
`

export default EventList
