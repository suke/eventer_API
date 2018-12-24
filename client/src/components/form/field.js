import React from 'react'
import styled from 'styled-components'
import DatePicker from './date_picker'
export const InputField = ({
  input,
  type = 'text',
  label,
  meta: { touched, error }
}) => (
  <FormContainer>
    <Label>{label}</Label>
    <Input {...input} type={type} />
  </FormContainer>
)

export const SelectField = ({
  input,
  label,
  options = [],
  meta: { touched, error }
}) => (
  <FormContainer>
    <Label>{label}</Label>
    <Select {...input}>
      <option value="">
        Select a {label}
        ...
      </option>
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  </FormContainer>
)

export const DatePickerField = ({ input, label, meta: { touched, error } }) => (
  <FormContainer>
    <Label>{label}</Label>
    <DatePicker {...input} />
  </FormContainer>
)

const FormContainer = styled.div`
  padding: 10px;
`
const Label = styled.label`
  display: inline-block;
  min-width: 200px;
  padding: 10px;
  margin-right: 10px;
  font-weight: bold;
  text-align: right;
`

const Select = styled.select`
  min-width: 400px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

const Input = styled.input`
  min-width: 400px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`
