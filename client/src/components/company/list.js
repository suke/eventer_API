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
    console.log(companies)
    return (
      <Wrapper>
        <Header>
          <H2>企業一覧</H2>
          <CreateButton width="60px" height="30px" borderColoer="#666">
            <ButtonLink to={`/companies/create`} height="26px">
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
              Header: 'Edit',
              Cell: ({ original: company }) => (
                <EditButton width="60px" height="30px" borderColoer="#666">
                  <ButtonLink
                    to={`/companies/${company.id}/edit`}
                    height="26px"
                  >
                    Edit
                  </ButtonLink>
                </EditButton>
              )
            },
            {
              Header: 'Delete',
              Cell: ({ original: company }) => {
                return (
                  <EditButton
                    width="60px"
                    height="30px"
                    borderColoer="#666"
                    onClick={() => onClickDelete(company.id)}
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

const CreateButton = styled(Button)`
  margin-right: 40px;
`

export default CompanyList
