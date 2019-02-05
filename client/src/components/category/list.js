import React, { Component } from 'react'
import styled from 'styled-components'
import ReactTable from 'react-table'
import moment from 'moment'
import Wrapper from '../main_wrapper'
import { EditButton, CreateButton } from '../button'
import ButtonLink from '../edit_button_link'

class CategoryList extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props
    fetchCategories()
  }

  render() {
    const { categories, onClickDelete } = this.props
    return (
      <Wrapper>
        <Header>
          <H2>カテゴリー一覧</H2>
          <StyledCreateButton width="60px" height="30px">
            <ButtonLink to={`/categories/create`} height="26px" color="white">
              Create
            </ButtonLink>
          </StyledCreateButton>
        </Header>
        <ReactTable
          data={categories}
          columns={[
            {
              Header: 'Name',
              accessor: 'name'
            },
            {
              Header: 'Edit',
              Cell: ({ original: category }) => (
                <EditButton width="60px" height="30px" borderColoer="#666">
                  <ButtonLink
                    to={`/categories/${category.id}/edit`}
                    height="26px"
                  >
                    Edit
                  </ButtonLink>
                </EditButton>
              )
            },
            {
              Header: 'Delete',
              Cell: ({ original: category }) => {
                return (
                  <EditButton
                    width="60px"
                    height="30px"
                    borderColoer="#666"
                    onClick={() => onClickDelete(category.id)}
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

export default CategoryList
