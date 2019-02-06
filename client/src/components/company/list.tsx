import * as React from 'react'
import styled from 'styled-components'
import ReactTable from 'react-table'
import Wrapper from '../main_wrapper'
import { EditButton, CreateButton } from '../button'
import ButtonLink from '../edit_button_link'

class CompanyList extends React.Component<any> {
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
          <StyledCreateButton width="60px" height="30px">
            <ButtonLink to={`/companies/create`} height="26px" color="white">
              Create
            </ButtonLink>
          </StyledCreateButton>
        </Header>
        <ReactTable
          data={companies}
          columns={[
            {
              Header: 'Name',
              accessor: 'name'
            },
            {
              Header: 'Edit',
              Cell: ({ original: company }) => (
                <EditButton width="60px" height="30px" borderColor="#666">
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
                    borderColor="#666"
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

const StyledCreateButton = styled(CreateButton)`
  margin-right: 40px;
`

export default CompanyList