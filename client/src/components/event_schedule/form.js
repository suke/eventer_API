import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { HiddenField, InputField, DatePickerField } from '../form/field'
import { SubmitButton } from '../../components/button'

const ScheduleForm = ({ handleSubmit }) => {
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Field
          name="started_at"
          label="started_at"
          component={DatePickerField}
        />
        <Field name="ended_at" label="ended_at" component={DatePickerField} />
        <Field
          name="address"
          component={InputField}
          type="text"
          label="address"
        />
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  border: 1px solid #666;
`

const StyledSubmitButton = styled(SubmitButton)`
  margin: 0 auto;
`

export default ScheduleForm
