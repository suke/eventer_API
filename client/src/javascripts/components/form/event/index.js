import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { InputField, SelectField } from '../input'

const EventForm = ({ options }) => (
  <form>
    <Field name="name" component={InputField} type="text" label="name" />
    <Field
      name="company"
      type="select"
      component={SelectField}
      label="company"
      options={options}
    />
    <button type="submit">Submit</button>
  </form>
)

export default reduxForm({
  form: 'event'
})(EventForm)
