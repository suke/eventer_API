import React, { Component } from 'react'
import styled from 'styled-components'
import ReactTable from 'react-table'
import moment from 'moment'
import Wrapper from '../main_wrapper'
import Button, { EditButton } from '../button'
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
          <CreateButton width="60px" height="30px" borderColoer="#666">
            <ButtonLink to={`/categories/create`} height="26px">
              Create
            </ButtonLink>
          </CreateButton>
        </Header>
        <ReactTable
          data={categories}
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
              accessor: category =>
                moment(category.created_at).format('YYYY-MM-DD h:mm:ss')
            },
            {
              Header: 'Updated_at',
              id: 'updated_at',
              accessor: category =>
                moment(category.updated_at).format('YYYY-MM-DD h:mm:ss')
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

const CreateButton = styled(Button)`
  margin-right: 40px;
`

export default CategoryList
