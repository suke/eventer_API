import React from 'react'
import styled from 'styled-components'
import * as ReduxForm from 'redux-form'
import { InputField } from '../form/field'
import { SubmitButton } from '../../components/button'
import { Formik, Form, Field } from 'formik';
import { InputFieldV2 } from '../form/field'
const CategoryForm = ({ handleSubmit }) => (
  <Wrapper>
    <form onSubmit={handleSubmit}>
      <ReduxForm.Field name="name" component={InputField} type="text" label="name" />
      <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
    </form>
  </Wrapper>
)

export const CategoryFormV2 = ({ history, handleSubmit }) => {
  return (
    <Wrapper>
      <Formik
      initialValues={{
        id: '',
        name: ''
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(true);
        handleSubmit(values, history)
      }}
      render={({
        errors,
        touched,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <Field type="hidden" name="id" />
          <Field label="Name" name="name" placeholder="name" component={InputFieldV2} />
          {touched.name &&
            errors.name && <div>{errors.name}</div>}
          <StyledSubmitButton type="submit" disabled={isSubmitting}>
            Submit
          </StyledSubmitButton>
        </form>
      )}
      >
      </Formik>
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

export default CategoryForm