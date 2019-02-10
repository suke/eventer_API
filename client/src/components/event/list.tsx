import * as React from 'react'
import { useOnMount } from '../../custom_fooks/index'
import styled from 'styled-components'
import ReactTable from 'react-table'
import Wrapper from '../main_wrapper'
import { EditButton, CreateButton } from '../button'
import ButtonLink from '../edit_button_link'

function EventList(props) {
  useOnMount(props, ({ fetchEvents }) => {
    fetchEvents()
  })

  const { events, onClickDelete } = props
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
            Header: 'Show',
            Cell: ({ original: event }) => (
              <EditButton width="60px" height="30px" borderColor="#666">
                <ButtonLink to={`/events/${event.id}/show`} height="26px">
                  Show
                </ButtonLink>
              </EditButton>
            )
          },
          {
            Header: 'Edit',
            Cell: ({ original: event }) => (
              <EditButton width="60px" height="30px" borderColor="#666">
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
                  borderColor="#666"
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
