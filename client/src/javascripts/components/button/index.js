import styled from 'styled-components'

const Button = styled.button`
  display: block;
  min-width: ${props => props.width};
  height: ${props => props.height};
  border: 2px solid ${props => props.borderColoer};
`

export const SubmitButton = styled(Button)``

SubmitButton.defaultProps = {
  width: '120px',
  height: '40px',
  borderColoer: '#666'
}

export const EditButton = styled(Button)`
  margin: 0 auto;
`

export default Button
