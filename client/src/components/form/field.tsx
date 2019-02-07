import * as React from 'react'
import styled from 'styled-components'
import DatePicker from './date_picker'

export const InputFieldV2 = ({
  field,
  form: { touched, errors },
  label,
  ...props
}) => (
  <FormContainer>
    <Label>{label}</Label>
    <Input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div>{errors[field.name]}</div>
    )}
  </FormContainer>
)

export const SelectFieldV2 = ({ field, label, options, ...props }) => (
  <FormContainer>
    <Label>{label}</Label>
    <Select {...field} {...props}>
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

export const DatePickerFieldV2 = ({ field, label, handleChange, ...props }) => (
  <FormContainer>
    <Label>{label}</Label>
    <DatePicker {...field} {...props} onChange={handleChange} />
  </FormContainer>
)

export const CategoryField = ({ values, arrayHelpers, categoryOptions }) => {
  const [currentCategory, setcategory] = React.useState(null)
  const categories = parseCategory(values.categories, categoryOptions)
  return (
    <FormContainer>
      <Label>Categories</Label>
      <div>
        <Select width="200px" onChange={e => setcategory(e.target.value)}>
          <option value="">Select a category ...</option>
          {categoryOptions.map(option => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        </Select>

        <StyledButton
          type="button"
          onClick={() => {
            if (
              !currentCategory ||
              values.categories.includes(currentCategory)
            ) {
              return
            }
            arrayHelpers.push(currentCategory)
          }}
        >
          Add
        </StyledButton>
        <LabelWrapper>
          {categories.map((val, index) => (
            <LabelContainer key={index}>
              <CategoryLabel>{val.name}</CategoryLabel>
              <DeleteButton
                type="button"
                onClick={() => arrayHelpers.remove(index)}
              >
                ×
              </DeleteButton>
            </LabelContainer>
          ))}
        </LabelWrapper>
      </div>
    </FormContainer>
  )
}

const CategoryLabel = styled.span`
  font-size: 0.7rem;
  padding: 5px;
  display: inline-block;
  border: 2px solid #666;
  border-radius: 5px;
`

const LabelWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: row wrap;
`

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
`

const FormContainer = styled.div`
  display: flex;
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

const Select = styled.select<{ width?: string }>`
  width: ${props => props.width};
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`
Select.defaultProps = {
  width: '400px'
}

const Button = styled.button`
  width: 80px;
  height: 35px;
  border: 1px solid #666;
  border-radius: 5px;
`

const StyledButton = styled(Button)`
  margin-left: 10px;
`

const DeleteButton = styled.button`
  width: 25px;
  height: 25px;
  background: #666;
  color: white;
  margin-left: 5px;
  border-radius: 5px;
  line-height: 25px;
`

const Input = styled.input`
  min-width: 400px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

function parseCategory(categories, categoryOptions) {
  if (categories.length < 1) {
    return []
  }

  return categories.map(val => {
    return {
      id: val,
      name: selectCategory(categoryOptions, val)
    }
  })
}

function selectCategory(categories, val) {
  const category = categories.find(category => category.value === +val)
  return category.name
}
