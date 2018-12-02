import React, { Component } from 'react'
import styled from 'styled-components'
import ReactTable from 'react-table'
import moment from 'moment'
import Wrapper from '../main_wrapper'
import Button, { EditButton } from '../button'
import ButtonLink from '../edit_button_link'

class CompanyList extends Component {
  componentDidMount() {
    const { fetchCompanies } = this.props
    fetchCompanies()
  }

  render() {
    const { companies, onClickDelete } = this.props
    return (
      <Wrapper>
        <Header>
          <H2>企業一覧</H2>
          <CreateButton width="60px" height="30px" borderColoer="#666">
            <ButtonLink to={`/company/create`} height="26px">
              Create
            </ButtonLink>
          </CreateButton>
        </Header>
        <ReactTable
          data={companies}
          columns={[
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
                  <ButtonLink to={`/company/${event.id}/show`} height="26px">
                    Show
                  </ButtonLink>
                </EditButton>
              )
            },
            {
              Header: 'Edit',
              Cell: ({ original: event }) => (
                <EditButton width="60px" height="30px" borderColoer="#666">
                  <ButtonLink to={`/company/${event.id}/edit`} height="26px">
                    Edit
                  </ButtonLink>
                </EditButton>
              )
            },
            {
              Header: 'Delete',
              Cell: ({ original: event }) => {
                return (
                  <EditButton width="60px" height="30px" borderColoer="#666">
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

const CreateButton = styled(Button)`
  margin-right: 40px;
`

export default CompanyList
