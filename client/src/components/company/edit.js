import React, { Component } from 'react'
import { CompanyForm } from '../company/form'
import Wrapper from '../main_wrapper'

class CompanyEdit extends Component {
  componentDidMount() {
    const { fetchCompaniesAndSelectCurrentCompany, match } = this.props
    fetchCompaniesAndSelectCurrentCompany(parseInt(match.params.id, 10))
  }

  render() {
    const { currentCompany, handleSubmit, history } = this.props
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
}

export default CompanyEdit
