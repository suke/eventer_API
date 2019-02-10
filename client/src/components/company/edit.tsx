import * as React from 'react'
import { useOnMount } from '../../custom_fooks/index'
import CompanyForm from './form'
import Wrapper from '../main_wrapper'

function CompanyEdit(props) {
  useOnMount(props, ({ fetchCompaniesAndSelectCurrentCompany, match }) => {
    fetchCompaniesAndSelectCurrentCompany(parseInt(match.params.id, 10))
  })

  const { currentCompany, handleSubmit, history } = props
  return (
    <Wrapper>
      <CompanyForm
        history={history}
        handleSubmit={handleSubmit}
        initialValues={currentCompany}
      />
    </Wrapper>
  )
}
export default CompanyEdit
