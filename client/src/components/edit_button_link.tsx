import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ButtonLinkProps {
  height: string
  color?: string
}

const ButtonLink = styled(Link)<ButtonLinkProps>`
  padding: 0 10px;
  width: 100%;
  height: 100%;
  line-height: ${props => props.height};
  display: inline-block;
  color: ${props => props.color};
`
ButtonLink.defaultProps = {
  color: 'black'
}

export default ButtonLink
