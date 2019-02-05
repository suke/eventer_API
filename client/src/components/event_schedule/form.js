import React from 'react'
import styled from 'styled-components'
import { Formik, Field } from 'formik'
import { InputFieldV2, DatePickerFieldV2 } from '../form/field'
import { SubmitButton } from '../../components/button'

// const ScheduleForm = ({ handleSubmit }) => {
//   return (
//     <Wrapper>
//       <form onSubmit={handleSubmit}>
//         <Field
//           name="started_at"
//           label="started_at"
//           component={DatePickerField}
//         />
//         <Field name="ended_at" label="ended_at" component={DatePickerField} />
//         <Field
//           name="address"
//           component={InputField}
//           type="text"
//           label="address"
//         />
//         <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
//       </form>
//     </Wrapper>
//   )
// }

export const ScheduleForm = ({
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
        render={({
          errors,
          touched,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          ...props
        }) => (
          <form onSubmit={handleSubmit}>
            <Field
              label="開始日"
              name="started_at"
              placeholder="name"
              component={DatePickerFieldV2}
              handleChange={date => {
                setFieldValue('started_at', date, false)
              }}
            />
            {touched.name && errors.name && <div>{errors.name}</div>}
            <Field
              label="終了日"
              name="ended_at"
              options={options}
              component={DatePickerFieldV2}
              handleChange={date => {
                setFieldValue('ended_at', date, false)
              }}
            />
            <Field
              label="住所"
              name="address"
              placeholder="住所"
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

export default ScheduleForm
