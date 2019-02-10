import * as React from 'react'
import { useOnMount } from '../../custom_fooks/index'
import styled from 'styled-components'
import { EventForm } from './form'
import Wrapper from '../main_wrapper'
import { createOptions } from '../../util'

function EventCreate(props) {
  useOnMount(props, ({ fetchCategories, fetchCompanies }) => {
    fetchCategories()
    fetchCompanies()
  })

  const { categories, companies, handleSubmit, history } = props
  const options = createOptions(companies, 'id', 'name')
  const categoryOptions = createOptions(categories, 'id', 'name')

  return (
    <Wrapper>
      <H2>イベント作成</H2>
      <EventForm
        history={history}
        options={options}
        categoryOptions={categoryOptions}
        handleSubmit={handleSubmit}
        initialValues={{
          id: '',
          name: '',
          company_id: '',
          site_url: '',
          categories: []
        }}
      />
    </Wrapper>
  )
}

// class EventCreate extends React.Component<any> {
//   componentDidMount() {
//     const { fetchCategories, fetchCompanies } = this.props
//     fetchCategories()
//     fetchCompanies()
//   }

//   render() {
//     const { categories, companies, handleSubmit, history } = this.props
//     const options = createOptions(companies, 'id', 'name')
//     const categoryOptions = createOptions(categories, 'id', 'name')

//     return (
//       <Wrapper>
//         <H2>イベント作成</H2>
//         <EventForm
//           history={history}
//           options={options}
//           categoryOptions={categoryOptions}
//           handleSubmit={handleSubmit}
//           initialValues={{
//             id: '',
//             name: '',
//             company_id: '',
//             site_url: '',
//             categories: []
//           }}
//         />
//       </Wrapper>
//     )
//   }
// }

const H2 = styled.h2`
  margin-bottom: 10px;
`

export default EventCreate
