import styled from 'styled-components'

const Button = styled.button`
  display: block;
  border-radius: 5px;
  min-width: ${props => props.width};
  height: ${props => props.height};
  border: 2px solid ${props => props.borderColoer};
`

export const SubmitButton = styled(Button)`
  color: white;
  background-color: #1ea1ff;
`

export const CreateButton = styled(Button)`
  color: white;
  background-color: #1ea1ff;
`

SubmitButton.defaultProps = {
  width: '120px',
  height: '40px',
  borderColor: '#666'
}

export const EditButton = styled(Button)`
  margin: 0 auto;
`

export default Button
