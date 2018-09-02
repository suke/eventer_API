import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { InputField, SelectField } from '../input'
import { SubmitButton } from '../../button'

const EventForm = ({ handleSubmit, options, ...props }) => {
  return (
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

const defaultForm = reduxForm({
  form: 'event',
  enableReinitialize: true
})(EventForm)

export default defaultForm

export const EditForm = connect(state => ({
  initialValues: {
    id: state.eventReducer.currentEvent.id,
    name: state.eventReducer.currentEvent.name,
    company_id: state.eventReducer.currentEvent.company_id
  }
}))(defaultForm)
