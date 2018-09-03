import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { InputField, SelectField } from '../form/field'
import { SubmitButton } from '../../components/button'

const EventForm = ({ handleSubmit, options }) => (
  <Wrapper>
    <form onSubmit={handleSubmit}>
      <Field name="name" component={InputField} type="text" label="name" />
      <Field
        name="company_id"
        type="select"
        component={SelectField}
        label="company"
        options={options}
        initila
      />
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

export default EventForm
