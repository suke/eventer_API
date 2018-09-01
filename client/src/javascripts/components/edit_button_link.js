import styled from 'styled-components'
import { Link } from 'react-router-dom'

const EditButtonLink = styled(Link)`
  padding: 0 10px;
  width: 100%;
  height: 100%;
  line-height: ${props => props.height};
  display: inline-block;
  color: white;
`

export default EditButtonLink
