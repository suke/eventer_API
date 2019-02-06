import * as React from 'react'
import styled from 'styled-components'
import { Formik, Field } from 'formik'
import { InputFieldV2, SelectFieldV2 } from '../form/field'
import { SubmitButton } from '../button'

export const EventForm = ({
  options,
  history,
  handleSubmit,
  initialValues
}) => {
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          handleSubmit(values, history)
        }}
        render={({ errors, touched, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              label="Name"
              name="name"
              placeholder="name"
              component={InputFieldV2}
            />
            {touched.name && errors.name && <div>{errors.name}</div>}
            <Field
              label="company"
              name="company_id"
              options={options}
              component={SelectFieldV2}
            />
            <Field
              label="site_url"
              name="site_url"
              placeholder="site_url"
              component={InputFieldV2}
            />
            <StyledSubmitButton type="submit" disabled={isSubmitting}>
              Submit
            </StyledSubmitButton>
          </form>
        )}
      />
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

export default EventForm