import styled from 'styled-components'

const Button = styled.button`
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
`

export const EditButton = styled(Button)`
  margin: 0 auto;
  background: #666;
`

export default Button
