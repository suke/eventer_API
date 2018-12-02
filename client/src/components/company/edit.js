import React, { Component } from 'react'
import { CompanyForm } from '../../containers/form/company_edit_form_container'
import Wrapper from '../main_wrapper'

class CompanyEdit extends Component {
  componentDidMount() {
    const { fetchCompaniesAndSelectCurrentCompany, match } = this.props
    fetchCompaniesAndSelectCurrentCompany(parseInt(match.params.id, 10))
  }

  render() {
    const { handleSubmit, history } = this.props
    return (
      <Wrapper>
        <CompanyForm history={history} onSubmit={handleSubmit} />
      </Wrapper>
    )
  }
}

export default CompanyEdit
