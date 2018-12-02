import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { InputField } from '../form/field'
import { SubmitButton } from '../../components/button'

const CompanyForm = ({ handleSubmit }) => (
  <Wrapper>
    <form onSubmit={handleSubmit}>
      <Field name="name" component={InputField} type="text" label="name" />
      <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
    </form>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  border: 1px solid #666;
`

const StyledSubmitButton = styled(SubmitButton)`
  margin: 0 auto;
`

export default CompanyForm
