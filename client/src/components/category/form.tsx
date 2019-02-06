import * as React from 'react'
import styled from 'styled-components'
import { SubmitButton } from '../button'
import { Formik, Field } from 'formik';
import { InputFieldV2 } from '../form/field'


export const CategoryForm = ({ history, handleSubmit, initialValues }) => {
  return (
    <Wrapper>
      <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={(values, { setSubmitting }) => {
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